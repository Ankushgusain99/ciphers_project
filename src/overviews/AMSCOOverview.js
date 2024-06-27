
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>AMSCO Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      The AMSCO Cipher is a type of transposition cipher used for encryption. It works by writing the plaintext message in a zigzag pattern within a grid and then reading the columns in a specific order determined by a key. Each cell in the grid can contain one or two letters, which adds an extra layer of complexity. This method rearranges the characters of the plaintext to create the ciphertext, making it more difficult to decipher without knowing the key and the pattern used.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      Sure, here's an example for the AMSCO Cipher presented in a similar format:

<Text>Write down the plaintext message: HELLO WORLD.</Text>
<Text>Use the AMSCO Cipher to encode the message.</Text>
<Text>Choose a key for the columnar transposition. In this example, we'll use the key "31452".</Text>
<Text>Write the plaintext message in a zigzag pattern with alternating groups of 1 and 2 letters.</Text>
<Text>H E  LL O W  OR LD</Text>
<Text>Arrange the columns according to the numerical order of the key.</Text>
<Text>Column 1: L  W</Text>
<Text>Column 2: E  O</Text>
<Text>Column 3: H  O</Text>
<Text>Column 4: L  R</Text>
<Text>Column 5: O  D</Text>
<Text>Read the columns vertically to get the encoded message: LOWEHLOORD.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>

      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://sites.google.com/site/cryptocrackprogram/user-guide/cipher-types/transposition/amsco"
        target="_blank"
      >
        https://sites.google.com/site/cryptocrackprogram/user-guide/cipher-types/transposition/amsco       </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
