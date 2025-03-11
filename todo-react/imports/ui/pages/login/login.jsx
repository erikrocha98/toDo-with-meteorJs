import React from "react";
import { LoginForm } from "../../LoginForm";
import { Navigate } from "react-router-dom";
import {useTracker} from "meteor/react-meteor-data";

export function Login(){
    const user = useTracker(()=>Meteor.user());
    if (user){
        return <Navigate to="/welcome"/>
    }
    return (
        <div>
            <LoginForm/>
        </div>
    )
}