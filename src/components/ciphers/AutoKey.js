import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';
import CipherOverview from '../../ui/CipherOverview';
import { Header,
    Description,
    Example,
    References } from '../../overviews/AutoKeyOverview';
export default function AutoKey() {
    const [showOverview, setShowOverview] = React.useState(false);
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



    
return (
    <>
      {showOverview && (
        <CipherOverview
          setShowOverview={setShowOverview}
          Header={Header}
          Description={Description}
          Example={Example}
          References={References}
        />
      )}
      <CipherFactory
        title={"AutoKey Cipher"}
        setShowOverview = {setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={'STR'}
      />
    </>
  );
};



