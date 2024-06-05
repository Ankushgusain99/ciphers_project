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

    return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'} />
};



