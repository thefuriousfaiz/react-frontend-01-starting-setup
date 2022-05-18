import React from "react";
import UserListItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import './UserList.css';

const UserList = (props) => {

    if(props.items.length === 0){
        return(
            <div>
                <Card>
                <h1>No user found</h1>
                </Card>
            </div>
        )
    }

    return(
        <ul className="users-list">
            {props.items.map((user)=>{
                return(
                    <UserListItem 
                    key={user.id}
                    id = {user.id}
                    image ={user.image}
                    name={user.name}
                    placeCount={user.places}/>
                )
            })}
        </ul>
    );
      
}

export default UserList;