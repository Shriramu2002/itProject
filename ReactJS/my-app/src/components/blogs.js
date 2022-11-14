import '../css/stylesheet.css';
import Blog from "./blog";
import Topbar from './topbar/topbar';
import Footer from "./footer";

function Blogs({blogList,isLoaded}){

    if(!isLoaded) {
        return (
            <>
             <Topbar/>
             <h1>Is Loading .... </h1>
             <Footer/>
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
                <Footer/>

            </>
        )
    }
}

export default Blogs;