import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {server} from '../index.js'
import { Container ,HStack} from '@chakra-ui/react'
import Loader from './Loader.jsx'
import ExchangeCard from './ExchangeCard.jsx'
import ErrorComponent from './ErrorComponent.jsx'
function Exchanges() {
    const [exchanges,setExchanges]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    useEffect(()=>{
        const fetchExchanges=async ()=>{
           try {
            const {data}=await axios.get(`${server}/exchanges`)
            // console.log(data)
            setExchanges(data)
            setLoading(false)
           } catch (error) {
            setError(true)
            setLoading(false)
           }
        }
        fetchExchanges();
    },[])
    if(error){
        return <ErrorComponent message="Error While Fetching Exchanges"/>
    }
  return (
    <Container maxW={'container.xl'}>
        {loading ? <Loader/> : <>
            <HStack wrap={'wrap'} justifyContent='space-evenly'>
                {
                    exchanges.map((i)=>(
                            <ExchangeCard key={i.id } name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
                    ))
                }
            </HStack>
        </>

        }
    </Container>
  )
}

export default Exchanges