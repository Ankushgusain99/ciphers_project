import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Checkerboard({ ongetInfo }) {

    function generateCheckerboardSquare(keyword) {
        keyword = keyword.toUpperCase().replace(/J/g, "I");
        let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        let square = [];
        let usedLetters = new Set();
    
        for (let char of keyword) {
            if (!usedLetters.has(char)) {
                square.push(char);
                usedLetters.add(char);
            }
        }
    
        for (let char of alphabet) {
            if (!usedLetters.has(char)) {
                square.push(char);
                usedLetters.add(char);
            }
        }
    
        let matrix = [];
        for (let i = 0; i < 5; i++) {
            matrix.push(square.slice(i * 5, i * 5 + 5));
        }
    
        return matrix;
    }
    
    // Function to encrypt plaintext using the Autokey cipher
    function encode(plaintext, keyword) {
        let square = generateCheckerboardSquare(keyword);
        let coordinates = {};
    
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                coordinates[square[i][j]] = `${i + 1}${j + 1}`;
            }
        }
    
        plaintext = plaintext.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, '');
        let ciphertext = "";
    
        for (let char of plaintext) {
            ciphertext += coordinates[char];
        }
    
        return ciphertext;
    }

    
// Function to decrypt ciphertext using the Autokey cipher
function decode(ciphertext, keyword) {
    let square = generateCheckerboardSquare(keyword);
    let coordinates = {};

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            coordinates[`${i + 1}${j + 1}`] = square[i][j];
        }
    }

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += 2) {
        let coord = ciphertext.substring(i, i + 2);
        plaintext += coordinates[coord];
    }

    return plaintext;
}



    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Checkerboard Cipher, also known as the Masonic Cipher or the Baconian Cipher, is a binary encoding scheme.
                    It replaces characters in the plaintext with a binary representation based on their position in a grid.
                </p>
                <p>
                    To encrypt using the Checkerboard Cipher, you first need a grid with predefined categories (e.g., letters, numbers, symbols).
                    Each character in the plaintext is then replaced with its corresponding binary representation based on its position in the grid.
                </p>
                <ul>
                    <li>Binary Encoding: Characters in the plaintext are replaced with binary representations.</li>
                    <li>Checkerboard Grid: The grid contains categories like letters, numbers, or symbols, arranged in rows and columns.</li>
                    <li>Encoding Process: Each character is replaced with its binary representation based on its position in the grid.</li>
                    <li>Decoding: Decryption involves converting binary strings back to their corresponding characters based on the grid.</li>
                    <li>Example: A common grid includes letters A-Z and digits 0-9. 'A' might correspond to '00', 'B' to '01', and so on.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'} />
};



