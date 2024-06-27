import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Binary Overview</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      The idea is to extract the digits of a given binary number starting from the rightmost digit and keep a variable dec_value. At the time of extracting digits from the binary number, multiply the digit with the proper base (Power of 2) and add it to the variable dec_value. In the end, the variable dec_value will store the required decimal number.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the decimal number: 13.</Text>
<Text>Use the Decimal to Binary conversion method.</Text>
<Text>Divide the number by 2 and write down the remainder. This will be the least significant bit (rightmost).</Text>
<Text>Continue dividing the quotient by 2, writing down the remainder each time until the quotient is 0.</Text>
<Text>Arrange the remainders in reverse order to get the binary representation.</Text>
<Text>13 divided by 2 is 6 with a remainder of 1 (least significant bit).</Text>
<Text>6 divided by 2 is 3 with a remainder of 0.</Text>
<Text>3 divided by 2 is 1 with a remainder of 1.</Text>
<Text>1 divided by 2 is 0 with a remainder of 1 (most significant bit).</Text>
<Text>So, the binary representation of 13 is 1101.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="data:image/jpeg;base64,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" />
        
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/program-decimal-binary-conversion/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/program-decimal-binary-conversion/
      </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
