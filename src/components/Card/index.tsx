import React from 'react';
import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

interface CardProps {
  title: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
  publishDate: {
    date: string;
    time: string;
  };
}

export function Card({ image, content, publishDate, title }: CardProps) {
  return (
    <Flex direction="column" border="1px solid gray" bg="primary">
      <VStack w={400} h={200} justifyContent="center">
        <Heading textAlign="center" borderRadius={10}>
          {title}
        </Heading>
        <Text variant="subtitle">
          {publishDate.date} {publishDate.time}
        </Text>
        <Text variant="subtitle">
          {publishDate.date} {publishDate.time}
        </Text>
        <Text variant="subtitle">
          {publishDate.date} {publishDate.time}
        </Text>
        <Text variant="subtitle">
          {publishDate.date} {publishDate.time}
        </Text>
      </VStack>
      <Image
        src={image.url}
        alt={image.alt}
        w={400}
        h={200}
        objectFit="cover"
        borderRadius={10}
      />
    </Flex>
  );
}
