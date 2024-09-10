import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tost() {
    const notify = () => toast("Wow so easy!");
    console.log(toast);

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export default Tost;
