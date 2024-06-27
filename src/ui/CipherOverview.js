import React from "react";
import { Divider, Flex, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./CipherOverview.css";

const CipherOverview = ({
  setShowOverview,
  Header,
  Description,
  Example,
  References,
}) => {
  const closeModal = () => {
    setShowOverview(false);
  };
  return (
    <div className="modal">
      <div className="modal-overlay">
        <Flex vertical={false} align="center" justify="space-between"> 
          <Header />
          <Button
            type="text"
            icon={<LeftOutlined />}
            iconPosition={"left"}
            shape="round"
            onClick={closeModal}
          >
            Back
          </Button>
        </Flex>
        <Divider>Description</Divider>
        <Description />
        <Divider>Example</Divider>
        <Example />
        <Divider>References</Divider>
        <References />
      </div>
    </div>
  );
};

export default CipherOverview;
