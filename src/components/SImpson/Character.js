

import { Row,InputGroup, Form } from 'react-bootstrap';
import { useQuery } from 'react-query';
import PrevNextButton from '../PrevNextButton';
import CardView from './CardView';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
export default function Character() {

    const [pageNumber, setPageNumber] = useState(1);
    const [characterSearch, setCharacterSearch] = useState('')

    const fetchData = async () => {
        const response = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=50&character");
        return response.json();
    }

    const { data } = useQuery("simpson", fetchData);

  

    const characterPerPage = 10;
    const pagePerVisited = pageNumber * characterPerPage;
    const displayCharacter = data && data.slice(pagePerVisited, pagePerVisited + characterPerPage);

  
    const nextPage = () => {
        if (data) {
            setPageNumber(
                p => Math.min(p += 1, data && Math.ceil(data && data.length / 20)
                )
            )
        }
    }

    const prevPage = () => {
        if (data) {
            setPageNumber(p => Math.max(p -= 1, 1));
        }

    }

    
    const changePage =  ({selected}) => {
        if (data) {
            setPageNumber(selected += 1)
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-items-baseline'>
                <div>
                    <PrevNextButton data={data} prevPage={prevPage} nextPage={nextPage} max={Math.ceil(data && data.length / 20)} pageNumber={pageNumber} />
                </div>
                <div>
                    <InputGroup>
                        <Form.Control placeholder='Search' value={characterSearch} onChange={evt => setCharacterSearch(evt.target.value)} />
                        <InputGroup.Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></InputGroup.Text>
                    </InputGroup>
                </div>

            </div>
            <Row>
                {data && displayCharacter.filter((val)=>{
                       if (characterSearch.trim() === "") {
                        return val;
                    }
                    return val.character.trim().toLowerCase().includes(characterSearch.trim().toLocaleLowerCase());
                }).map((item, index) => (
                    <CardView {...item} key={item.quote + " " + index} />
                ))}
            </Row>
            
            <ReactPaginate
                // forcePage={data && (pageNumber - 1)}
                containerClassName={"pagination justify-content-center pt-5 mt-3"}
                previousLabel={'Prev'}
                previousClassName={'page-item'}
                nextLabel={'Next'}
                nextClassName={'page-item'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                // marginPagesDisplayed={0}
                // pageRangeDisplayed={9}
                pageCount={data && Math.ceil(data.length / 20)} // total characters / 20  (2.5 = 3 pages)
                onPageChange={changePage}

                previousLinkClassName={pageNumber === 1 ? ["page-link", "disabled"].join(" ") : "page-link"}
                nextLinkClassName={pageNumber === (data && data.length) ? ["page-link", "disabled"].join(" ") : "page-link"}
                disabledClassName={"disabled"}

                activeClassName={"active"}
            />
        </div>
           )
    
}
