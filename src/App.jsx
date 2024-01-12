import { useState } from 'react'
import User from './components/userList/user'
import UserList from './components/userList/userList'
import AddOrEditUser from './components/forms/addOrEditUser'
// import './App.css'

function App() {

  const originalUserList = [
    {
      name: "Jean-Jacques-Jules Cheminabrépant",
      username: "JJJC_the_boss"
    },
    {
      name: "Nick Wilde",
      username: "d4f0x"
    },
    {
      name: "Théo Faucet",
      username: "xX_DARKILLEUR_Xx"
    },
    {
      name: "Robert Desouslepontdelapetiterivière",
      username: "bob"
    },
  ]

  const [userList, setUserList] = useState(originalUserList)
  const [newUserName, setNewUserName] = useState("")
  const [newUserUsername, setNewUserUsername] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [indexToEdit, setIndexToEdit] = useState(null)

  const addNewUserOrEditUser = (e, index = userList.length) => {
    e.preventDefault();
    if(newUserName === "" || newUserUsername === ""){
      return alert("Can't have blank username / name !")
    }
    let newUserList = userList.slice();
    newUserList[index] = {
        name: newUserName,
        username: newUserUsername
      };
    setUserList(newUserList);
    setNewUserName("");
    setNewUserUsername("");
    setIsEditing(false);
    setIndexToEdit(null);
  }

  const editUser = (index) => {
    setIndexToEdit(index);
    setIsEditing(true);
    setNewUserName(userList[index].name);
    setNewUserUsername(userList[index].username);
  }

  const changeUserName = (e) => {
    setNewUserName(e.target.value);
  }

  const changeUserUsername = (e) => {
    setNewUserUsername(e.target.value);
  }

  const deleteUser = (index) => {
    let newUserList = userList.slice();
    newUserList.splice(index, 1);
    setUserList(newUserList);
  }

  return (
    <>
      <div className="container-sm">
        <div className='row mt-2 mb-6'>
          <h1 className='fw-bold'>CRUD App with hooks</h1>
        </div>
        <div className='row'>
          <AddOrEditUser 
            isEditing={isEditing} 
            newUserName={newUserName} 
            newUserUsername={newUserUsername}
            changeUserName={(e) => changeUserName(e)}
            changeUserUsername={(e) => changeUserUsername(e)}
            addNewUserOrEditUser={isEditing ? (e) => addNewUserOrEditUser(e, indexToEdit) : (e) => addNewUserOrEditUser(e)}
          />
          <UserList userList={userList} deleteUser={(index) => deleteUser(index)} editUser={(index) => editUser(index)} />
        </div>
      </div>
    </>
  )
}

export default App
