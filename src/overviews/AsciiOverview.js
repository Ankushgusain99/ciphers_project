
import { Typography, Flex } from "antd";

const { Title, Text,Image, Link } = Typography;

const Header = () => {
  return <Title>Ascii Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      An ASCII cipher is a method of encrypting text by using the ASCII American Standard Code for Information Interchange values of characters. In this cipher, each character in the plaintext is converted to its corresponding ASCII code, which is a numerical value ranging from 0 to 127. These numeric values can then be manipulated using various algorithms e.g., adding a fixed number to each ASCII value to produce an encrypted message. To decrypt the message, the process is reversed, converting the manipulated ASCII values back to their original characters. ASCII ciphers are simple and can be used as a basic introduction to cryptographic techniques.
      </Text>
    </div>
  );
};

const Example = () => {
    return (
      <Flex vertical={true}>
        <Text>Write down the plaintext message: HELLO.</Text>
<Text>Use the ASCII Cipher to encode the message.</Text>
<Text>Replace each letter in the plaintext message with its corresponding ASCII value.</Text>
<Text>H becomes 72 H's ASCII value is 72.</Text>
<Text>E becomes 69 E's ASCII value is 69.</Text>
<Text>L becomes 76 L's ASCII value is 76.</Text>
<Text>L becomes 76 L's ASCII value is 76.</Text>
<Text>O becomes 79 O's ASCII value is 79.</Text>
<Text>So, the encoded message is: 72 69 76 76 79.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20240304094301/ASCII-Table.png" />
        
      </Flex>
      </Flex>
    );
  };
  


/*const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
<Text>Use the ASCII Cipher to encode the message.</Text>
<Text>Replace each letter in the plaintext message with its corresponding ASCII value.</Text>
<Text>H becomes 72 H's ASCII value is 72.</Text>
<Text>E becomes 69 E's ASCII value is 69.</Text>
<Text>L becomes 76 L's ASCII value is 76.</Text>
<Text>L becomes 76 L's ASCII value is 76.</Text>
<Text>O becomes 79 O's ASCII value is 79.</Text>
<Text>So, the encoded message is: 72 69 76 76 79.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20240304094301/ASCII-Table.png" />
        
      </Flex>
    </Flex>
  );
};*/

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/what-is-ascii-a-complete-guide-to-generating-ascii-code/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/what-is-ascii-a-complete-guide-to-generating-ascii-code/       </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
