import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface CardProps{
  title: string;
  content: string;
  image:{
    url: string;
    alt: string;
  }
  publishDate:{
    date: string;
    time: string;
  }
}

export function Card({image,content,publishDate,title}: CardProps){
  return(
    <Flex w={400} maxH={400} h={400} backgroundColor='aqua' borderRadius={10} flexDirection='column' justifyContent='space-between' border='1px solid gray'>
      <VStack w={400} h={200} justifyContent='center'>
        <Heading  textAlign='center' borderRadius={10}>{ title}</Heading>
        <Text variant='subtitle'>{publishDate.date} {publishDate.time}</Text>
        {/* <Text>{content}</Text> */}
      </VStack>
      <Image src={image.url} alt={image.alt} w={400} h={200} objectFit="cover" borderRadius={10}  />
    </Flex>
  )
}