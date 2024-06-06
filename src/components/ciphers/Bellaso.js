import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BellasoCipher({ ongetInfo }) {
    function encode(plaintext, keyword) {
        plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
        keyword = keyword.toUpperCase().replace(/[^A-Z]/g, '');
        let ciphertext = "";
    
        for (let i = 0; i < plaintext.length; i++) {
            let plainChar = plaintext.charCodeAt(i) - 65;
            let keyChar = keyword.charCodeAt(i % keyword.length) - 65;
            let encryptedChar = (plainChar + keyChar) % 26;
            ciphertext += String.fromCharCode(encryptedChar + 65);
        }
    
        return ciphertext;
    }
    
    function decode(ciphertext, keyword) {
        ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
        keyword = keyword.toUpperCase().replace(/[^A-Z]/g, '');
        let plaintext = "";
    
        for (let i = 0; i < ciphertext.length; i++) {
            let cipherChar = ciphertext.charCodeAt(i) - 65;
            let keyChar = keyword.charCodeAt(i % keyword.length) - 65;
            let decryptedChar = (cipherChar - keyChar + 26) % 26;
            plaintext += String.fromCharCode(decryptedChar + 65);
        }
    
        return plaintext;
    }


    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Bellaso Cipher, also known as the Vigenère cipher, is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. 
                    It uses a keyword to apply a series of Caesar ciphers to the plaintext.
                </p>
                <p>
                    To encrypt using the Bellaso Cipher, a keyword is repeated so that it matches the length of the plaintext. 
                    Each letter of the plaintext is then shifted along some number of places dictated by the corresponding letter of the keyword.
                </p>
                <ul>
                    <li>Polyalphabetic Substitution Cipher: Multiple Caesar ciphers are used based on the letters of a keyword.</li>
                    <li>Key Pattern: A keyword is chosen and repeated to match the length of the plaintext.</li>
                    <li>Encryption: To encrypt, shift each letter in the plaintext by the number of positions indicated by the corresponding letter of the keyword.</li>
                    <li>Decryption: Decryption involves reversing the shifts using the same keyword.</li>
                    <li>Example: With the keyword 'KEY' and plaintext 'HELLO', the keyword is repeated to 'KEYKE', and each letter of 'HELLO' is shifted according to 'KEYKE'.</li>
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



