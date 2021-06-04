import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const{ data: blog , isLoading , error } = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method : 'DELETE'
        }).then ( () => {
            history.push('/')
        });
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p><b>Written by {blog.author}</b></p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;