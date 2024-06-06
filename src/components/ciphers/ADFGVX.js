import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';


export default function ADFGVX({ongetInfo}) {

    const polybiusSquare = [
        ['A', 'D', 'F', 'G', 'V', 'X'],
        ['A', 'B', 'C', 'D', 'E', 'F'],
        ['G', 'H', 'I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', 'W', 'X'],
        ['Y', 'Z', '0', '1', '2', '3'],
        ['4', '5', '6', '7', '8', '9']
    ];
    
    function createPolybiusSquare(keyword) {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        keyword = keyword.toUpperCase().replace(/[^A-Z0-9]/g, '');
        let square = [];
        let usedChars = new Set();
    
        for (let char of keyword) {
            if (!usedChars.has(char)) {
                square.push(char);
                usedChars.add(char);
            }
        }
    
        for (let char of alphabet) {
            if (!usedChars.has(char)) {
                square.push(char);
                usedChars.add(char);
            }
        }
    
        let matrix = [];
        for (let i = 0; i < 6; i++) {
            matrix.push(square.slice(i * 6, i * 6 + 6));
        }
    
        return matrix;
    }
    
    function getCoordinates(char, square) {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (square[i][j] === char) {
                    return [polybiusSquare[0][i], polybiusSquare[0][j]];
                }
            }
        }
        return null;
    }
    
    function encode(plaintext, keyword, transpositionKey) {
        let square = createPolybiusSquare(keyword);
        plaintext = plaintext.toUpperCase().replace(/[^A-Z0-9]/g, '');
        let coordinates = [];
    
        for (let char of plaintext) {
            coordinates.push(...getCoordinates(char, square));
        }
    
        let transposedText = "";
        let transpositionKeyLength = transpositionKey.length;
        let numRows = Math.ceil(coordinates.length / transpositionKeyLength);
        let grid = Array.from({ length: numRows }, () => new Array(transpositionKeyLength).fill(''));
    
        for (let i = 0; i < coordinates.length; i++) {
            grid[Math.floor(i / transpositionKeyLength)][i % transpositionKeyLength] = coordinates[i];
        }
    
        let sortedKey = transpositionKey.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
        for (let { index } of sortedKey) {
            for (let row = 0; row < numRows; row++) {
                if (grid[row][index] !== '') {
                    transposedText += grid[row][index];
                }
            }
        }
    
        return transposedText;
    }
    
    function decode(ciphertext, keyword, transpositionKey) {
        let square = createPolybiusSquare(keyword);
        let transpositionKeyLength = transpositionKey.length;
        let numRows = Math.ceil(ciphertext.length / transpositionKeyLength);
        let grid = Array.from({ length: numRows }, () => new Array(transpositionKeyLength).fill(''));
    
        let sortedKey = transpositionKey.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
        let charIndex = 0;
    
        for (let { index } of sortedKey) {
            for (let row = 0; row < numRows; row++) {
                if (charIndex < ciphertext.length) {
                    grid[row][index] = ciphertext[charIndex++];
                }
            }
        }
    
        let coordinates = [];
        for (let row of grid) {
            for (let char of row) {
                if (char !== '') {
                    coordinates.push(char);
                }
            }
        }
    
        let plaintext = "";
        for (let i = 0; i < coordinates.length; i += 2) {
            let row = polybiusSquare[0].indexOf(coordinates[i]);
            let col = polybiusSquare[0].indexOf(coordinates[i + 1]);
            plaintext += square[row][col];
        }
    
        return plaintext;
    }      
  const showInformation = () => {
    const info = (
        <>
            <p>
                The ADFGVX Cipher is a fractionated cipher used by the German Army during World War I. 
                It is a combination of a modified Polybius square and a single columnar transposition.
            </p>
            <p>
                To encrypt using the ADFGVX Cipher, you first substitute the plaintext using a Polybius square, 
                then transpose the resulting fractionated ciphertext using a key.
            </p>
            <ul>
                <li>Polybius Square: A 6x6 grid that includes the letters ADFGVX along the rows and columns. Each cell contains a letter of the alphabet or a digit.</li>
                <li>Substitution Step: Each letter of the plaintext is replaced by its coordinates in the Polybius square, resulting in a pair of ADFGVX letters.</li>
                <li>Transposition Step: The resulting pairs are written out in rows under the columns labeled with the key, and then the columns are rearranged according to the key.</li>
                <li>Encryption: Convert each plaintext character to a pair of ADFGVX letters, then reorder the pairs based on the transposition key.</li>
                <li>Decryption: Reverse the transposition to obtain the fractionated ciphertext, then use the Polybius square to get back the plaintext.</li>
                <li>Example: With the key 'KEYWORD' and plaintext 'HELLO', you might substitute 'H' as 'AF', 'E' as 'DG', etc., and then transpose the pairs based on the key.</li>
            </ul>
        </>
    );
    ongetInfo(info);
};

React.useEffect(() => {
    showInformation();
}, []);

      return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'} keyComponentB={'STR'} />
};