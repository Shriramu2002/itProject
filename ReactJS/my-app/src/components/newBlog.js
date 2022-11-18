import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Topbar from "./topbar/topbar";


function NewBlog({addNewBlog}) {

    return (
        <>
                <Topbar/>
               
               <BlogForm addNewBlog={addNewBlog}/>
   
    
        </>
    )

}


export default NewBlog;