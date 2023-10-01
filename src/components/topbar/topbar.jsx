import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar() {
  const user=false;
  return (
    <div className="top">
        <div className="topleft">
        <i class="topicon fa-brands fa-square-facebook"></i>
        <i class="topicon fa-brands fa-square-twitter"></i>
        <i class="topicon fa-brands fa-square-pinterest"></i>
        <i class="topicon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
                <li className="toplistitem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="toplistitem"><Link className="link" to="/">ABOUT</Link></li>
                <li className="toplistitem"><Link className="link" to="/">CONTACT</Link></li>
                <li className="toplistitem"><Link className="link" to="/write">WRITE</Link></li>
                <li className="toplistitem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topright">
          {
            user ? (
              <img className="topimg"
              src="https://media.istockphoto.com/id/1665365824/photo/a-creative-himachal-pradesh-homestay-balcony-view-in-kinner-kailash-mountain-range-capturing.jpg?s=1024x1024&w=is&k=20&c=OPLBwKyTIkpXPnBm69CF9wkDWeBL8PdyER0pczE5IP8=" alt="" />
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            )
          }
            <i class="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
