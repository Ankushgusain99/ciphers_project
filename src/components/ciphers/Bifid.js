import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function BifidCipher() {
    function generatePolybiusSquare(keyword) {
        let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
        keyword = keyword.toUpperCase().replace(/J/g, "I");
        let square = [];
        let usedLetters = new Set();
    
        for (let char of keyword) {
            if (!usedLetters.has(char)) {
                square.push(char);
                usedLetters.add(char);
            }
        }
    
        for (let char of alphabet) {
            if (!usedLetters.has(char)) {
                square.push(char);
                usedLetters.add(char);
            }
        }
    
        return square;
    }
    
    function getCoordinates(char, square) {
        let index = square.indexOf(char);
        return [Math.floor(index / 5), index % 5];
    }
    
    function encode(plaintext, keyword) {
        plaintext = plaintext.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, '');
        let square = generatePolybiusSquare(keyword);
        let coordinates = [];
    
        for (let char of plaintext) {
            coordinates.push(...getCoordinates(char, square));
        }
    
        let newCoordinates = [];
        for (let i = 0; i < coordinates.length / 2; i++) {
            newCoordinates.push([coordinates[i], coordinates[Math.floor(coordinates.length / 2) + i]]);
        }
    
        let ciphertext = "";
        for (let [row, col] of newCoordinates) {
            ciphertext += square[row * 5 + col];
        }
    
        return ciphertext;
    }
    
    function decode(ciphertext, keyword) {
        ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, '');
        let square = generatePolybiusSquare(keyword);
        let coordinates = [];
    
        for (let char of ciphertext) {
            coordinates.push(...getCoordinates(char, square));
        }
    
        let rows = coordinates.slice(0, coordinates.length / 2);
        let cols = coordinates.slice(coordinates.length / 2);
    
        let plaintext = "";
        for (let i = 0; i < rows.length; i++) {
            plaintext += square[rows[i] * 5 + cols[i]];
        }
    
        return plaintext;
    }
        
    
    return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'}/>
};



