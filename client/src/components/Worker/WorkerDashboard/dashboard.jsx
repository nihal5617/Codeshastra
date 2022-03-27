import "./dashboard.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  // ContactPageIcon,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Apartment,
  // ContactPage
} from "@material-ui/icons";
// import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="sidebar1">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Details</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Details
              </li>
            </Link>

            {/* <Link to="/past" className="link">
            <li className="sidebarListItem">
              <Apartment className="sidebarIcon" />
              Past Projects
            </li>
            </Link> */}
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Projects</h3>
          <ul className="sidebarList">
            <Link to="/workerProject" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Projects
              </li>
            </Link>
            {/* <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
            {/* <Link to="/data" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Workers Data
            </li>
            </Link> */}
          </ul>
        </div>

        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Attendance</h3>
          <ul className="sidebarList">
            
          <Link to="/attendance" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Attendance
            </li>
            
            </Link>
            <Link to="/ocr" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Upload Attendance
            </li>
            </Link> */}
        {/* <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div> */}
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle"></h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
