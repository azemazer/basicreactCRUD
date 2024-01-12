export default function AddOrEditUser ({isEditing, newUserName, newUserUsername, changeUserName, changeUserUsername, addNewUserOrEditUser}) {
    
    return      <div className='col'>
                    <h2>{isEditing ? <span>Edit user</span> : <span>Add user</span>}</h2>
                    <form>
                        <div className="mb-3">
                        <label htmlFor="nameInputAdd" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInputAdd" value={newUserName} aria-describedby="nameInputAddHelp" onChange={(e) => changeUserName(e)} />
                        <div id="nameInputAddHelp" className="form-text">This is your real name.</div>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="usernameInputAdd" className="form-label">Username</label>
                        <input type="text" className="form-control" id="usernameInputAdd" value={newUserUsername} aria-describedby="usernameInputAddHelp" onChange={(e) => changeUserUsername(e)} />
                        <div id="usernameInputAddHelp" className="form-text">This is your fake name. Choose a cool nickname!</div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => addNewUserOrEditUser(e)}>Save</button>
                    </form>
                </div>
}