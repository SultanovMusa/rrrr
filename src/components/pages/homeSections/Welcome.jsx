import scss from './Welcome.module.scss';
import logo from '../../../assets/Rectangle5.svg';
const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.texts}>
						<p>Рекламное агенство ADVUP</p>
						<p className={scss.tp}>Новый поток клиентов</p>
						<p className={scss.tp2}> Вашему продукту</p>
					</div>
					<div className={scss.photos}>
						<img className={scss.img} src={logo} alt="logo" />
						<button>Приступим</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
