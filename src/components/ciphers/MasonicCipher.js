import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Masonic() {

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
     

  
      return <CipherFactory encode={encode} decode={decode} />
};



