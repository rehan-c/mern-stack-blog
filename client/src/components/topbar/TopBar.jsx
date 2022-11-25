import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Link } from "react-router-dom";
import "./topbar.css"

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  };

  return (
    <div className="top">
        <div className="topLeft">
            <a href="https://www.github.com/rehan-c" target="_blank"><i className="topIcon fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/rehan-choudhery-88401120b/" target="_blank"><i className="topIcon fab fa-linkedin"></i></a>
            {/*
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            */}
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li style={{display: "none"}} className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                </li>
                <li style={{display: "none"}} className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link write" to="/write">WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <Link to="/settings">
                        <img className="topImg" src={!user.profilePic ? "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" : PF+user.profilePic} width="20" alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }

        {/* <i className="topSearchIcon fas fa-search"></i> */}
        </div>
        </div>
  )
}

export default TopBar