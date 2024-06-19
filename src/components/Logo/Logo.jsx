import { Link } from 'react-router-dom';
import { scrollToTop } from 'helpers';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo}>
      <Link to="/" className={s.logoLink} onClick={scrollToTop}>
        Portofolio
      </Link>
    </div>
  );
};

export default Logo;