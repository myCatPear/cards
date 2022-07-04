import React from 'react';
import {NavLink} from "react-router-dom";
import { ROUTES } from '../routes/Pages';
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <>
            <nav className={style.nav}>
                <ul className={style.menu} >
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.HOME}>Home</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.REGISTER}>Register</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.PROFILE}>Profile</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.PAGE_NOT_FOUND}>404</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.RECOVERY_PASSWORD}>Recovery password</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.NEW_PASSWORD}>New password</NavLink>
                    </li>
                    <li className={style.menu__item}>
                        <NavLink to={ROUTES.TEST}>Test</NavLink>
                    </li>
                </ul>
            </nav>

        </>

    );
};