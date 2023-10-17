import { useState } from "react"

function Pagination1(postPerPage,totalPosts,paginate){
    const pageNumbers=[]
    for(let i=1; Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)}
const[activePage, setActivePage]=useState(1)
const handlePageClick = (number)=>{
    setActivePage(number)
}

    return(
        <nav>
        <ul>
            {
                
                pageNumbers.map((number) => {
                    <li key={number}>
                        <a 
                        href="!#"
                        onClick={()=>{
                            handlePageClick(number)
                            paginate(number)
                        }}>{number}</a>
                    </li>
                })
                
            }
            </ul>
        </nav>
    )
}
export default Pagination1