import { useState } from 'react';

import { Container, Sidebar } from "./styles";

import { Logo } from "../logo";

import {  SlMenu, SlClose } from "react-icons/sl"



export function Header() {

    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    };
    
    return (
        <Container>
            <button className="icon" onClick={ handleSidebar }> <SlMenu /> </button>
            {sidebar &&  
                <Sidebar>
                    <div className='sidebar-header'>
                        <button className="icon" onClick={ handleSidebar }> <SlClose  /> </button>
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