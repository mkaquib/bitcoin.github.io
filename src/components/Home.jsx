import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import img1 from '../assets/btc.png'
function Home() {
  return (

    <Box w={'full'} bgColor={'blackAlpha.900'} h='85vh'>
      <motion.div
        style={{
          height:'80vh'
        }}
        animate={{
          translateY:'20px'
        }}
        transition={{
          duration:1,
          repeat:Infinity,
          repeatType:'reverse'
        }}
      >
        <Image src={img1} w='full' h='full' objectFit={'contain'} />
      </motion.div>
        
        <Text fontSize={'6xl'} mt='-20' textAlign='center' fontWeight={'thin'} color='whiteAlpha.700'>Xcrypto</Text>
    </Box>
  )
}

export default Home