import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BifidCipher({ ongetInfo }) {
    function generatePolybiusSquare(keyword) {
        let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        keyword = keyword.toUpperCase().replace(/J/g, "I");
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
    
        return square;
    }
    
    function getCoordinates(char, square) {
        let index = square.indexOf(char);
        return [Math.floor(index / 5), index % 5];
    }
    
    function encode(plaintext, keyword) {
        plaintext = plaintext.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, '');
        let square = generatePolybiusSquare(keyword);
        let coordinates = [];
    
        for (let char of plaintext) {
            coordinates.push(...getCoordinates(char, square));
        }
    
        let newCoordinates = [];
        for (let i = 0; i < coordinates.length / 2; i++) {
            newCoordinates.push([coordinates[i], coordinates[Math.floor(coordinates.length / 2) + i]]);
        }
    
        let ciphertext = "";
        for (let [row, col] of newCoordinates) {
            ciphertext += square[row * 5 + col];
        }
    
        return ciphertext;
    }
    
    function decode(ciphertext, keyword) {
        ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
        let square = generatePolybiusSquare(keyword);
        let coordinates = [];
    
        for (let char of ciphertext) {
            coordinates.push(...getCoordinates(char, square));
        }
    
        let rows = coordinates.slice(0, coordinates.length / 2);
        let cols = coordinates.slice(coordinates.length / 2);
    
        let plaintext = "";
        for (let i = 0; i < rows.length; i++) {
            plaintext += square[rows[i] * 5 + cols[i]];
        }
    
        return plaintext;
    }
        
    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Bifid Cipher is a classical cipher that combines the Polybius square with transposition and fractionation. 
                    It was invented by Felix Delastelle and is known for its complexity and strength compared to other classical ciphers.
                </p>
                <p>
                    To encrypt using the Bifid Cipher, the plaintext is first converted into coordinates using a Polybius square. 
                    These coordinates are then split and rearranged before being mapped back to letters.
                </p>
                <ul>
                    <li>Polybius Square: A 5x5 grid filled with letters of the alphabet (I and J are often combined).</li>
                    <li>Coordinates: Each letter in the plaintext is converted to its corresponding row and column numbers in the Polybius square.</li>
                    <li>Transposition: The coordinates are then split into two separate groups (rows and columns) and rearranged.</li>
                    <li>Encryption: The rearranged coordinates are converted back to letters using the Polybius square.</li>
                    <li>Decryption: Decryption involves reversing the process by converting letters to coordinates, splitting and rearranging them, and then mapping back to letters.</li>
                    <li>Example: With the plaintext 'HELLO', using the Polybius square, you might get coordinates, split and rearrange them, and then map them back to encrypted text.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'}/>
};



