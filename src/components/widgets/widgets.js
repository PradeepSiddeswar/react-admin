import './widgets.css';

const Widgets = () => {
    return (
        <main>
            <div className="container">
                <div className="card total1">
                    <div className="box">
                        <h3>230</h3>
                        <p>Celebrities</p>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-users"></i>
                    </div>
                </div>
                <div className="card total2">
                    <div className="box">
                        <h3>90</h3>
                        <p>Order</p>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                </div>
                <div className="card total3">
                    <div className="box">
                        <h3>200</h3>
                        <p>Booking</p>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-clipboard"></i>
                    </div>
                </div>
                <div className="card total4">
                    <div className="box">
                        <h3>$28k</h3>
                        <p>Earings</p>
                    </div>
                    <div className="icon-box">
                        <i className="fas fa-hand-holding-usd"></i>
                    </div>
                </div>
                 <div className="card detail">
                            < div className="heading">
                                <h5>All Appointments</h5>
                                <a href="#" className="btn">View All</a>
                            </div>
                            <table className="booking">
                                <thead>
                                    <td>Name</td>
                                    <td>Categories</td>
                                    <td>Action</td>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sachin Tendulkar</td>
                                        <td>Cricket</td>
                                        <td>
                                            <a href="">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Cristonio Ronald</td>
                                        <td>Footbal</td>
                                        <td>
                                            <a href="">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Vijay</td>
                                        <td>Indian Actor</td>
                                        <td>
                                            <a href="">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Prabhas</td>
                                        <td>Indian Actor</td>
                                        <td>
                                            <a href="">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>A R Rahman</td>
                                        <td>Music Composer</td>
                                        <td>
                                            <a href="">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
</div>
                    </div>
        </main>
    )
}
export default Widgets;







