import scss from './Section2.module.scss';
import foto from '../../../assets/Frame25.svg';
const Section2 = () => {
	return (
		<section className={scss.section}>
			<div className="container">
				<div className={scss.content}>
					<img className={scss.img} src={foto} alt="logo" />
				</div>
			</div>
		</section>
	);
};

export default Section2;
