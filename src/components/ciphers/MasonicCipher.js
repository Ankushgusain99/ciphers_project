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
BCD (Binary-Coded Decimal) encoding is a binary representation of decimal numbers where each decimal digit is represented by a fixed number of binary digits.
</p>
<p>
To encode using BCD encoding, each decimal digit of the plaintext number is represented by its corresponding four-digit binary code.
</p>
<ul>
<li>Binary-Coded Decimal: Each decimal digit is represented by a fixed number of binary digits, typically four binary digits per decimal digit.</li>
<li>Encoding Scheme: BCD encoding represents each decimal digit using its binary equivalent, ensuring efficient storage and manipulation of decimal numbers in digital systems.</li>
<li>Decimal to Binary: Each decimal digit is converted to its binary equivalent using a fixed mapping.</li>
<li>Example: The decimal number 123 might be encoded as "0001 0010 0011" in BCD, where each group of four binary digits represents one decimal digit.</li>
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



