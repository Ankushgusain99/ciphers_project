import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';


export default function CipherAscii({ongetInfo}) {

// Encode a string using ASCII cipher
function encode(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i) + '-';
    }
    return result;
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    var result = '';
    var elements = str.split('-');
    for (var i = 0; i < elements.length; i++) {
      result += String.fromCharCode(elements[i]);
    }
    return result;
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

      return <CipherFactory encode={encode} decode={decode} />
};