import './FormSingup.css';
import React from "react";
import UseForm from "./UseForm";
// import validate from "./validateInfo";
import validate from "./valideteInfo"





const FormSingup = (submitForm) => {
    const { handleChange, values, handleSubmit, errors } = UseForm(validate);

  

    return (

        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get stated with us today! Create your account by willing out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-lable" >Username :
                    </label>
                    <input style={{ marginRight: "15px", margin: "10px", width: "30%" }} type="text" name="username" id="username" className="form-input" placeholder="Username" value={values.username} onChange={handleChange}></input>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-lable" >Email : </label>
                    < input style={{ marginRight: "15px", margin: "10px", width: "30%" }} type="email" name="email" id="email" className="form-input" placeholder="Email" value={values.email} onChange={handleChange}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-lable" >Password :  </label>
                    <input style={{ marginRight: "15px", margin: "10px", width: "30%" }} type="password" name="password" id="password" className="form-input" placeholder="Password" value={values.password} onChange={handleChange}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-lable" >Confirm Password : </label>
                    <input style={{ marginRight: "15px", margin: "10px", width: "30%" }} type="password" name="password2" id="password2" className="form-input" placeholder="Confirm Password" value={values.password2} onChange={handleChange}></input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="birthday" className="form-lable"  >Date of Birth :</label>
                    <input style={{ marginRight: "15px", margin: "10px", width: "30%" }} type="date" name="birthday" id="birthay" className="form-input" placeholder="Date of Birth" value={values.birthday} onChange={handleChange}></input>
                    {errors.birthday && <p>{errors.birthday}</p>}
                </div>

                <div className="form-inputs-">
                    <label htmlFor="gender" className="form-lable" style={{ marginLeft: "-63px" }} >Gender : </label>
                    <input type="radio" name="male" id="male" className="form-input" value={values.male}  ></input>Male
                    <input type="radio" name="female" id="female" className="form-input" value={values.female} style={{ marginLeft: "6px" }} ></input>female

                </div>
                <button className="form-input-btn" type="submit">Sing Up</button>
                <br></br>
                <span className="form-input-login">
                    Already have a account? Login <a href="#">here</a>
                </span>

            </form>
        </div>

    );
};
export default FormSingup;