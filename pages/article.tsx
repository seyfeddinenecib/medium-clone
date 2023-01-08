import { Avatar, Text, Box, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const handleEdit = () => {
    router.push("/createArticle");
  };
  const handleDelete = () => {};
  return (
    <Box color="black" padding="30px" maxWidth="4xl" marginX="auto">
      <Text fontSize="5xl" casing="capitalize">
        this is the title of the article
      </Text>
      <Flex padding="30px" align="center" gap="10px">
        <Avatar></Avatar>
        <Text>hamzouvic</Text>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptas,
        aliquam vitae amet ratione non sint recusandae sunt nobis cumque nihil,
        ad ipsum reprehenderit voluptatem laudantium maxime distinctio explicabo
        quia veritatis labore, eligendi ipsa deserunt numquam exercitationem?
        Asperiores autem beatae magni modi excepturi provident velit voluptatem
        quis ipsum, alias sunt voluptate dolorum repudiandae totam quaerat
        labore eum aliquid sint, aperiam, similique consequatur. Ea, impedit
        est. Quo voluptatum modi vero ex nostrum quod earum fugiat
        exercitationem veritatis? Et vel laudantium odit, nulla perspiciatis
        voluptates debitis incidunt voluptatem veritatis odio quas sit porro
        nemo, consequuntur excepturi dignissimos architecto iste natus tempore
        sapiente. Id labore laboriosam sed ullam necessitatibus iusto voluptatem
        quaerat mollitia, similique voluptates, hic cupiditate eveniet omnis
        saepe. Amet sit ullam corrupti error tempore! Sit dolor sequi minus
        dolorum magni nemo illum odit, laudantium, commodi sint architecto eius
        dolores modi error ullam, quia reiciendis. Cum perspiciatis alias
        dolorum nemo harum cupiditate minima quidem, quibusdam ad corrupti ab
        laboriosam tenetur eos rerum dicta iure modi ex ut exercitationem
        possimus natus maxime. Officiis sit nulla ducimus exercitationem,
        voluptate labore dicta placeat dolorum laudantium ad aliquam facere
        adipisci consequuntur laborum, rerum obcaecati asperiores illum quas?
        Commodi sint iste rerum ea consectetur quaerat sed, sit cumque, nobis
        possimus nesciunt est? Ducimus deleniti magni, esse voluptates
        cupiditate officia provident itaque consequatur, est in quaerat culpa
        nemo enim veniam veritatis pariatur tenetur, quos tempora modi dolorum
        quasi dolor ea exercitationem. Laborum sequi eveniet sint ex labore ipsa
        cum, iusto cupiditate ad neque voluptate, aspernatur harum doloribus
        nostrum nobis amet beatae consectetur magnam corporis! Voluptatibus
        explicabo molestias, tenetur modi placeat voluptate vel. Quasi
        repellendus accusamus cumque? Atque rem similique iure, pariatur nisi ab
        fuga enim voluptate eaque reiciendis rerum aperiam quibusdam quisquam
        ratione dolorem dolores odio veritatis error illo quis nam aspernatur
        soluta! Molestias deserunt dignissimos neque porro laudantium dolore,
        nihil iure excepturi iusto ratione vero eaque nostrum, rem quam nemo quo
        aspernatur. Ea quis iure dolorum veniam quam minima illum a ullam? Fugit
        labore in ipsam quae amet, cum sunt, commodi possimus architecto ratione
        distinctio quaerat eius recusandae eveniet. Qui, totam odit repellat
        ipsum repellendus vitae fugit earum eum voluptate, possimus corrupti
        voluptates laboriosam. Quidem delectus temporibus praesentium fuga
        consequuntur accusamus, culpa commodi quibusdam molestias soluta tenetur
        ratione facere eum voluptate vel voluptas obcaecati dolore aliquam ullam
        dignissimos rem vitae explicabo repellendus. Quis sequi veritatis
        tempore autem facilis, perferendis asperiores excepturi aliquam nam
        accusamus perspiciatis ipsum non.
      </Text>
      <Flex justify="right" gap="10px">
        <Button onClick={handleEdit} variant="solid" colorScheme="green">
          Edit
        </Button>
        <Button onClick={handleDelete} variant="solid" colorScheme="red">
          delete
        </Button>
      </Flex>
    </Box>
  );
};

export default Article;
