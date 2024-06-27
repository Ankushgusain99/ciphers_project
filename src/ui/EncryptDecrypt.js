import {
    Row,
    InputNumber,
    Input,
    Button,
    Tooltip,
    Typography,
    Flex,
  } from "antd";
  import React, { useState } from "react";
  import SmoothTextInput from "./SmoothText";
  
  import { InfoOutlined } from "@ant-design/icons";
  import lodash from "lodash";
  const { Title } = Typography;
  
  /**
   *
   * @param {Function} encode
   * @param {Function} decode
   * @param {number/string} keyComponentA
   * @param {number/string} keyComponentB
   * @returns
   */
  export default function CipherFactory({
    title = "Cipher Name",
    setShowOverview,
    encode,
    decode,
    keyComponentA,
    keyComponentB,
  }) {
    const [leftText, setLeftText] = useState("");
    const [rightText, setRightText] = useState("");
    const [shift1, setShift1] = useState(keyComponentA == "STR" ? "" : 0);
    const [shift2, setShift2] = useState(keyComponentB == "STR" ? "" : 0);
  
    // For Interactive pages which automatically changes when keys are changed
    const setKey1 = (userKeyInput) => {
      let text =
        keyComponentA == "STR" ? userKeyInput.target.value : userKeyInput;
      keyComponentA == "STR" ? setShift1(text) : setShift1(Number(text));
      setRightText(encode(leftText, text, shift2));
    };
    const setKey2 = (userKeyInput) => {
      keyComponentB == "STR"
        ? setShift2(userKeyInput)
        : setShift2(Number(userKeyInput));
      setRightText(encode(leftText, shift1, userKeyInput));
    };
  
    const handleLeftTextChange = (event) => {
      let text = event.target.value;
      setLeftText(text);
      setRightText(encode(text, shift1, shift2));
    };
  
    const handleRightTextChange = (event) => {
      let text = event.target.value;
      setRightText(text);
      setLeftText(decode(text, shift1, shift2));
    };
  
    return (
      <>
        <Flex vertical={false} justify="center" align="center" gap="small">
          <Title
            underline
            level={1}
            type={lodash.sample(["danger", "success", "warning"])}
          >
            {title}
          </Title>
          <Tooltip title="overview">
            <Button
              type="default"
              shape="circle"
              size="small"
              style={{backgroundColor:'whitesmoke', marginTop:15, border:"1px solid grey"}}
              icon={<InfoOutlined />}
              onClick={() => {
                setShowOverview(true);
              }}
            />
          </Tooltip>
        </Flex>
        {keyComponentA && (
          <Row style={{ display: "flex", padding: "10px 10px 10px 0px" }}>
            {keyComponentA == "STR" ? (
              <Input
                style={{ flex: 0.5 }}
                addonAfter="Cipher Key"
                placeholder="SecretKey"
                value={shift1}
                size="large"
                onChange={setKey1}
              />
            ) : (
              <InputNumber
                style={{ flex: 0.4 }}
                addonBefore="Cipher Key A:"
                placeholder="Shift value"
                value={shift1}
                size="large"
                onChange={setKey1}
              />
            )}
          </Row>
        )}
        {keyComponentB && (
          <Row style={{ display: "flex", padding: "10px 10px 10px 0px" }}>
            {keyComponentB == "STR" ? (
              <Input
                style={{ flex: 0.5 }}
                addonAfter="Cipher Key B:"
                placeholder="SecretKey"
                value={shift2}
                size="large"
                onChange={setKey2}
              />
            ) : (
              <InputNumber
                style={{ flex: 0.4 }}
                addonBefore="Cipher Key B:"
                placeholder="Shift value"
                value={shift2}
                size="large"
                onChange={setKey2}
              />
            )}
          </Row>
        )}
  
        <Row style={{ display: "flex" }}>
          <SmoothTextInput
            value={leftText}
            isLeft={true}
            onChange={handleLeftTextChange}
            placeholder="Enter text to Encrypt"
          />
          <SmoothTextInput
            value={rightText}
            isLeft={false}
            onChange={handleRightTextChange}
            placeholder="Enter text to Decrypt"
          />
        </Row>
  
        <Row style={{ display: "flex", flexDirection: "column" }}></Row>
      </>
    );
  }
  