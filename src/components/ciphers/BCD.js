import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BinaryEncodedDecimalN({ongetInfo}) {

// Encode decimal to BCD
function decimalToBcd(decimal) {
    let bcd = '';
    const decimalString = decimal.toString();
  
    for (let i = 0; i < decimalString.length; i++) {
      const digit = parseInt(decimalString[i]);
      const bcdDigit = digit.toString(2).padStart(4, '0');
      bcd += bcdDigit;
    }
  
    return bcd;
  }
  
  // Decode BCD to decimal
  function bcdToDecimal(bcd) {
    let decimal = '';
    for (let i = 0; i < bcd.length; i += 4) {
      const digit = parseInt(bcd.substr(i, 4), 2);
      decimal += digit.toString();
    }
  
    return parseInt(decimal, 10);
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

      return <CipherFactory encode={decimalToBcd} decode={bcdToDecimal} />
};



