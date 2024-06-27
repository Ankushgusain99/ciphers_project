import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Base64Encoding() {

// Encode a string using ASCII cipher
function encode(str) {
  const asciiStringEncoded = btoa(str);
  return asciiStringEncoded
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    return atob(str);
  }      
  
      return <CipherFactory encode={encode} decode={decode} />
};