//import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

import { Header,
    Description,
  References,
  Example,
 } from "../../overviews/AtbashOverview";


export default function AtbashEncoder() {

    //Add this line in every cipher.
  const [showOverview, setShowOverview] = useState(false);
  const encode = (text) => {
    let encoded = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encoded += String.fromCharCode(155 - charCode);
      } else if (charCode >= 97 && charCode <= 122) {
        encoded += String.fromCharCode(219 - charCode);
      } else {
        encoded += text[i];
      }
    }
    return encoded;
  };

  const decode = (text) => {
    return encode(text);
  };

  // Add the CipherOverview component in the return statement.

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
        title={"Atbash Cipher"}
        setShowOverview = {setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}
