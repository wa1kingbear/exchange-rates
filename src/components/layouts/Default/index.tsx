import { Outlet } from 'react-router';

import s from './Default.module.scss';

const DefaultLayout = () => {
    return (
        <div className={s.ctx}>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
