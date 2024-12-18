import s from './Title.module.scss';

type Props = {
    type?: 'span' | 'h1' | 'h2' | 'h3';
    children: React.ReactNode;
};

const Title = ({ type = 'span', children }: Props) => {
    const Tag = type;
    return <Tag className={s.ctx}>{children}</Tag>;
};

export default Title;
