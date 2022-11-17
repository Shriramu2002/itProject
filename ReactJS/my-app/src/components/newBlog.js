import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Header from "./header";
import Footer from "./footer";


function NewBlog({addNewBlog}) {
    //should check weather username exists or not
    //if not exist redirect to login page
    //then should be directed to addnew blog page

    return (
        <>
            <Header/>
               <div className="newBlogContainer">
               <BlogForm addNewBlog={addNewBlog}/>
               </div>
            <Footer/>
        </>
    )

}


export default NewBlog;