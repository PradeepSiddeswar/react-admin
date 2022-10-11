import FormSingup from "../form/FormSingup";
import FormSuccess from "./FormSuccess";
import Navbar1 from "./Navbar1";




const Form = () => {
    return (

        <>

         <Navbar1 />

            <div className="form">
                <FormSuccess />
                <FormSingup />

            </div>

        </>
    );
};
export default Form;