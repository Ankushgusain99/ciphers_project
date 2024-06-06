import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Masonic({ongetInfo}) {

    const pigpenCipher = {
        'A': '᚜', 'B': '᚛', 'C': 'ᚠ', 'D': 'ᛏ', 'E': 'ᛒ', 'F': 'ᛖ', 'G': 'ᛗ', 'H': 'ᛝ', 'I': 'ᛟ',
        'J': 'ᛠ', 'K': 'ᛡ', 'L': 'ᛢ', 'M': 'ᛣ', 'N': 'ᛤ', 'O': 'ᛥ', 'P': 'ᛦ', 'Q': 'ᛧ', 'R': 'ᛨ',
        'S': 'ᛩ', 'T': 'ᛪ', 'U': '᛫', 'V': '᛬', 'W': '᛭', 'X': 'ᛮ', 'Y': 'ᛯ', 'Z': 'ᛰ'
    };
    
    const reversePigpenCipher = Object.fromEntries(
        Object.entries(pigpenCipher).map(([letter, symbol]) => [symbol, letter])
    );
      
    function encode(plaintext) {
        return plaintext.toUpperCase().replace(/[^A-Z]/g, '').split('').map(char => pigpenCipher[char] || char).join('');
    }

    function decode(ciphertext) {
        return ciphertext.split('').map(symbol => reversePigpenCipher[symbol] || symbol).join('');
    }
     

  const showInformation = () => {
    const info = (
        <>
            <p>
                The Masonic Cipher, also known as the Freemason's Cipher or Pigpen Cipher, is a substitution cipher used by the Freemasons for various purposes.
                It replaces each letter in the plaintext with a symbol based on a grid of lines and dots, forming a geometric shape.
            </p>
            <p>
                To encrypt using the Masonic Cipher, you need to memorize the symbol grid or have a key to reference.
                Each letter in the plaintext is replaced with its corresponding symbol according to the Masonic symbol grid.
            </p>
            <ul>
                <li>Substitution Cipher: Each letter is replaced with a symbol from the Masonic symbol grid.</li>
                <li>Masonic Symbol Grid: The grid consists of lines and dots forming geometric shapes representing each letter of the alphabet.</li>
                <li>Encryption: To encrypt, replace each letter with its corresponding symbol from the Masonic symbol grid.</li>
                <li>Decryption: Decryption involves reversing the substitution, replacing each symbol with its corresponding letter.</li>
                <li>Example: 'HELLO' might be encrypted as '⊔∴∴⊓ ⊓∷⊓⊔' using the Masonic Cipher.</li>
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



