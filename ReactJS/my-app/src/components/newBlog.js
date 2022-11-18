import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Topbar from "./topbar/topbar";


function NewBlog({addNewBlog}) {
    //should check weather username exists or not
    //if not exist redirect to login page
    //then should be directed to addnew blog page

    return (
        <>
                <Topbar/>
               
               <BlogForm addNewBlog={addNewBlog}/>
   
    
        </>
    )

}


export default NewBlog;