import BlogForm from "./blogForm";
import '../css/stylesheet.css';
import Header from "./header";
import Footer from "./footer";

import {Navigate} from "react-router-dom"

function NewBlog(props) {
    //should check weather username exists or not
    //if not exist redirect to login page
    //then should be directed to addnew blog page
    
    if(props.login===true){
    
    return (
        <>
            <Header/>
               <div className="newBlogContainer">
               <BlogForm addNewBlog={props.addNewBlog}/>
               </div>
            <Footer/>
        </>
    );
    }
    else{
       return (
        <Navigate to="/auth"/>
       );
    }
}


export default NewBlog;