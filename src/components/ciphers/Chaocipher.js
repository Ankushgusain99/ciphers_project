import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';


export default function ChaoCipher({ongetInfo}) {

    function createFullAlphabet(startLetter) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = alphabet.indexOf(startLetter.toUpperCase());
        return alphabet.slice(index) + alphabet.slice(0, index);
    }
    
    function rotateDisks(leftAlphabet, rightAlphabet, rotationCount) {
        // Rotate left alphabet
        leftAlphabet = leftAlphabet.slice(rotationCount) + leftAlphabet.slice(0, rotationCount);
        // Move second letter to end
        leftAlphabet = leftAlphabet[0] + leftAlphabet.slice(2) + leftAlphabet[1];
    
        // Rotate right alphabet
        rightAlphabet = rightAlphabet.slice(rotationCount) + rightAlphabet.slice(0, rotationCount);
        // Move second letter to end
        rightAlphabet = rightAlphabet[0] + rightAlphabet.slice(2) + rightAlphabet[1];
    
        return { leftAlphabet, rightAlphabet };
    }
    
    function encode(plaintext, leftAlphabet, rightAlphabet) {
        const rotationCount = 1;
        plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
        let ciphertext = '';
    
        for (let char of plaintext) {
            let index = leftAlphabet.indexOf(char);
            if (index === -1) {
                ciphertext += char;  // Keep the character as is if not found
            } else {
                ciphertext += rightAlphabet[index];
                let rotated = rotateDisks(leftAlphabet, rightAlphabet, rotationCount);
                leftAlphabet = rotated.leftAlphabet;
                rightAlphabet = rotated.rightAlphabet;
            }
        }
    
        return ciphertext;
    }
    
    function decode(ciphertext, leftAlphabet, rightAlphabet) {
        const rotationCount = 1;
        ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
        let plaintext = '';
    
        for (let char of ciphertext) {
            let index = rightAlphabet.indexOf(char);
            if (index === -1) {
                plaintext += char;  // Keep the character as is if not found
            } else {
                plaintext += leftAlphabet[index];
                let rotated = rotateDisks(leftAlphabet, rightAlphabet, rotationCount);
                leftAlphabet = rotated.leftAlphabet;
                rightAlphabet = rotated.rightAlphabet;
            }
        }
    
        return plaintext;
    }
    
    
          
  const showInformation = () => {
    const info = (
        <>
            <p>
                The ASCII Cipher is a simple character substitution cipher based on the ASCII encoding standard. 
                Each character in the plaintext is replaced with its corresponding ASCII value.
            </p>
            <p>
                To encrypt using the ASCII Cipher, simply convert each character of your text to its ASCII value.
            </p>
            <ul>
                <li>Substitution Cipher: Each character in the plaintext is replaced by its corresponding ASCII value.</li>
                <li>ASCII Encoding: ASCII (American Standard Code for Information Interchange) is a character encoding standard that represents text in computers and other devices.</li>
                <li>Encryption: To encrypt, convert each character in the plaintext to its ASCII value.</li>
                <li>Decryption: Decryption involves converting each ASCII value back to its corresponding character.</li>
                <li>Example: 'A' becomes '65', 'B' becomes '66', 'C' becomes '67', and so forth.</li>
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