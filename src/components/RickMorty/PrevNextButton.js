

import React from 'react'

export default function PrevNextButton({data,prevPage,nextPage,pageNumber}) {
  return (
    <div>
        <ul className="pagination">
                    <li className={data ? ["page-item","disabled"].join(" ") : "page-item"} onClick={prevPage} disabled={ !data  || pageNumber === 1}>
                       <span role="button" className="page-link">Prev</span>
                    </li>
                    <li className="page-item"><span  className="page-link">{pageNumber}</span></li>
                    <li  className={data ? ["page-item","disabled"].join(" ") : "page-item"} onClick={nextPage} disabled={!data }>
                       <span role="button" className="page-link">Next</span>
                    </li>
                    </ul>
    </div>
  )
}
