import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BinaryEncodedDecimal() {

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

  
 
      return <CipherFactory encode={decimalToBcd} decode={bcdToDecimal} />
};



