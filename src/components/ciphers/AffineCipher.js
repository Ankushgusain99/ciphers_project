import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';
import CipherOverview from '../../ui/CipherOverview';
import { Header,Description,References,Example } from '../../overviews/AffineOverview';
export default function AffineCipher() {
    const [showOverview, setShowOverview] = useState(false);
        const[values,setValues]=useState(-1)
        
        // Function to encrypt a message using the affine cipher
        function encode(message, a, b) {
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
        function decode(ciphertext, a, b) {
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
            title={"Affine Cipher"}
            setShowOverview = {setShowOverview}
            encode={encode}
            decode={decode}
            keyComponentA={1}
            keyComponentB={1}
          />
        </>
      );
};