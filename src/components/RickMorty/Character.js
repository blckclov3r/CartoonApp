


import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';
import ReactPaginate from 'react-paginate';

const KEYS = {
    CHARACTERS: "characters"
}

export default function Character() {

    const [pageNumber, setPageNumber] = useState(1);

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        return response.json();
    }
    const { data,  isLoading, isError, isSuccess} = useQuery([KEYS.CHARACTERS, pageNumber], fetchCharacters);
  
    const nextPage = () =>{
        setPageNumber(
             p => Math.min(p+=1,42)
        )
    }

    const prevPage = () =>{
        setPageNumber(p => Math.max(p-=1,1));
    }

   
    const changePage = ({selected})=>{
        if(selected === 1 || selected === 0){
            selected = 1;
        }
        setPageNumber(Math.max(selected+=1,1))
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
            <ul className="pagination">
                    <li className={data && data.info.prev === null ? ["page-item","disabled"].join(" ") : "page-item"} onClick={prevPage} disabled={ !data || !isSuccess || pageNumber === 1}>
                       <span role="button" className="page-link">Previous</span>
                    </li>
                    <li className="page-item"><span  className="page-link">{pageNumber}</span></li>
                    <li  className={data && data.info.next === null ? ["page-item","disabled"].join(" ") : "page-item"} onClick={nextPage} disabled={!data || !isSuccess}>
                       <span role="button" className="page-link">Next</span>
                    </li>
            </ul>
            <Row>
                {data && data.results.map(item => (
                    <CardView key={item.id} character={item} />
                ))}
            </Row>
            <ReactPaginate 
                disableInitialCallback={ true }
                initialPage={ 1 }
                forcePage={data && pageNumber-1}
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


