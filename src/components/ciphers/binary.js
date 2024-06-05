import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BinaryEncoding({ongetInfo}) {
  //const [inputText, setInputText] = React.useState('');
  const [arr,setArr]=useState([])
  const [text,setText]=useState(0)
  const[text1,setText1]=useState(0)
  function encode(str) {
    let result = '';
    str=Number(str);
    result=(str >>> 0).toString(2);
    return result; 
  }
  
  function decode(bin) {
    return parseInt(bin, 2).toString(10);
  }
  
      const showInformation=()=>{
        const temp=[]
        temp.push(text)
        let fin=text
        while(fin>0){
          let a=Math.floor(fin/2)
          temp.push(a)
          fin=fin/2
          fin=Math.floor(fin)
        }
        const info=(
          <>
            <p>
      Decimal to Binary Conversion is the process of converting a decimal number to its binary representation.
    </p>
    <ul>
      <li>Decimal Number: A number expressed in base-10, using digits from 0 to 9.</li>
      <li>Binary Representation: Binary is a base-2 numeral system, using only 0 and 1, where each digit represents a power of 2.</li>
      <li>Conversion Process: To convert a decimal number to binary, repeatedly divide the number by 2 and note the remainders, then read the remainders in reverse order to obtain the binary representation.</li>
      <li>Example: For decimal number 10, dividing by 2 yields remainders 0, 1, 0, 1 (reading in reverse gives binary 1010).</li>
      <li>Uses: Binary representation is commonly used in digital electronics and computing for storing and processing data.</li>
    </ul>
          <p>Steps are as follows:-</p>
          {arr.map((value,index)=>(
      
            <li key={index}>After Modulating {temp[index]} with 2 we get {temp[index] % 2}</li>
          ))}
          <p>final Answer is after reversing what we get in our list is : {arr.join('')}</p>
          </>
        )
        ongetInfo(info)
      }

      React.useEffect(()=>{
        showInformation()
      },[arr,text])
      return (
      <>
        
        <CipherFactory encode={encode} decode={decode} />
      </>
      )


};
