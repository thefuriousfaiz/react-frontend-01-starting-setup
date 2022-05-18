import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";

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

const UpdatePlace =()=>{

    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_Places.find(p=>p.id===placeId)
    
       if(!identifiedPlace){
         return <div className="center">
             <h2> Could not find place!</h2>
             </div>
       }

       return <form className="place-form">
           <Input id="title"
            element="input"
             type="text"
             label="Title"
             validators={[VALIDATOR_REQUIRE()]} 
             errorText = "Please enter a valid title."
             onInput= {()=>{}}
             value={identifiedPlace.title}
             valid={true}
             
             />

            <Input id="description"
            element="textarea"
             label="Description"
             validators={[VALIDATOR_MINLENGTH(5)]} 
             errorText = "Please enter a valid description(at least 5 characters)."
             onInput= {()=>{}}
             value={identifiedPlace.description}
             valid={true}
             />

             <Button type="submit" disabled={true}>UPDATE PLACE</Button>
       </form>;
    
        
}

export default UpdatePlace;