
import {useState} from 'react';
import '../pages/write/write.css';

let BlogForm = function ({addNewBlog}) {

    let [title, setTitle] = useState("");
    let [subTitle, setSubTitle] = useState("");
    let [author,setAuthor] = useState("");
    let [content, setContent] = useState("");


   let titleChangeHandler = (event) => {
       setTitle(event.target.value);
   }

    let subTitleChangeHandler = (event) => {
        setSubTitle(event.target.value);
    }


    let authorChangeHandler = (event) => {
        setAuthor(event.target.value);
    }


    let contentChangeHandler = (event) => {
        setContent(event.target.value);
    }


    let submitHandler = (event) => {
       event.preventDefault();
           console.log(event.target.value);
       let newBlog = {
           id: Math.random().toString(),
           title: title,
           subTitle: subTitle,
           content: content,
           author: author
       }

       console.log(newBlog);
       addNewBlog(newBlog);

        let fetchOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog)
        }
        console.log(newBlog);
        fetch("http://localhost:3001/blog/addBlog", fetchOption)
            .then( response => console.log(response))
            .catch(err => console.error(err))


       setTitle("");
       setSubTitle("");
       setAuthor("");
       setContent("");
    }



    return (
        <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              value={title}
              onChange={titleChangeHandler}
            />
            <input
              className="writeInput"
              placeholder="SubTitle"
              type="text"
              autoFocus={true}
              value={subTitle}
              onChange={subTitleChangeHandler}
            />
            <input
              className="writeInput"
              placeholder="Author"
              type="text"
              autoFocus={true}
              value={author}
              onChange={authorChangeHandler}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              value={content}
              onChange={contentChangeHandler}
            />
          </div>
          <button className="writeSubmit" type="submit" onClick={submitHandler}>
            Publish
          </button>
        </form>
      </div>
    )
}


export default BlogForm;