import {AiOutlineUp} from "react-icons/ai";
import Users from "./Users";

const RightSide = () => {
    return <div className='col-6'>
        <div>
            <h4>Users (20)</h4>
            <p>Overview of Users</p>
        </div>
        <div className="bg-light">
            <Users/>
            <Users/>
            <div className='d-flex align-items-center ms-3 text-danger'>
                <AiOutlineUp/>
                <p className='mb-0 ms-2'>View All</p>
            </div>
        </div>
    </div>
}

export default RightSide
