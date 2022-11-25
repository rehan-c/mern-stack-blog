import "./header.css"
import codingImage from '../../assets/coding.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">MERN-STACK BLOG</span>
                <span className="headerTitleLg">blog</span>
            </div>
            {/* 
            <img className="headerImg" 
            src={codingImage} 
            alt="" 
            />
            */}
        </div>
    )
}