import { useState,useEffect } from "react"
import axios from 'axios'
import Posts from './Posts'
import Pagination1 from './Pagination1'
function Pagination(){
const [post,setPost]=useState([])
const [loading,setLoading]=useState(false)
const [currentPage, setCurrentPage]=useState(1)
const [postPerPage, setPostPerPage] = useState(6)

useEffect(()=>{
    const fetchPost = async ()=>{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        setPost(data)
        setLoading(false)
    }
    fetchPost()

},[])
console.log(post)

const indexOfLastPost = currentPage*postPerPage
const indexOfFistPost = indexOfLastPost-postPerPage
const curentPosts = post.slice(indexOfFistPost,indexOfLastPost)

const paginate = (pageNumber)=>{setCurrentPage(pageNumber)}
    return(
        <>
        <h1> My blog</h1>
        <Posts post={curentPosts} loading={loading}/>
        <Pagination1 postPerPage={postPerPage}
            totalPosts={Posts.length}
            paginate={paginate}
        />
        </>
    )
}
export default Pagination