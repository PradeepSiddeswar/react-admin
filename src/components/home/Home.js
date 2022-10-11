import "./Home.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar  from "../navbar/Navbar";
import Widgets from "../widgets/widgets";
import Chart from "../charts/Chart";




const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <Navbar />
            <Chart />
            <Widgets />
            

            </div> 
     
    );
};
export default Home;