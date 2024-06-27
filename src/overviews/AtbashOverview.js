import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Atbash Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      The Atbash Cipher is a simple substitution cipher used for encryption. It works by replacing each letter of the alphabet with its reverse counterpart: 'A' is swapped with 'Z', 'B' with 'Y', 'C' with 'X', and so on. This method inverts the position of each letter, creating a mirrored alphabet for encoding messages. It's a straightforward yet effective way to obscure text.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
    <Text>Use the Atbash Cipher to encode the message.</Text>
    <Text>Replace each letter in the plaintext message with its reverse counterpart in the alphabet.</Text>
    <Text>H becomes S (H is the 8th letter from the start, S is the 8th letter from the end).</Text>
    <Text>E becomes V (E is the 5th letter from the start, V is the 5th letter from the end).</Text>
    <Text>L becomes O (L is the 12th letter from the start, O is the 12th letter from the end).</Text>
    <Text>L becomes O (L is the 12th letter from the start, O is the 12th letter from the end).</Text>
    <Text>O becomes L (O is the 15th letter from the start, L is the 15th letter from the end).</Text>
    <Text>So, the encoded message is: SVOOL.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://media.geeksforgeeks.org/wp-content/uploads/aa-4.jpg" />
        
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/implementing-atbash-cipher/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/implementing-atbash-cipher/
      </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
