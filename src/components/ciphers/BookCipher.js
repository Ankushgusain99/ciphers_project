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

  return (
    <div>
        <CipherFactory encode={encode} decode={decode} keyComponentA="STR" />
    </div>
  )
}

export default BookCipher
