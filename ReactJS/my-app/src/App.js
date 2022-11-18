import './App.css';
import Blogs from "./components/blogs";
import NewBlog from "./components/newBlog";
import {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import AuthForm from "./components/auth";
import ShowBlog from "./components/showBlog";
import About from './components/about';

function App() {
// Create an api to fetch a single blog when user clicks on read more
    let [blogList, setBlogList] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{

        console.log("Here !");

        fetch("http://localhost:3001/blog/getAllBlogs")
            .then(res => res.json())
            .then( (result) => {
                console.log(result);
                setBlogList(result);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);
    let addNewBlog = (newBlogObject) => {
        setBlogList([...blogList,newBlogObject])
    }

  return (
      <Routes>
          <Route path='/auth' element={<AuthForm/>}></Route>
          <Route path='/' element={<Blogs  blogList={blogList} isLoaded={isLoaded}/>}></Route>
          <Route path='/newBlog' element={ <NewBlog addNewBlog={addNewBlog}/>}></Route>
          <Route path='/showBlog' element={ <ShowBlog />}></Route>
          <Route path='/about' element={<About/>}> </Route>
      </Routes>
);
}

export default App;
