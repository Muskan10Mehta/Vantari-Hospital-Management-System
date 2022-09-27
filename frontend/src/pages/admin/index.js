import React from "react";
import Sidebar from "../../components/sidebar";

export default function Admin(props) {
    return (
        <Sidebar admin= {props.isAdmin}/>
    );
}