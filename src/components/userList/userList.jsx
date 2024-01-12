import User from "./user";


export default function UserList({userList, deleteUser, editUser}) {

    return <div className='col'>
                <h2>View users</h2>
                <div className="row">
                    <div className='col-4 fs-3 fw-bold'>Name</div>
                    <div className='col-4 fs-3 fw-bold'>Username</div>
                    <div className='col-4 fs-3 fw-bold'>Actions</div>
                </div>
                {userList.map((user, index) => (
                    <>
                        <User user={user} key={index} deleteUser={() => deleteUser(index)} editUser={() => editUser(index)}/>
                        <hr />
                    </>
                ))}
            </div>
}
