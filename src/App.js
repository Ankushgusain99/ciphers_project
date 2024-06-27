import React,{useState} from "react";
import {Layout, Menu, Typography, Watermark, Spin } from 'antd';

import AtbashCipher from "./components/ciphers/atbash"
import CaesarCipher from "./components/ciphers/caesar";
import BinaryEncoding from "./components/ciphers/binary";
import AffineCipher from "./components/ciphers/AffineCipher";
import CipherAscii from "./components/ciphers/CipherAscii";
import AMSCO from "./components/ciphers/AMSCO"
import AutoKey from "./components/ciphers/AutoKey"
import BaconianCipher from "./components/ciphers/Baconian";
import Base64Encoding from "./components/ciphers/Base64";
import BinaryEncodedDecimal from "./components/ciphers/BCD";
import BeaufortCipher from "./components/ciphers/Beaufort";
import BellasoCipher from "./components/ciphers/Bellaso";

import BifidCipher from "./components/ciphers/Bifid";
import ADFGVX from "./components/ciphers/ADFGVX";
import BinaryCode from "./components/ciphers/BinaryCode";
import Checkerboard from "./components/ciphers/Checkerboard";
import ChaoCipher from "./components/ciphers/Chaocipher";
import Cipher94 from "./components/ciphers/94 Cipher";
import BookCipher from "./components/ciphers/BookCipher";
import Masonic from "./components/ciphers/MasonicCipher";
const { Content,Footer, Header } = Layout;

const App = () => {
  const [isVerified, setIsVerified] = useState(false);
  // const checkPw = () => {
  //   const answer = document.getElementById("password").value;

  //   if (answer === "I_KNOW_YOU") {
  //     setIsVerified(true);
  //   } else {
  //     alert("Sorry, that's not it");
  //   }
  // };
  

  const items = [
    ['Caesar Cipher', <CaesarCipher />],
    ['Atbash Cipher', <AtbashCipher  />],
    ['Binary Conversion', <BinaryEncoding  />],
    ['Affine Cipher', <AffineCipher  />],
    ['Cipher Ascii', <CipherAscii />],
    ['AMSCO Cipher',<AMSCO />],
    ['AutoKey Cipher',<AutoKey />],
    ['Baconian Cipher',<BaconianCipher  />],
    ['Base64 Encoding',<Base64Encoding/>],
    ['BCD Encoding',<BinaryEncodedDecimal />],
    ['Beaufort Cipher',<BeaufortCipher  />],
    ['Bellaso Cipher',<BellasoCipher/>],
    ['Bifid Cipher',<BifidCipher />],
    ['ADFGVX Cipher',<ADFGVX/>],
    ['BinaryCode',<BinaryCode/>],
    ['Checkerboard Cipher',<Checkerboard />],
    ['94 Cipher',<Cipher94 />],
    ['ChaoCipher',<ChaoCipher />],
    ['BookCipher',<BookCipher />],
    ['MasonicCipher',<Masonic/>],
  ]

  const defaultSelectedIndex = 0;
  const [current, setCurrent] = useState(defaultSelectedIndex);
  const [comp, setComp] = useState(items[defaultSelectedIndex][1]);
  const [title, setTitle] = useState(items[defaultSelectedIndex][0]);

  const onClick = (e) => {
    setCurrent(e.key);
    let k = Number(e.key);
    setComp(items[k][1]); setTitle(items[k][0]);
  };

  return (
    <>
      <Layout>
        <Header style={{ textAlign: "center", color: "#fff", fontSize: 16 }}>
          {" "}
          EN | CRYPTO | DE <Spin /> PlayGround{" "}
        </Header>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items.map((ele, index) => ({ label: ele[0], key: index }))}
        />
        <Watermark content="ICY Labs">
          {current && (
            <Content style={{ padding: "50px" }}>
              <div>{comp}</div>
            </Content>
          )}
          <Footer style={{ textAlign: "center" }}>
            {" "}
            - with Love from ZBST
          </Footer>
        </Watermark>
      </Layout>
    </>
  );
};

export default App;