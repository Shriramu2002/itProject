import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Topbar from "./topbar/topbar";
// import Footer from "./footer";


function NewBlog({addNewBlog}) {

    return (
        <>
            {/* <Topbar/>
               <div className="newBlogContainer">
               <BlogForm addNewBlog={addNewBlog}/>
               </div>
            <Footer/> */}
            <Topbar/>
            <BlogForm/>
        </>
    )

}


export default NewBlog;