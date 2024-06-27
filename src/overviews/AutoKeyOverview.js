
import { Typography, Flex } from "antd";

const { Title,Image, Text, Link } = Typography;

const Header = () => {
  return <Title>AutoKey Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      The AutoKey Cipher is a polyalphabetic substitution cipher used for encryption. It enhances the Vigenère Cipher by incorporating the plaintext into the key. Initially, a short key is chosen, and then the plaintext itself is appended to this key. This method ensures that each letter is encrypted using a different shift value, making the encryption more secure. It's a more complex yet effective way to obscure text by using the plaintext to influence the key.
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
        href="https://www.geeksforgeeks.org/autokey-cipher-symmetric-ciphers/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/autokey-cipher-symmetric-ciphers/       
        </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
