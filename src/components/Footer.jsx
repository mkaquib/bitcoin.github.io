import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box
    bgColor='blackAlpha.900'
     minH={'48'}
     color='whiteAlpha.900'
     px={'16'}
     py={['16','8']}
    >
    <Stack direction={['column','row']} h='full' alignItems={'center'}>
        <VStack w={"full"} alignItems={["center", 'flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing="widest" textAlign={['center', 'left']}>we are best crypto trading app in india</Text>
        </VStack>

        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']}/>
            <Text>Our Founder</Text>
        </VStack>
    </Stack>
    </Box>
  )
}

export default Footer