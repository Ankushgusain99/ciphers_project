import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function AtbashEncoder({ ongetInfo,onEncryptInfo,onDecryptInfo}) {
    const [inputText, setInputText] = useState('');
    const [inputChars, setInputChars] = useState([]);
    const [outputChars, setOutputChars] = useState([]);

    const encode = (text) => {

        let encoded = '';
        const encodedChars = [];
        const decodedChars = [];

        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            let encodedChar = '';

            if (charCode >= 65 && charCode <= 90) {
                encodedChar = String.fromCharCode(155 - charCode);
            } else if (charCode >= 97 && charCode <= 122) {
                encodedChar = String.fromCharCode(219 - charCode);
            } else {
                encodedChar = text[i];
            }

            encoded += encodedChar;
            encodedChars.push(encodedChar);
            decodedChars.push(text[i]);
        }

        setInputText(text);
        setInputChars([...inputChars, text]);
        setOutputChars([...outputChars, encoded]);

        return encoded;
    };

    const decode = (text) => {
        return encode(text);
    };

    const encryptInfo=()=>{
        const info=(
            <>
        <li>Steps are as follows:- </li>
        {
            inputChars.map((value ,index)=>(
                <li>For the alphabet {value} we are getting {outputChars[index]}</li>
            ))
        }
        </>
        );
        onEncryptInfo(info)
    }

    const decryptInfo=()=>{
        const info=(
            <>
        <li>Steps are as follows:- </li>
        {
            inputChars.map((value ,index)=>(
                <li>For the alphabet {value} we are getting {outputChars[index]}</li>
            ))
        }
        </>
        );
        onDecryptInfo(info)
    }

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Atbash Cipher is a substitution cipher where each letter in the plaintext is replaced with its reverse in the alphabet.
                </p>
                <p>To encrypt using the Atbash Cipher, simply enter your text.</p>
                <ul>
                    <li>Substitution Cipher: Each letter in the plaintext is replaced by its reverse counterpart in the alphabet.</li>
                    <li>Reversed Alphabet: The alphabet is reversed, with 'A' becoming 'Z', 'B' becoming 'Y', and so on.</li>
                    <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding reverse letter.</li>
                    <li>Decryption: The Atbash Cipher is self-reciprocal, meaning the same algorithm is used for both encryption and decryption.</li>
                    <li>Example: 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so forth.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    React.useEffect(() => {
        encryptInfo();
    }, [inputText]);


    React.useEffect(() => {
        decryptInfo();
    }, [inputText]);


    return (

        <CipherFactory encode={encode} decode={decode} />
    );
}
