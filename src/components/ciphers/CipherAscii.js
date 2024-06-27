import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';
import CipherOverview from '../../ui/CipherOverview';
import { Header,
  Description,
  Example,
  References
 } from '../../overviews/AsciiOverview';
export default function CipherAscii() {
  console.log("Hello Ascii")
  const [showOverview, setShowOverview] = React.useState(false);
// Encode a string using ASCII cipher
function encode(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
      result += str.charCodeAt(i) + '-';
    }
    return result;
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    var result = '';
    var elements = str.split('-');
    for (var i = 0; i < elements.length; i++) {
      result += String.fromCharCode(elements[i]);
    }
    return result;
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
        title={"Ascii Cipher"}
        setShowOverview = {setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
};