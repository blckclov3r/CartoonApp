

import { Container, Row, Col } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useState} from 'react'
import axios from 'axios';
export default function Home() {


  const fetchData = async () =>{
     const response = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character");
     return response.data;
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
    <Container className='vh-100'>
        <Row fluid="md" className='h-100 d-flex justify-content-center flex-column'>
          <Col md={8} className="align-middle">
          <div  style={{wordWrap: "break-word",whiteSpace: "pre-line"}}>
          {data ? <h2>{  useData == null ? data[0].quote : useData }</h2> :
             <h2 className="placeholder-glow">
              <span className="placeholder col-5"></span>
            </h2> 
            } 
        </div>
    
        <button className={data ? 'btn btn-primary mt-4' : 'btn btn-primary mt-4 disabled'} disabled={data ? false : true}  onClick={()=>{
            setUseData(data[getRandomInt(1,50)].quote);
        }}>Generate</button>
          </Col>
        </Row>
      
    </Container>

  )
}
