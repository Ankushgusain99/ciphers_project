import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function AffineCipher({ ongetInfo }) {
        const[values,setValues]=useState(-1)
        
        // Function to encrypt a message using the affine cipher
        function encryptAffine(message, a, b) {
            // Convert message to uppercase and remove all spaces and special characters\
            message = message.toUpperCase().replace(/[^A-Z]/g, '');
            let result = '';
    
            // Iterate through each character in the message
            for (let i = 0; i < message.length; i++) {
                let charCode = message.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
                let encryptedCharCode = (a * charCode + b) % 26;  // Apply the affine cipher formula
                let encryptedChar = String.fromCharCode(encryptedCharCode + 65);  // Convert encrypted number back to character
                result += encryptedChar;  // Add encrypted character to result string
                
            }
            return result;
        }
    
        // Function to decrypt a message using the affine cipher
        function decryptAffine(ciphertext, a, b) {
            let result = '';
            // Find the modular multiplicative inverse of a
            for (let i = 0; i < 26; i++) {
                if ((i * a) % 26 === 1) {
                    setValues(i);
                    break;
                }
            }
            
            // Iterate through each character in the ciphertext
            for (let i = 0; i < ciphertext.length; i++) {
                let charCode = ciphertext.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
                let decryptedCharCode = (values * (charCode - b + 26)) % 26;  // Apply the affine cipher formula
                let decryptedChar = String.fromCharCode(decryptedCharCode + 65);  // Convert decrypted number back to character
                result += decryptedChar;  // Add decrypted character to result string
                
            }
    
            return result;
        }
    // Show information about the Affine Cipher

    

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Affine Cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and then converted back to a letter.
                </p>
                <p>
                    The encryption function for the Affine Cipher takes the form of:
                    <br />
                    <strong>C = (a * P + b) % 26</strong>
                </p>
                <ul>
                    <li>Monoalphabetic Substitution Cipher: Each letter of the plaintext is replaced by a corresponding letter of the ciphertext.</li>
                    <li>Mathematical Function: The encryption function involves multiplying the plaintext letter's numerical value by a constant 'a', adding a constant 'b', and then taking the result modulo 26.</li>
                    <li>Decryption: Decryption involves applying the inverse function to convert the ciphertext back to plaintext.</li>
                    <li>Key: The key for the Affine Cipher consists of two numbers, 'a' and 'b', where 'a' must be chosen such that 'a' and the length of the alphabet are coprime.</li>
                    <li>Example: With the key (a=5, b=8), 'HELLO' might become 'ZOOPM'.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        showInformation();
    }, []);


    return (
        <>
            
            <CipherFactory encode={encryptAffine} decode={decryptAffine} keyComponentA="Key A" keyComponentB="Key B" />
        </>
    );
};