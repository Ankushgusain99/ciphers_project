import React from 'react'
import CipherFactory from '../../ui/EncryptDecrypt';

const BookCipher = ({ongetInfo}) => {
  function getPositionInKey(text, key) {
    const positions = [];
    const keyWords = key.toUpperCase().split(/\s+/);

    for (let char of text) {
        const charUpper = char.toUpperCase();
        let found = false;
        for (let i = 0; i < keyWords.length; i++) {
            const wordIndex = keyWords[i].indexOf(charUpper);
            if (wordIndex !== -1) {
                positions.push({ word: i + 1, char: wordIndex + 1 });
                found = true;
                break;
            }
        }
        if (!found) {
            // Handle the case where the character is not found in the key text
            positions.push({ word: 0, char: 0 });
        }
    }

    return positions;
}


function encode(plaintext, key) {
  plaintext=plaintext.toUpperCase(plaintext)
  console.log(plaintext)
  const positions = getPositionInKey(plaintext, key);
  return positions.map(pos => `${pos.word}.${pos.char}`).join(' ');
}


function decode(ciphertext, key) {
  const keyWords = key.split(/\s+/);
  const positions = ciphertext.split(' ');
  let plaintext = '';

  for (let pos of positions) {
      const [wordIndex, charIndex] = pos.split('.').map(Number);
      if (wordIndex > 0 && charIndex > 0 && keyWords[wordIndex - 1] && keyWords[wordIndex - 1][charIndex - 1]) {
          plaintext += keyWords[wordIndex - 1][charIndex - 1];
      } else {
          plaintext += ' '; // Placeholder for unfound characters
      }
  }

  return plaintext;
}


const showInformation = () => {
  const info = (
    <>
        <p>
            The Book Cipher is a cryptographic technique that uses a book or other texts as the key for encoding and decoding messages.
            It operates by turning each letter in the plaintext into a set of coordinates within the chosen book.
        </p>
        <p>
            To encrypt using the Book Cipher, you need a key text (such as a book) that both the sender and receiver possess.
            Each word or phrase in the plaintext is encoded as a pair of numbers representing a page number and a position within that page.
        </p>
        <ul>
            <li>Book Key: The book serves as the key for the cipher, providing the mapping between letters and coordinates.</li>
            <li>Coordinates: Each letter in the plaintext is represented by a page number and a position within that page.</li>
            <li>Encryption: To encrypt, look up each letter in the book and encode its position as a set of coordinates.</li>
            <li>Decryption: Decryption involves reversing the process, using the book to look up the coordinates and retrieve the corresponding letters.</li>
            <li>Example: With the book 'Alice in Wonderland' and plaintext 'SECRET', you might encode it as '12-4 15-8 6-12 17-9 5-3 20-1'.</li>
        </ul>
    </>
);
ongetInfo(info);
};

React.useEffect(() => {
  showInformation();
}, []);

  return (
    <div>
        <CipherFactory encode={encode} decode={decode} keyComponentA="STR" />
    </div>
  )
}

export default BookCipher
