


import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';
import ReactPaginate from 'react-paginate';
import PrevNextButton from './PrevNextButton';

const KEYS = {
    CHARACTERS: "characters"
}

export default function Character() {

    const [pageNumber, setPageNumber] = useState(41);

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }
    const { data,  isLoading, isError, isSuccess} = useQuery([KEYS.CHARACTERS, pageNumber], fetchCharacters);
  
    const nextPage = () =>{
        if(!isLoading){
            setPageNumber(
                p => Math.min(p+=1,data && Math.ceil(data && data.info.count / 20)
                )
           )
        }
    }

    const prevPage = () =>{
        if(!isLoading){
            setPageNumber(p => Math.max(p-=1,1));
            console.log("isLoading",isLoading)
        }
       
    }

   
    const changePage = ({selected})=>{
        if(!isLoading){
            if(selected === 1 || selected === 0){
                selected = 1;
            }
            setPageNumber(Math.max(selected+=1,1))
        }
    }

    useEffect(()=>{
        if (isLoading) {
            console.log("Loading --",isLoading)
        }
        if (isError) {
            console.log("Error --",isError);
        }
        if(isSuccess){
            console.log("isSuccess --",isSuccess);
        }
   
    },[data, isError, isLoading, isSuccess])

  
    return (
        <div>
            <PrevNextButton data={data} prevPage={prevPage} nextPage={nextPage} pageNumber={pageNumber} />
            <Row>
                {(!isLoading && data) && data.results.map(item => (
                    <CardView key={item.id} character={item} isLoading={isLoading}/>
                ))}
            </Row>
            <ReactPaginate 
                forcePage={pageNumber-1}
                containerClassName={"pagination justify-content-center pt-5 mt-3"}
                previousLabel={'Prev'}
                previousClassName={'page-item'}
                nextLabel={'Next'}
                nextClassName={'page-item'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                marginPagesDisplayed={0}
                pageRangeDisplayed={9}
                pageCount={data && Math.ceil(data && data.info.count / 20)} // total characters / 20 character per page
                onPageChange={changePage}
                
            
                previousLinkClassName={data && data.info.prev === null ? ["page-link","disabled"].join(" ") : "page-link"}
                nextLinkClassName={data &&  data.info.next === null ? ["page-link","disabled"].join(" ") : "page-link"}
                disabledClassName={"disabled"}

                activeClassName={"active"}
            />
        </div>
    )
    
  
 
}


