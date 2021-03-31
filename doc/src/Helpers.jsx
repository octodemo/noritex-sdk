import React, {useState} from 'react';
import styled from "styled-components";
import { Buttons, Button } from './Components/Button'
import { Modal, Notify, Dropdown } from './components/Elements'
import { Box, Title } from './components/Layout'

export const TestButton = () => {
    const [isActive, setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <Button primary onClick={() => toggle()}>Abrir modal</Button>
            <Modal className={isActive && 'is-active'}>
                <span></span>
                <button onClick={() => toggle()}></button>
                <div>
                <Box>
                    <Title as="h2" size="5">Título de modal</Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Buttons isRight>
                    <Button onClick={() => toggle()}>Cancelar</Button>
                    <Button onClick={() => toggle()} primary>Confirmar</Button>
                    </Buttons>
                </Box>
                </div>
            </Modal>	
        </>
    )
}

export const TestButton2 = () => {
    const [isActive, setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <Button primary onClick={() => toggle()}>Abrir modal</Button>
            <Modal className={isActive && 'is-active'}>
                <span></span>
                <button onClick={() => toggle()}></button>
                <div>
                    <img src="https://www.noritex.com/QZe57qNbxMYtNrWxM1_0010_Allure1.jpg" alt=""/>
                </div>
            </Modal>	
        </>
    )
}


export const NotifyDemo = () => {
    const Notify0 = styled(Notify)`
      bottom: 260px;
    `;
    const Notify1 = styled(Notify)`
      
    `;
    const Notify2 = styled(Notify)`
        bottom: 80px;
    `;
    const Notify3 = styled(Notify)`
      bottom: 140px;
    `;
    const Notify4 = styled(Notify)`
      bottom: 200px;
    `;
    return (
        <>
            <Notify0>Notificación Default</Notify0>
            <Notify3 info>Notificación info</Notify3>
            <Notify1 success>Notificación success</Notify1>
            <Notify2 alert>Notificación alert</Notify2>
            <Notify4 error>Notificación error</Notify4>
        </>
    )
}

export const DemoDropdown = () => {
    const [isActive, setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <Dropdown isActive={isActive}>
                <Button primary onClick={() => toggle()}>Toggle Dropdown</Button>
                <div>
                    <div>
                        <ul>
                            <li><a href="">Mi cuenta</a></li>
                            <li><a href="">Mis órdenes</a></li>
                            <li><a href="">Historial</a></li>
                            <li className="divisor"></li>
                            <li><a href="">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </Dropdown>		
        </>
    )
}

export const DemoDropdown2 = () => {
    const [isActive, setIsActive] = useState(false)
    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <Dropdown isHoverable>
                <Button primary onClick={() => toggle()}>Hover Dropdown</Button>
                <div>
                    <div>
                        <ul>
                            <li><a href="">Mi cuenta</a></li>
                            <li><a href="">Mis órdenes</a></li>
                            <li><a href="">Historial</a></li>
                            <li className="divisor"></li>
                            <li><a href="">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </Dropdown>		
        </>
    )
}