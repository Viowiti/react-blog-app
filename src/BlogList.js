import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(item => (
                <div className="blog_preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>Written by: {item.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
