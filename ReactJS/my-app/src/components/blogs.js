import '../css/stylesheet.css';

import Blog from "./blog";
import Topbar from './topbar/topbar';
function Blogs({blogList,isLoaded}){

    if(!isLoaded) {
        return (
            <>
           <Topbar/>
             <h1>Is Loading .... </h1>
            
            </>
        )
    } else {

        return (
            <>
                    <Topbar/>
                <div className="blogs">
                    <h1> My Blog List !</h1>
                    <ul className="blog">
                        {
                            blogList.map(item => <Blog item={item}/>)
                        }
                    </ul>
                </div>


            </>
        )
    }
}

export default Blogs;