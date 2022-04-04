import React from 'react'
import { SidebarContainer,Icon, CloseIcon, SidebarWrapper, 
        SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'>About</SidebarLink>
                <SidebarLink to='discover'>Discover</SidebarLink>
                <SidebarLink to='services'>services</SidebarLink>
                <SidebarLink to='signup'>sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar