export default function User({user, editUser, deleteUser}) {
    
    return  <div className='row mt-2'>  
                <div className='col-4 overflow-hidden'>{user.name}</div>
                <div className='col-4 overflow-hidden'>{user.username}</div>
                <div className='col-4 d-flex justify-content-evenly'>
                    <button className="btn btn-primary" onClick={() => editUser()}>Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteUser()}>Delete</button>
                </div>
            </div>
}

