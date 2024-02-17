import scss from './Section5.module.scss';
import foto from '../../../assets/FrameMufa16.svg';
import foto1 from '../../../assets/Frame 17.svg';
import foto2 from '../../../assets/Frame 18.svg';
import foto3 from '../../../assets/Frame 19.svg';
const Section5 = () => {
	return (
		<section className={scss.section5}>
			<div className="container">
				<div className={scss.content}>
					<h1>Наши преимущества</h1>
					<div className={scss.cards}>
						<img src={foto} alt="photo" />
						<img src={foto1} alt="photo" />
					</div>
					<div className={scss.cards2}>
						<img src={foto2} alt="photo" />
						<img src={foto3} alt="photo" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section5;
