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
    The Autokey Cipher is a substitution cipher that extends the Vigenère cipher. It utilizes a key that is as long as the plaintext, making it a polyalphabetic substitution cipher.
</p>
<p>
    To encrypt using the Autokey Cipher, each character of the plaintext is combined with a character from the key to produce the ciphertext.
</p>
<ul>
    <li>Substitution Cipher: Each character in the plaintext is replaced by a character derived from a combination of the plaintext and the key.</li>
    <li>Key Length: The key used in the Autokey Cipher is as long as the plaintext, extending the Vigenère cipher's key.</li>
    <li>Encryption: To encrypt, each character in the plaintext is combined with a character from the key using a mathematical operation, typically modular addition.</li>
    <li>Decryption: Decryption involves reversing the encryption process, subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
    <li>Example: Using a key 'KEY', if 'H' in the plaintext is combined with 'K' from the key, the resulting ciphertext character might be 'S'.</li>
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



