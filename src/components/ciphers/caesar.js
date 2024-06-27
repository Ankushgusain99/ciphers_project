//TODO: import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
//TODO: Import CipherOverview component
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import { Header,
    Description,
  References,
  Example,
 } from "../../overviews/CaesarOverview";

export default function CaesarCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  function encode(str, shift) {
    const chars = str.split("");

    const encodedChars = chars.map((char) => {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + shift;
      if (charCode >= 65 && charCode <= 90) {
        if (newCharCode < 65) {
          newCharCode = 90 - (65 - newCharCode - 1);
        } else if (newCharCode > 90) {
          newCharCode = 65 + (newCharCode - 90 - 1);
        }
      } else if (charCode >= 97 && charCode <= 122) {
        if (newCharCode < 97) {
          newCharCode = 122 - (97 - newCharCode - 1);
        } else if (newCharCode > 122) {
          newCharCode = 97 + (newCharCode - 122 - 1);
        }
      }
      return String.fromCharCode(newCharCode);
    });

    return encodedChars.join("");
  }

  function decode(str, shift) {
    return encode(str, -shift);
  }
  //TODO:  Add the CipherOverview component in the return statement.
  //TODO:  Add title and setShowOverview attribute to the CipherFactory component.
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
        title={"Caesar Cipher"}
        setShowOverview = {setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={1}
      />
    </>
  );
}
