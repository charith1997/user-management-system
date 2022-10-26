import {BsPersonCircle} from "react-icons/bs";

const Users = () => {
    return <div className="d-flex border-bottom align-items-center">
        <div className='mx-3 bg-opacity-25 bg-dark p-1'><BsPersonCircle/></div>
        <div className='flex-column'>
            <p className='mb-0'>Virtusa</p>
            <p className='mb-0 text-opacity-50 text-dark'>Company</p>
        </div>
    </div>
}

export default Users
