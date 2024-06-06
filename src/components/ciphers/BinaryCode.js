import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BinaryCode({ ongetInfo }) {
    function encode(text) {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    }
    
    function decode(binary) {
        return binary.split(' ').map(bin => {
            return String.fromCharCode(parseInt(bin, 2));
        }).join('');
    }


    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Binary Code Cipher is a simple encoding method where each character in the plaintext is converted to its binary representation.
                    This cipher is commonly used in digital systems and computer communications.
                </p>
                <p>
                    To encrypt using the Binary Code Cipher, each character of your text is translated into an 8-bit binary sequence.
                </p>
                <ul>
                    <li>Encoding Method: Each character in the plaintext is represented by its corresponding binary value.</li>
                    <li>Binary Representation: Binary (base-2) uses only the digits 0 and 1 to represent data.</li>
                    <li>Encryption: To encrypt, convert each character in the plaintext to its binary value using an 8-bit representation.</li>
                    <li>Decryption: Decryption involves converting each binary sequence back to its corresponding character.</li>
                    <li>Example: The character 'A' becomes '01000001', 'B' becomes '01000010', 'C' becomes '01000011', and so forth.</li>
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



