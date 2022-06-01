
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query';
export default function Home() {



  const fetchData = async () =>{
     const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character");
     return response.json();
  }

  const {data} = useQuery("home",fetchData);

  function getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return (
    <Container fluid="md" className='d-flex text-center mt-5 pt-5 h-100 justify-content-center'>

        <div className='pt-5'>
          {data ? <h2 key={getRandomInt(1,50)}>{data[getRandomInt(1,50)].quote}</h2> : <h2>Loading...</h2> }
        </div>
      
    </Container>

  )
}
