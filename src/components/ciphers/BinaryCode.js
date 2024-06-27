import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BinaryCode() {
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


    
    return <CipherFactory encode={encode} decode={decode} />
};



