import scss from './Footer.module.scss';
import foto from '../../../assets/Group 22.svg';
import foto1 from '../../../assets/Group 33.svg';

const Footer = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
				<div className={scss.car}>
						<img src={foto} alt="photo" />
						<div>
							<p>Остались вопросы?</p>
							<button className={scss.btn}>✉️Почта</button>
						</div>
					</div>
					<p>С другой стороны рамки и место обучения кадров позволяет</p>
					<p>оценить значение направлений прогрессивного развития!</p>
					<div className={scss.car1}>
						<h4>Блогерам</h4>
						<h4>Рекламодателям</h4>
						<h4>Пользовательское соглашение</h4>
						<h4>Наши кейсы</h4>
						<h4>Помощь</h4>
					</div>
					<hr />
					<div className={scss.car2}>
						<p>© 2024 Elcho911. All rights reserved.</p>
						<img src={foto1} alt="photo" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
