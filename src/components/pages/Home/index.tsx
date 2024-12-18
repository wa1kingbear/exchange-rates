import s from './Home.module.scss';

import Title from '@/components/shared/Title';

const Home = () => {
    return (
        <div className={s.ctx}>
            <div className={s.title}>
                <Title type="h1">Курс валют на сегодня</Title>
            </div>
        </div>
    );
};

export default Home;
