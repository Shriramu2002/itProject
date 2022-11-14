
import '../css/stylesheet.css';
import {Link} from "react-router-dom";
import Topbar from "./topbar/topbar";
import Header1 from './header1/header1';
import Sidebar from './sidebar/sidebar';
function Header() {

    return (



        <div >
             <Topbar/>
             <Header1/>
            {/* <Link to="/">
                <h1 style={{ display: "inline-block", color: "white"}} > My Blogging Website</h1>
            </Link>

            <Link to="/newBlog">
                <h1 style={{ display: "inline-block", float: "right" , color: "white"}}> New Blog </h1>
            </Link> */}
             <Sidebar/>
        </div>
    )


}

export default Header;