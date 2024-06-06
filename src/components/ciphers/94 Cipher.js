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
        const info = (
            <>
                <p>
                    The 94 Cipher is a simple substitution cipher based on a 94-character set. 
                    It's often used for encoding and decoding messages in ASCII-based systems.
                </p>
                <p>
                    To encrypt using the 94 Cipher, each character in the plaintext is replaced with a corresponding character from the cipher's set.
                </p>
                <ul>
                    <li>Substitution Cipher: Each character in the plaintext is replaced by a character from a predefined set.</li>
                    <li>Character Set: The 94 Cipher uses a set of 94 characters, typically comprising printable ASCII characters.</li>
                    <li>Encryption: To encrypt, substitute each character in the plaintext with a corresponding character from the cipher set.</li>
                    <li>Decryption: Decryption involves reversing the substitution process using the same cipher set.</li>
                    <li>Example: 'A' might be replaced with '!', 'B' with '@', 'C' with '#', and so forth.</li>
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
            
            <CipherFactory encode={encode} decode={decode} keyComponentA="Key A"/>
        </>
    );
};