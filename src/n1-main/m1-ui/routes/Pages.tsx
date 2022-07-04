import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { Login } from '../common/components/Login';
import {Register} from "../common/components/Register";
import {Profile} from "../common/components/Profile";
import {PageNotFound} from "../common/components/PageNotFound";
import {RecoveryPassword} from "../common/components/RecoveryPassword";
import {NewPassword} from "../common/components/New password";
import {Test} from "../common/components/Test";
import Home from "../common/components/Home";

export enum ROUTES  {
    HOME = "/",
    LOGIN = "/login",
    REGISTER = "/register",
    PROFILE = "/profile",
    PAGE_NOT_FOUND = "/404",
    RECOVERY_PASSWORD = "/recoveryPass",
    NEW_PASSWORD = "/newPass",
    TEST = "/test"
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                    <Route path={ROUTES.HOME} element={<Home/>}/>
                    <Route path={ROUTES.LOGIN} element={<Login/>}/>
                    <Route path={ROUTES.REGISTER} element={<Register/>}/>
                    <Route path={ROUTES.PROFILE} element={<Profile/>}/>
                    <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound/>}/>
                    <Route path={ROUTES.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                    <Route path={ROUTES.NEW_PASSWORD} element={<NewPassword/>}/>
                    <Route path={ROUTES.TEST} element={<Test/>}/>
            </Routes>
        </div>
    );
};