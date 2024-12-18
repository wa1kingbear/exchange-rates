import { BrowserRouter, Route, Routes } from 'react-router';

import DefaultLayout from '@/components/layouts/Default';
import Home from '@/components/pages/Home';

const BaseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />} path="/">
                    <Route element={<Home />} index />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default BaseRouter;
