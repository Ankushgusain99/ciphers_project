import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function AutoKey({ ongetInfo }) {
    // Function to encrypt plaintext using the Autokey cipher
function encode(plaintext, key) {
    let ciphertext = '';
    let keyIndex = 0;

    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Check if character is a letter
            let keyCode = key.charCodeAt(keyIndex) - 65;
            let encryptedCharCode = ((charCode - 65 + keyCode) % 26) + 65;
            ciphertext += String.fromCharCode(encryptedCharCode);
            keyIndex++;
        } else {
            ciphertext += plaintext[i]; // Keep non-alphabetic characters unchanged
        }

        // Append the current plaintext character to the key
        if (keyIndex >= key.length) {
            key += plaintext[i];
        }
    }

    return ciphertext;
}

// Function to decrypt ciphertext using the Autokey cipher
function decode(ciphertext, key) {
    let plaintext = '';
    let keyIndex = 0;

    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Check if character is a letter
            let keyCode = key.charCodeAt(keyIndex) - 65;
            let decryptedCharCode = ((charCode - 65 - keyCode + 26) % 26) + 65;
            plaintext += String.fromCharCode(decryptedCharCode);
            keyIndex++;
        } else {
            plaintext += ciphertext[i]; // Keep non-alphabetic characters unchanged
        }

        // Append the decrypted character to the key
        if (keyIndex >= key.length) {
            key += String.fromCharCode(charCode);
        }
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



