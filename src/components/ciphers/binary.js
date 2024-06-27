import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';
import CipherOverview from '../../ui/CipherOverview';

import {Header,
  Description,
References,
Example,
 } from '../../overviews/BinaryOverview';

export default function BinaryEncoding() {
  //const [inputText, setInputText] = React.useState('');
  const [showOverview, setShowOverview] = React.useState(false);

  function encode(str) {
    let result = '';
    str=Number(str);
    result=(str >>> 0).toString(2);
    return result; 
  }
  
  function decode(bin) {
    return parseInt(bin, 2).toString(10);
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
        title={"Binary Conversion"}
        setShowOverview = {setShowOverview}
        encode={encode}
        decode={decode}
    
      />
    </>
  );
}



