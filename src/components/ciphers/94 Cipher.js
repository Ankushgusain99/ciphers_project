import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Cipher94({ ongetInfo}) {

    function encode(plaintext, shift) {
        let ciphertext = '';
        for (let char of plaintext) {
            let code = char.charCodeAt(0);
            if (code >= 32 && code <= 126) {
                let newCode = ((code - 32 + shift) % 94) + 32;
                ciphertext += String.fromCharCode(newCode);
            } else {
                ciphertext += char;
            }
        }
        return ciphertext;
    }
    
    function decode(ciphertext, shift) {
        let plaintext = '';
        for (let char of ciphertext) {
            let code = char.charCodeAt(0);
            if (code >= 32 && code <= 126) {
                let newCode = ((code - 32 - shift + 94) % 94) + 32;
                plaintext += String.fromCharCode(newCode);
            } else {
                plaintext += char;
            }
        }
        return plaintext;
    }
    
        
    const showInformation = () => {
        return(
        <><p>
            The Affine Cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. It employs a pair of keys (a, b), and each letter is encrypted using the formula (a * x + b) mod 26, where x is the numeric equivalent of the letter. To decrypt the message, the formula (a^-1 * (y - b + 26)) mod 26 is used, where y is the numeric equivalent of the encrypted letter and a^-1 is the modular multiplicative inverse of a modulo 26.
        </p>
        <p>
            To encrypt using the Affine Cipher, simply enter your text and choose appropriate keys for 'a' and 'b'.
        </p>
        <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by a different letter according to a fixed system.</li>
            <li>Mathematical Formula: Encryption and decryption are based on modular arithmetic using the formula (a * x + b) mod 26.</li>
            <li>Key Selection: The security of the cipher depends on the selection of keys 'a' and 'b', where 'a' must be coprime with 26.</li>
            <li>Decryption: The decryption process involves finding the modular multiplicative inverse of 'a' modulo 26.</li>
            <li>Example: Using keys 'a' = 5 and 'b' = 8, 'A' becomes 'I', 'B' becomes 'N', 'C' becomes 'S', and so forth.</li>
        </ul>
        
        </>
        );

        // Call the function passed from the parent component to send the information
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        let info=showInformation();
        ongetInfo(info)
    }, []);

    
    return (
        <>
            
            <CipherFactory encode={encode} decode={decode} keyComponentA="Key A"/>
        </>
    );
};