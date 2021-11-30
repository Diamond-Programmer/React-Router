import styled from "styled-components";

export const NavbarWrapp = styled.nav`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    /* padding: 50px; */
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to right, #f12711, #f5af19);
    h2{
        margin: 30px;
     
    }
    .b{
        margin: 35px;
    }
    b{
        cursor: pointer;
        transition: all .3s ease-in-out;
        margin: auto 20px;
    }
    b:hover{
        color: red;
    }
    h2:hover{
        color: aqua;
    }

    a:hover{
        color: aqua;
    }
    a{
        color: black;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s ease-in-out;

    }
`

// export const 