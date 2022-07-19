import { Flex, Heading, Image, Text } from '@chakra-ui/react'

export function Header(){
  return (
    <Flex p='5' align='center' gap='3'>
      <Image src="favicon.ico"  objectFit="cover" width="40px" height="40px" alt="Icone" />
      <Flex direction={'column'} >
        <Heading>
          Dev to and you
        </Heading>
        <Text>As noticias mais importantes sobre tecnologia</Text>
      </Flex>
    </Flex>
  )
}