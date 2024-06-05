import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function Base64Encoding({ongetInfo}) {

// Encode a string using ASCII cipher
function encode(str) {
  const asciiStringEncoded = btoa(str);
  return asciiStringEncoded
  }
  
  // Decode a string using ASCII cipher
  function decode(str) {
    return atob(str);
  }      
  const showInformation = () => {
    const info = (
        <>
            <p>
Base64 encoding is a method of encoding binary data into ASCII text format. It converts binary data into a string of ASCII characters, making it suitable for transmission over protocols that require text data.
</p>
<p>
To encode using Base64, each group of three bytes (24 bits) in the binary data is converted into a group of four ASCII characters from the Base64 character set. If the input data length is not divisible by three, padding characters '=' are added to make the length a multiple of three.
</p>
<ul>
<li>Encoding Method: Base64 encoding converts binary data into a string of ASCII characters.</li>
<li>Character Set: Base64 encoding uses a character set consisting of 64 different characters, typically composed of letters (uppercase and lowercase), numbers, and two additional characters for padding.</li>
<li>Padding: Padding characters ('=') are added if the binary data length is not divisible by three.</li>
<li>Common Uses: Base64 encoding is commonly used in email systems, HTML and CSS data-URI embedding, and encoding binary data in URLs.</li>
<li>Example: The string "Hello, World!" encoded in Base64 format might look like "SGVsbG8sIFdvcmxkIQ==".</li>
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