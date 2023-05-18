import styles from './Navbar.module.scss';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import Busca from '../Busca';

const iconeProps = {
  color: 'white',
  size: 24,
};

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === '/',
            })}
          >
            Página Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {pathname === '/carrinho' ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}
