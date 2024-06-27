import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';
import CipherOverview from '../../ui/CipherOverview';
import { Header,Description,References,Example } from '../../overviews/AMSCOOverview';
export default function AMSCO() {
  const [showOverview, setShowOverview] = React.useState(false);

    // Function to generate the transposition grid based on the keyword
    // Function to generate the transposition grid based on the keyword


    // Function to encrypt the plaintext using the AMSCO cipher
    function encode(text, keyword) {
        // Prepare keyword and derive the order
        if (!keyword) {
            console.error("Keyword is empty or not provided.");
            return;
          }
          
          const keyArray = keyword.split('').map((char, i) => ({char, index: i}));
          keyArray.sort((a, b) => a.char.localeCompare(b.char));
          const keyOrder = keyArray.map(item => item.index);
          
  // Initialize variables
  const numCols = keyword.length;
  const numRows = Math.ceil(text.length / Math.ceil(keyword.length / 1.5));
  const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
  let textIndex = 0;
  let charCount = 1; // Start with 1 character per cell

  // Fill the grid with text
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (textIndex < text.length) {
        grid[row][col] = text.substr(textIndex, charCount);
        textIndex += charCount;
        charCount = charCount === 1 ? 2 : 1; // Alternate between 1 and 2 characters
      }
    }
  }

  // Read the grid column-wise according to the key order
  let encryptedText = '';
  for (let col of keyOrder) {
    for (let row = 0; row < numRows; row++) {
      encryptedText += grid[row][col];
    }
  }

  return encryptedText;
    }

    // Function to decrypt the ciphertext using the AMSCO cipher
    function decode(encryptedText, keyword) {
        const keyArray = keyword.split('').map((char, i) => ({char, index: i}));
  keyArray.sort((a, b) => a.char.localeCompare(b.char));
  const keyOrder = keyArray.map(item => item.index);

  // Initialize variables
  const numCols = keyword.length;
  const numRows = Math.ceil(encryptedText.length / Math.ceil(keyword.length / 1.5));
  const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
  let charCount = 1; // Start with 1 character per cell

  // Calculate the length of each column
  const colLengths = Array(numCols).fill(0);
  let textIndex = 0;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (textIndex < encryptedText.length) {
        colLengths[col]++;
        textIndex += charCount;
        charCount = charCount === 1 ? 2 : 1; // Alternate between 1 and 2 characters
      }
    }
  }

  // Fill the grid column-wise according to the key order
  textIndex = 0;
  for (let i = 0; i < keyOrder.length; i++) {
    let col = keyOrder[i];
    for (let row = 0; row < numRows; row++) {
      if (colLengths[col] > 0 && textIndex < encryptedText.length) {
        let length = charCount;
        grid[row][col] = encryptedText.substr(textIndex, length);
        textIndex += length;
        colLengths[col]--;
        charCount = charCount === 1 ? 2 : 1; // Alternate between 1 and 2 characters
      }
    }
  }

  // Read the grid row-wise to get the original text
  let decryptedText = '';
  charCount = 1; // Start with 1 character per cell again
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col]) {
        decryptedText += grid[row][col];
      }
    }
  }

  return decryptedText;
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
          title={"AMSCO Cipher"}
          setShowOverview = {setShowOverview}
          encode={encode}
          decode={decode}
          keyComponentA={'STR'}
        />
      </>
    );
};
