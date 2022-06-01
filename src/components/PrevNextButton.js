

import React from 'react'

export default function PrevNextButton({data,prevPage,nextPage,pageNumber,max}) {
   
  return (
    <div>
        <ul className="pagination">
                    <li className={(!data || pageNumber === 1) ? ["page-item","disabled"].join(" ") : "page-item" } onClick={prevPage} disabled={ !data  || pageNumber === 1}>
                       <span role="button" className={(!data || pageNumber === 1) ? ["page-link","disabled"].join(" ") : "page-link" } disabled={ !data  || pageNumber === 1}>Prev</span>
                    </li>
                    <li className="page-item"><span  className="page-link">{pageNumber}</span></li>
                    <li  className={(!data || pageNumber === max) ? ["page-item","disabled"].join(" ") : "page-item" } onClick={nextPage} disabled={ !data ||  pageNumber === max}>
                       <span role="button" className={(!data ||  pageNumber === max) ? ["page-link","disabled"].join(" ") : "page-link" } disabled={ !data ||  pageNumber === max }>Next</span>
                    </li>
                    </ul>
    </div>
  )
}
