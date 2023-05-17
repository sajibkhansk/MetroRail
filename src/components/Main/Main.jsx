import React from 'react';
import Header from '../Header/Header';
import Lower from '../Lower/Lower';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Lower></Lower>
        </div>
    );
};

export default Main;