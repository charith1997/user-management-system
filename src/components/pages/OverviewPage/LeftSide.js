import Organizations from "./Organizations";
import {AiOutlineUp} from "react-icons/ai";

const LeftSide = () => {
    return <div className='col-6'>
        <div>
            <h4>Organizations (20)</h4>
            <p>Overview of Organizations</p>
        </div>
        <div className="bg-light">
            <Organizations/>
            <Organizations/>
            <div className='d-flex align-items-center ms-3 text-danger'>
                <AiOutlineUp/>
                <p className='mb-0 ms-2'>View All</p>
            </div>
        </div>
    </div>
}

export default LeftSide
