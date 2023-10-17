function Posts({post,loading}){
    if(loading){
        return<h2>Loading..</h2>
    }
    return(
        <div>
            {post.map(post=>(
                <div key={post.id}>
                <h3>{post.title.slice(0,15)}</h3>
                

                </div>
            ))}
        </div>
    )
}
export default Posts