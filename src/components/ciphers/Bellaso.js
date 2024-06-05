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
    The Beaufort Cipher is a variant of the Vigenère cipher, employing a reversed alphabet key to encrypt and decrypt messages.
</p>
<p>
    To encrypt using the Beaufort Cipher, each character of the plaintext is combined with a character from the key to produce the ciphertext.
</p>
<ul>
    <li>Substitution Cipher: The Beaufort Cipher substitutes each plaintext character with a character determined by a combination of the plaintext and the key.</li>
    <li>Key Length: Similar to the Vigenère cipher, the key length in the Beaufort Cipher matches the length of the plaintext.</li>
    <li>Encryption: To encrypt, each character in the plaintext is combined with a character from the key using a mathematical operation, typically modular subtraction or reversing the alphabet.</li>
    <li>Decryption: Decryption in the Beaufort Cipher involves reversing the encryption process by subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
    <li>Example: For instance, using a key 'KEY', if 'H' in the plaintext is combined with 'K' from the key, the resulting ciphertext character might be 'S'.</li>
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



