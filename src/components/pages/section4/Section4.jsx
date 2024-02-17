import scss from './Section4.module.scss';

import foto1 from '../../../assets/Rectangle14.svg';
import foto6 from '../../../assets/Rectangle13(7).svg';
import foto2 from '../../../assets/Rectangle13(6).svg';
import foto3 from '../../../assets/Rectangle13(1).svg';
import foto4 from '../../../assets/Rectangle13(2).svg';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Section4 = () => {
	const [sliderRef] = useKeenSlider({
		loop: true,
		mode: 'free',
		slides: {
			perView: 3,
			spacing: 15
		}
	});

	return (
		<section className={scss.section4}>
			<div className="container">
				<div className={scss.content}>
					<h1 className={scss.h1}>Наши кейсы</h1>
					<div className={scss.mufa}>
						<div className={scss.card}>
							<img className={scss.img} src={foto1} alt="alt" />
						</div>

						<div className={scss.cars}>
							<div className={scss.mitle}>
								<div className={scss.imgs}>
									<h1>🔥</h1>
								</div>
								<button className={scss.btn1}>Игры</button>
								<button className={scss.btn2}>Коллаборация</button>
							</div>
							<div className={scss.cars2}>
								<p>Игровой проект</p>
								<p>War Thunder X ДУЛО</p>
							</div>
							<div className={scss.cars3}>
								<p>
									Разнообразный и богатый опыт консультации с профессионалами из
									IT играет важную роль в формировании всесторонне
									сбалансированных нововведений. Значимость этих проблем
									настолько очевидна, что новая модель организационной.
								</p>
							</div>
							<div className={scss.cars4}>
								<button>Подробнее</button>
							</div>
						</div>
					</div>
					{/* section 5 */}

					<div className={scss.content2}>
						<div className={scss.car1}>
							<div className={scss.ses}></div>
							<div className={scss.ph1}>
								<p>Общее количество просмотров</p>
								<h3>20.000+</h3>
							</div>
						</div>

						<div className={scss.car2}>
							<div className={scss.ses}></div>
							<div className={scss.ph2}>
								<p>Лайков</p>
								<h3>20.000+</h3>
							</div>
						</div>

						<div className={scss.car3}>
							<div className={scss.ses}></div>
							<div className={scss.ph3}>
								<p>Охваты</p>
								<h3>20.000+</h3>
							</div>
						</div>
					</div>
					{/* section 6 */}

					<div className={scss.content3}>
						<div ref={sliderRef} className="keen-slider">
							<div className="keen-slider__slide number-slide1">
								{/* sleder 1 */}
								<div className={scss.munar}>
									<div className={scss.hov}>
										<h3>Игровой проект War Thunder</h3>
										<p>Специальный проект с Моргенштерном</p>
									</div>
									<img className={scss} src={foto6} alt="photo" />
								</div>
							</div>

							<div className="keen-slider__slide number-slide2">
								{/* sleder 2 */}
								<div className={scss.munar}>
									<div className={scss.hov}>
										<h3>Казино Stake x Drake </h3>
										<p>Азарт, Рэп, Реклама</p>
									</div>
									<img className={scss} src={foto2} alt="photo" />
								</div>
							</div>

							<div className="keen-slider__slide number-slide3">
								{/* sleder 3 */}
								<div className={scss.munar}>
									<div className={scss.hov}>
										<h3>Игровой проект Free Fire</h3>
										<p>Игровой проект Free Fire</p>
									</div>
									<img className={scss} src={foto3} alt="photo" />
								</div>
							</div>

							<div className="keen-slider__slide number-slide4">
								{/* sleder 4 */}
								<div className={scss.munar}>
									<div className={scss.hov}>
										<h3>VK Music</h3>
										<p>Музыкальный сервис соц. сети ВКонтакте</p>
									</div>
									<img className={scss} src={foto4} alt="photo" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4;
