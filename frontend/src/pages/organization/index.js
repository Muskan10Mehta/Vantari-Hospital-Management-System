import React from "react";
import Sidebar from "../../components/sidebar";

export default function Organization (props) {
    return (
        <Sidebar organization={props.isOrganization}/>
    );
}