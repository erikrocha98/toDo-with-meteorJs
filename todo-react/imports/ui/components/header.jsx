import React from "react";
import styled from "styled-components";

const HeaderImage = styled.header`
    background-image:url("/assets/bg-desktop-light.jpg");
    backgorund-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:200px;

`

export const Header = () =>{
    return (
        <HeaderImage></HeaderImage>
    );
}