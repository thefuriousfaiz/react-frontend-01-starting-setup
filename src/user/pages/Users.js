import React from "react";

import UserList from "../components'/UserList";


const Users = () => {

    const USERS = [{
        id:"u1",
        name:"faiz",
        image:"https://images.freeimages.com/images/premium/small-comps/6687/668730-antique-toy-truck.jpg",
        places:3

    }];

    return(
        <UserList items={USERS}/>
    );

}

export default Users;