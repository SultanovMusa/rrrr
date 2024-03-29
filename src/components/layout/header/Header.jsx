import scss from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import { useState } from 'react';

const Header = () => {
	const [isBurgerMenu, setIsBurgerMenu] = useState(false);

	console.log(isBurgerMenu);

	const links = [
		{
			name: 'Блогерам',
			href: '/'
		},
		{
			name: 'Рекламодателям',
			href: '/'
		},
		{
			name: 'Кейсы',
			href: '/'
		},
		{
			name: 'Контакты',
			href: '/'
		}
	];

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<div className={scss.logo}>
							<img src={logo} alt="logo" />
						</div>
						<nav className={scss.nav}>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<a href={item.href}>{item.name}</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className={scss.right}>
						<button>Оставить Заявку</button>

						{/* //! burger button */}
						<div className={scss.burger__button}>
							<label>
								<input
									type="checkbox"
									checked={isBurgerMenu}
									onChange={() => setIsBurgerMenu(!isBurgerMenu)}
								/>
								<span></span>
								<span></span>
								<span></span>
							</label>
						</div>

						{/* //! burger menu */}
						<div
							className={
								isBurgerMenu
									? `${scss.burger_menu} ${scss.active}`
									: `${scss.burger_menu}`
							}
						>
							<nav>
								{links.map((item, index) => (
									<li key={index}>
										<a href={item.href}>{item.name}</a>
									</li>
								))}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
