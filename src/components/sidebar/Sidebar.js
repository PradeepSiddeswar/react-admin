import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className="container">
            <input type="checkbox" id="toggle" />
            <label className="side-toggle"
                for="toggle"><span className="fas fa-bars"></span>
            </label>
            <div className="sidebar">
                <ul className="sidebar-menu">
                <a href="Menu" className="active">
                    <li>
                        <i className="fas fa-th-large"></i>
                        <div className="title">  Menu </div>
                    </li>
                    </a>
                    <li>
                        <i className="fas fa-address-card"></i>
                        <div className="title">  Appointments </div>
                    </li>
                    <li>
                        <i className="fas fa-user"></i>
                        <div className="title">  Celebrities </div>
                    </li>
                    <li>
                        <i className="fas fa-puzzle-piece"></i>
                        <div className="title">  Departments </div>
                    </li>
                    <li>
                        <i className="fas fa-hand-holding-usd"></i>
                        <div className="title">  Income </div>
                    </li>
                    <li>
                        <i className="fas fa-question"></i>
                        <div className="title">  Help </div>
                    </li>
                    <li>
                        <i className="fas fa-cog"></i>
                        <div className="title"> Settings</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;