import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function AffineCipher({ ongetInfo ,onEncryptInfo,onDecryptInfo}) {
        const[values,setValues]=useState(-1)
        const[text,setText]=useState([])
        const[inputChars,setInputChars]=useState([])
        const[outputChars,setOutputChars]=useState([])
        const[key1,setKey1]=useState(0)
        const[key2,setKey2]=useState(0)
        const[dtext,setDText]=useState([])
        const[arr1,setArr1]=useState([])
        const[arr2,setArr2]=useState([])
        
        // Function to encrypt a message using the affine cipher
        function encryptAffine(message, a, b) {
            // Convert message to uppercase and remove all spaces and special characters\
            message = message.toUpperCase().replace(/[^A-Z]/g, '');
            let result = '';
    
            // Iterate through each character in the message
            for (let i = 0; i < message.length; i++) {
                let charCode = message.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
                let encryptedCharCode = (a * charCode + b) % 26;  // Apply the affine cipher formula
                let encryptedChar = String.fromCharCode(encryptedCharCode + 65);  // Convert encrypted number back to character
                result += encryptedChar;  // Add encrypted character to result string
                console.log(encryptedCharCode)
                setKey1(a)
                setKey2(b)
                setText([...text,message[i]])
                setInputChars([...inputChars,encryptedCharCode])
                setOutputChars([...outputChars,encryptedChar])
            }
            return result;
        }
    
        // Function to decrypt a message using the affine cipher
        function decryptAffine(ciphertext, a, b) {
            let result = '';
            // Find the modular multiplicative inverse of a
            for (let i = 0; i < 26; i++) {
                if ((i * a) % 26 === 1) {
                    setValues(i);
                    break;
                }
            }
            
            // Iterate through each character in the ciphertext
            for (let i = 0; i < ciphertext.length; i++) {
                let charCode = ciphertext.charCodeAt(i) - 65;  // Convert character to number between 0 and 25
                let decryptedCharCode = (values * (charCode - b + 26)) % 26;  // Apply the affine cipher formula
                let decryptedChar = String.fromCharCode(decryptedCharCode + 65);  // Convert decrypted number back to character
                result += decryptedChar;  // Add decrypted character to result string
                setKey1(a)
                setKey2(b)
                setDText([...dtext,ciphertext[i]])
                setArr1([...arr1,decryptedCharCode])
                setArr2([...arr2,decryptedChar])
            }
    
            return result;
        }
    // Show information about the Affine Cipher

    const showEncryptInformation=()=>{
        return(
            <>
                <p>Steps for encrption are as follows:-</p>
        <li>We have the keys a as {key1} and b as {key2}</li>
        {

            inputChars.map((value,index)=>(
                <li key={index}>After converting {text[index]} to number and then using the formula of a*x+b MODULUS 26 we get {value} and again after converting it to Alphabet we get {outputChars[index]}</li>

            ))
        }
        </>
        );
        
    }


    const showDeccryptInformation=()=>{
        const info=(
            <>
                <p>Steps for encrption are as follows:-</p>
        <li>We have the keys a as {key1} and b as {key2}</li>
        <li>First of all we will find the Modular multiplicative inverse by the formula inside a running loop from 0 to 25 multiply our key a and then modulus of that should be equal to 0.And you'll store that value in some variable x whose value is equal to {values}.</li>
        {

            arr1.map((value,index)=>(
                <li key={index}>After converting {dtext[index]} to number and then using the formula of x*text[index]-b+26 MODULUS 26 we get {value} and again after converting it to Alphabet we get {arr2[index]}</li>

            ))
        }
        </>
        );
        
    }

    const showInformation = () => {
        return(
        <><p>
            The Affine Cipher is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. It employs a pair of keys (a, b), and each letter is encrypted using the formula (a * x + b) mod 26, where x is the numeric equivalent of the letter. To decrypt the message, the formula (a^-1 * (y - b + 26)) mod 26 is used, where y is the numeric equivalent of the encrypted letter and a^-1 is the modular multiplicative inverse of a modulo 26.
        </p>
        <p>
            To encrypt using the Affine Cipher, simply enter your text and choose appropriate keys for 'a' and 'b'.
        </p>
        <ul>
            <li>Substitution Cipher: Each letter in the plaintext is replaced by a different letter according to a fixed system.</li>
            <li>Mathematical Formula: Encryption and decryption are based on modular arithmetic using the formula (a * x + b) mod 26.</li>
            <li>Key Selection: The security of the cipher depends on the selection of keys 'a' and 'b', where 'a' must be coprime with 26.</li>
            <li>Decryption: The decryption process involves finding the modular multiplicative inverse of 'a' modulo 26.</li>
            <li>Example: Using keys 'a' = 5 and 'b' = 8, 'A' becomes 'I', 'B' becomes 'N', 'C' becomes 'S', and so forth.</li>
        </ul>
        
        </>
        );

        // Call the function passed from the parent component to send the information
    };

    // Call the showInformation function when the component mounts
    React.useEffect(() => {
        let info=showInformation();
        ongetInfo(info)
    }, []);

    React.useEffect(() => {
        let info=showEncryptInformation()
        onEncryptInfo(info)
    }, [text,key1,key2]);

    React.useEffect(() => {
        showDeccryptInformation()
    }, [dtext,key1,key2,values]);


    return (
        <>
            
            <CipherFactory encode={encryptAffine} decode={decryptAffine} keyComponentA="Key A" keyComponentB="Key B" />
        </>
    );
};