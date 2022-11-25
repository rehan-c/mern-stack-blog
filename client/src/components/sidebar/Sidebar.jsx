import { useEffect, useState } from "react";
import "./sidebar.css"
import rehan from "../../assets/rehan.png"
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async() =>{
        const res = await axios.get("/categories")
        setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src={rehan}
            alt=""
            />
            
            <p>
            Hello, I'm Rehan. <br />
            I like tinkering with software and hardware, and composing music.
            I spend my free time reading the documentation of web technologies.<br/>
            </p>
        </div>
        {/* 
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                    <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        */}
        {/* 
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
        </div>
        */}
    </div>
  )
}

export default Sidebar