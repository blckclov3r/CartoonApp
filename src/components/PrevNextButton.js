

import React from 'react'

export default function PrevNextButton({data,prevPage,nextPage,pageNumber,isLoading}) {
   
  return (
    <div>
        <ul className="pagination">
                    <li className={(!data || isLoading || pageNumber === 1) ? ["page-item","disabled"].join(" ") : "page-item" } onClick={prevPage} disabled={ !data || isLoading  || pageNumber === 1}>
                       <span role="button" className={(!data || isLoading || pageNumber === 1) ? ["page-link","disabled"].join(" ") : "page-link" } disabled={ !data || isLoading  || pageNumber === 1}>Prev</span>
                    </li>
                    <li className="page-item"><span  className="page-link">{pageNumber}</span></li>
                    <li  className={(!data || isLoading || pageNumber === Math.ceil(Math.ceil(data && data.info.count / 20))) ? ["page-item","disabled"].join(" ") : "page-item" } onClick={nextPage} disabled={ !data || isLoading || pageNumber === Math.ceil(Math.ceil(data && data.info.count / 20))}>
                       <span role="button" className={(!data || isLoading || pageNumber === Math.ceil(Math.ceil(data && data.info.count / 20))) ? ["page-link","disabled"].join(" ") : "page-link" } disabled={ !data || isLoading || pageNumber === Math.ceil(Math.ceil(data && data.info.count / 20))}>Next</span>
                    </li>
                    </ul>
    </div>
  )
}
