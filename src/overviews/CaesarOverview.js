import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Caesar Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Caesar Cipher technique is one of the earliest and simplest methods
        of encryption technique. It's simply a type of substitution cipher,
        i.e., each letter of a given text is replaced by a letter with a fixed
        number of positions down the alphabet.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Choose a shift value.</Text>
      <Text>In this case, we will use a shift of 3.</Text>
      <Text>
        Replace each letter in the plaintext message with the letter that is
        three positions to the right in the alphabet.
      </Text>
      <Text>H becomes K (shift 3 from H).</Text>
      <Text>E becomes H (shift 3 from E).</Text>
      <Text>L becomes O (shift 3 from L).</Text>
      <Text>L becomes O (shift 3 from L).</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg" />
        <Image
          src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg"
          width={300}
        />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/
      </Link>
      <Link
        href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
