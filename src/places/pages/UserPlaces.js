import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom"

const DUMMY_Places = [{
    id:"p1",
    title:"Empire State Building",
    description:"One of the  best building",
    imageUrl:"https://images.freeimages.com/images/large-previews/773/koldalen-4-1384902.jpg",
    address:"647m/597a Ekta Nagar Lucknow",
    location:{
        lat:40.7484405,
        lng:-73.878678,
    },
    creator:"u1"
},
    {
    id:"p2",
    title:"Empire State Building",
    description:"One of the  best building",
    imageUrl:"https://images.freeimages.com/images/large-previews/773/koldalen-4-1384902.jpg",
    address:"647m/597a Ekta Nagar Lucknow",
    location:{
        lat:40.7484405,
        lng:-73.878678,
    },
    creator:"u2"
}

]

const UserPlaces = ()=> {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_Places.filter(place=>place.creator ===userId)
      return <PlaceList items={loadedPlaces} />

}

export default UserPlaces;