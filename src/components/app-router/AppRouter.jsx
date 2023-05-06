import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesArr } from '../../routes';


const AppRouter = () => {
    return (
        <div className='back'>
            <Routes>
            {RoutesArr.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
            )}
        </Routes>
        </div>
    );
};

export default AppRouter;