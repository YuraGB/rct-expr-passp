/**
 * The Layout component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import Auxx from "../Auxx/Auxx";
import HeaderComponent from "../../components/globalComponents/header/HeaderComponent/HeaderComponent";
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import classes from './Layout.module.css';

/**
 * Layout
 *
 * @param {*} props
 * @returns {JSX.Element}
 */
const Layout = (props) => {
    return (
        <Auxx>
            <HeaderComponent/>
            <StepperComponent/>
            <main className={classes.Main}>
                {props.children}
            </main>
            <footer>

            </footer>
        </Auxx>
    )
};

export default Layout;