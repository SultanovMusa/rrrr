import scss from './Layout.module.scss';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from '../pages/HomePage';

const Layout = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<HomePage />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
