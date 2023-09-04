import { useState } from 'react';

import { Container, Sidebar } from "./styles";

import { Logo } from "../logo";

import {  SlMenu, SlClose } from "react-icons/sl"


export function Header() {

    const [sidebar, setSidebar] = useState(false);
    const [sideout, setSideout] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const handleSideout = () => {
        setSideout(true);
        setTimeout(() => {
            handleSidebar();
            setSideout(false);
        }, 400)
    };
    
    return (
        <Container>
            <button className="icon" onClick={ handleSidebar }> <SlMenu /> </button>
            {sidebar &&  
                <Sidebar 
                    className={ sideout ? "side-out" : "" }
                >
                    <div className='sidebar-header'>
                        <button className="icon" onClick={ handleSideout }> <SlClose  /> </button>
                        <Logo />
                    </div>
                    <div className='sidebar-content'>
                        <li>Home</li>
                        <li>Check services</li>
                        <li>List services</li>
                    </div>
                </Sidebar>
            }
            <Logo />
        </Container>
    );
}