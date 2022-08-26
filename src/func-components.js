import React from "react";

export function Header() { //Regular Functon
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        textDecoration: 'none'
    }
    return (
        <div style={{backgroundColor:'#ccc'}}>
            <a href="" style={aStyle}>Home</a> |&nbsp;
            <a href="" style={aStyle}>React</a> |&nbsp;
            <a href="" style={aStyle}>React Native</a>
        </div>
    )
}

export function Content() { //Regular Function
    return (
        <div style={{textAlign:'center'}}>
            <h2>Hello <br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    )
}

export const Footer = () => { //Arrow Function สร้างตัวแปรขึ้นมา
    return (
        <div style={{textAlign:'center'}}>
            &copy;{new Date().getFullYear()} All rights reserved
        </div>
    )
}