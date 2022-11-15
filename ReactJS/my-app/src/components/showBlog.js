import {useEffect, useState} from "react";

function ShowBlog() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/blog/getAllBlogs")
            .then(res => res.json())
            .then( (result) => {
                console.log(result);
                setBlogs(result);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));

    },[]);
   if(!isLoaded){
       return <div> Loading ....</div>
   } else {
       return (
           <ul>
               <h1></h1>
           </ul>
       );
   }
}

export default ShowBlog;