import { useState } from "react";

function AddNewUser(){
    let [name, setName] = useState("");
    let [username, setUsername] = useState("");
    let [allUser,setAllUser] = useState(JSON.parse(localStorage.getItem('users'))||[]);
    let [edit, setEdit] = useState(null);

    function handleDelete(id) {
        let newuser = [...allUser].filter((user,index) => {
            return index !== id
        })
        setAllUser(newuser);
        window.localStorage.setItem('users', JSON.stringify(newuser));
    }
    
    return(
        <div>
            <div className="w-1/2 mx-auto ">
                <form className="text-center" onSubmit={(event) => {
                     event.preventDefault();

                     if(edit !== null && username && name){
                        allUser[edit] = {username:username,name:name};
                     }

                     if(edit === null && username && name){
                        allUser = allUser.concat({username,name});
                     }
                    setAllUser(allUser);
                    window.localStorage.setItem('users', JSON.stringify(allUser));
                    setName("");
                    setUsername("");
                    setEdit(null);
                }}>
                    <h1 className="text-2xl font-semibold">{edit === null ? "Add New User" :"Edit User"}</h1>
                    <input className="w-full border-2 mt-3 p-2 rounded" type="text" value={name} name="name" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
                    <input className="w-full border-2 mt-3 p-2 rounded" type="text" value={username} name="username" placeholder="Enter your Username" onChange={(event) => setUsername(event.target.value)} />
                    <button className="bg-green-500 rounded p-3 mt-3 text-gray-50" type="submit">{edit === null ? "Add New User" :"Edit User"}</button>
                </form>
            </div>
            <div className="w-1/2 mx-auto mt-5 ">
                {
                    allUser.map((user,index) => (
                        <div className="flex" key={index}>
                            <h1 className="mr-2 text-xl font-semibold">{user.name}</h1>
                            <p className="text-xl font-semibold">{user.username}</p>
                            <span className="ml-2" onClick={() => handleDelete(index)}>❌</span>
                            <span className="ml-2" onClick={() => {
                                let {username, name} = allUser[index];
                                setUsername(username);
                                setName(name)
                                setEdit(index)
                            }}>✏️</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AddNewUser;