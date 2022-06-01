

import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
import {useState} from 'react'
export default function Home() {


  const fetchData = async () =>{
     const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character");
     return response.json();
  }

  
  const {data, isLoading, isError} = useQuery("home",fetchData);
  const [useData, setUseData] = useState();

  function getRandomInt (min, max) {
      if(isLoading || isError){
        return 1;
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  return (
    <Container fluid="md" className='d-flex text-center mt-5 pt-5 h-100 justify-content-center align-items-center flex-column'>

        <div className='pt-5' style={{width: "835px"}}>
          {data ? <h2>{ useData == null ? data[getRandomInt(1,50)].quote : useData }</h2> : <h2>Loading...</h2> } 
        </div>
    
        <button className='btn btn-primary mt-4' disabled={data ? false : true} style={{width: "200px"}} onClick={()=>{
            setUseData(data[getRandomInt(1,50)].quote);
        }}>Generate</button>
      
    </Container>

  )
}
