
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Affine Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      The Affine Cipher is a type of monoalphabetic substitution cipher used for encryption. It works by applying a mathematical function to each letter in the plaintext. Specifically, each letter is first converted to a numerical value (A=0, B=1, C=2, etc.), then transformed using the function E(x) = (ax + b) mod 26, where 'a' and 'b' are keys and 'x' is the numerical value of the letter. The resulting value is then converted back to a letter. This method provides a simple yet effective way to obscure text by combining linear transformations with modular arithmetic.

      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
<Text>Use the Affine Cipher to encode the message with keys a = 5 and b = 8.</Text>
<Text>Convert each letter to its numerical equivalent (A=0, B=1, ..., Z=25).</Text>
<Text>Apply the encryption function E(x) = (5x + 8) mod 26 to each letter's numerical value.</Text>
<Text>H becomes R (H is 7, E(7) = (5*7 + 8) mod 26 = 43 mod 26 = 17, which corresponds to R).</Text>
<Text>E becomes C (E is 4, E(4) = (5*4 + 8) mod 26 = 28 mod 26 = 2, which corresponds to C).</Text>
<Text>L becomes L (L is 11, E(11) = (5*11 + 8) mod 26 = 63 mod 26 = 11, which corresponds to L).</Text>
<Text>L becomes L (L is 11, E(11) = (5*11 + 8) mod 26 = 63 mod 26 = 11, which corresponds to L).</Text>
<Text>O becomes A (O is 14, E(14) = (5*14 + 8) mod 26 = 78 mod 26 = 0, which corresponds to A).</Text>
<Text>So, the encoded message is: RCLLA.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>

      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/implementation-affine-cipher/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/implementation-affine-cipher/       </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
