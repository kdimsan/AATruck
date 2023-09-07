import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Sidebar } from "./styles";

import { Logo } from "../logo";

import {  SlMenu, SlClose } from "react-icons/sl"


export function Header() {
    const navigate = useNavigate();

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
    
    const handleRoutes = (route: string) => { 
        setSideout(true);
        setTimeout(() => {
            handleSidebar();
            setSideout(false);
            navigate(route);
        }, 300);
    };
    
    const handleCreateWork = () =>  handleRoutes("/create-service");
    const handleGoHome = () =>  handleRoutes("/");
    const handleServicesSearch = () => handleRoutes("/services-search");
    
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
                        <a onClick={ handleGoHome }>Home</a>
                        <a onClick={ handleServicesSearch }>Find by vehicle plate</a>
                        <a onClick={ handleCreateWork }>Create work</a>
                    </div>
                </Sidebar>
            }
            <Logo />
        </Container>
    );
}