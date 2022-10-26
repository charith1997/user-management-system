import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Overview = () => {

    return <div className="container-fluid p-5">
        <div className="border bg-light p-4">
            <h2>Welcome, Charith Madhushan</h2>
            <p>Welcome to overview page</p>
        </div>
        <div className='row mt-2'>
            <LeftSide/>
            <RightSide/>
        </div>
    </div>
}

export default Overview
