import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BeaufortCipher({ ongetInfo }) {
    // Function to encrypt plaintext using the Autokey cipher
// Function to encrypt the plaintext using the Beaufort Cipher
function encode(plaintext, keyword) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
        let plainChar = plaintext.charAt(i).toUpperCase();
        let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
        let shift = (keyChar.charCodeAt(0) - 65);
        let cipherChar = String.fromCharCode(((shift - (plainChar.charCodeAt(0) - 65) + 26) % 26) + 65);
        ciphertext += cipherChar;
    }
    return ciphertext;
}

// Function to decrypt the ciphertext using the Beaufort Cipher
function decode(ciphertext, keyword) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
        let cipherChar = ciphertext.charAt(i).toUpperCase();
        let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
        let shift = (keyChar.charCodeAt(0) - 65);
        let plainChar = String.fromCharCode(((shift - (cipherChar.charCodeAt(0) - 65) + 26) % 26) + 65);
        plaintext += plainChar;
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



