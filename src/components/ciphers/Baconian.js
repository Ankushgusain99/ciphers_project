import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BaconianCipher({ongetInfo}) {

  // Encryption function for Baconian Cipher
  function baconianEncrypt(plaintext) {
    // Define the Baconian Cipher lookup table
    const baconianTable = {
      A: "AAAAA",
      B: "AAAAB",
      C: "AAABA",
      D: "AAABB",
      E: "AABAA",
      F: "AABAB",
      G: "AABBA",
      H: "AABBB",
      I: "ABAAA",
      J: "ABAAB",
      K: "ABABA",
      L: "ABABB",
      M: "ABBAA",
      N: "ABBAB",
      O: "ABBBA",
      P: "ABBBB",
      Q: "BAAAA",
      R: "BAAAB",
      S: "BAABA",
      T: "BAABB",
      U: "BABAA",
      V: "BABAB",
      W: "BABBA",
      X: "BABBB",
      Y: "BBAAA",
      Z: "BBAAB"
    };

    // Convert plaintext to uppercase and remove any spaces
    plaintext = plaintext.toUpperCase().replace(/\s/g, "");

    // Initialize the ciphertext variable
    let ciphertext = "";

    // Loop through each character in the plaintext
    for (let i = 0; i < plaintext.length; i++) {
      // Get the Baconian code for the current character
      const baconianCode = baconianTable[plaintext[i]];

      // Add the Baconian code to the ciphertext
      if (baconianCode) {
        ciphertext += baconianCode;
      } else {
        ciphertext += plaintext[i];
      }
    }

    return ciphertext;
  }

  // Decryption function for Baconian Cipher
  function baconianDecrypt(ciphertext) {
    // Define the Baconian Cipher lookup table
    const baconianTable = {
      AAAAA: "A",
      AAAAB: "B",
      AAABA: "C",
      AAABB: "D",
      AABAA: "E",
      AABAB: "F",
      AABBA: "G",
      AABBB: "H",
      ABAAA: "I",
      ABAAB: "J",
      ABABA: "K",
      ABABB: "L",
      ABBAA: "M",
      ABBAB: "N",
      ABBBA: "O",
      ABBBB: "P",
      BAAAA: "Q",
      BAAAB: "R",
      BAABA: "S",
      BAABB: "T",
      BABAA: "U",
      BABAB: "V",
      BABBA: "W",
      BABBB: "X",
      BBAAA: "Y",
      BBAAB: "Z"
    };

    // Initialize the plaintext variable
    let plaintext = "";

    // Loop through the ciphertext in groups of 5 characters
    for (let i = 0; i < ciphertext.length; i += 5) {
      // Get the current group of 5 characters
      const group = ciphertext.substr(i, 5);

      // Get the plaintext character for the current group
      const plaintextChar = baconianTable[group];

      // Add the plaintext character to the plaintext
      if (plaintextChar) {
        plaintext += plaintextChar;
      } else {
        plaintext += group;
      }
    }

    return plaintext;
  }
  
  const showInformation = () => {
    const info = (
        <>
            <p>
The Baconian Cipher is a substitution cipher that replaces each letter of the plaintext with a five-character binary string. It uses a binary encoding scheme to represent letters of the alphabet.
</p>
<p>
To encode using the Baconian Cipher, each letter of the plaintext is replaced by a five-character binary string according to a predefined encoding table. Typically, one set of characters is used to represent one binary digit (e.g., 'A' or 'B').
</p>
<ul>
<li>Substitution Cipher: Each letter in the plaintext is replaced by a five-character binary string.</li>
<li>Binary Encoding: The Baconian Cipher utilizes a binary encoding scheme to represent letters, with each character typically representing one binary digit.</li>
<li>Encoding Table: A predefined encoding table maps each letter of the alphabet to its corresponding five-character binary string.</li>
<li>Example: The plaintext letter 'A' might be encoded as "AAAAA" and 'B' as "AAAAB".</li>
</ul>

        </>
    );
    ongetInfo(info);
};

React.useEffect(() => {
    showInformation();
}, []);

  return <CipherFactory encode={baconianEncrypt} decode={baconianDecrypt} />
};