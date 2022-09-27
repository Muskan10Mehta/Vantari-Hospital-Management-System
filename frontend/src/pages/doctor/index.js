import React from "react";
import Sidebar from "../../components/sidebar";

export default function Doctor(props) {
    return (
        <Sidebar doctor={props.isDoctor}/>
    );
}