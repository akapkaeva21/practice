import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import {useState, useEffect} from "react";
import  {Container} from './Container'
import {useState} from "react";

const HeaderE1 = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`;
const Wrapper  =styled.div``;
const Title = styled.a.attrs({
    href:'/',
})``;
const ModeSwitcher = styled.div``;



export const Header = ()=>{
    const [theme, setTheme ] = useState ('light');

    return(
        <HeaderE1>
            <Container>
                <Wrapper>
                    <Title>My work</Title>
                    <ModeSwitcher>
                        <IoMoon /> Light theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderE1>
    );}










