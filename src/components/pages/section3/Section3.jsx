import scss from './Section3.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import foto1 from '../../../assets/Layer1.svg';
import foto2 from '../../../assets/Vector (6).svg';
import foto3 from '../../../assets/image14(Traced)(1).svg';
import foto4 from '../../../assets/image15(Traced).svg';
import foto5 from '../../../assets/image15(Traced)(1).svg';
import foto6 from '../../../assets/image16(Traced).svg';
import foto7 from '../../../assets/image 17 (Traced).svg';

const animation = { duration: 5000, easing: (t) => t };
const brands = [
	{ logo: foto1 },
	{ logo: foto2 },
	{ logo: foto3 },
	{ logo: foto4 },
	{ logo: foto5 },
	{ logo: foto6 },
	{ logo: foto7 }
];

const Section3 = () => {
	const [sliderRef] = useKeenSlider({
		breakpoints: {
			'(min-width: 1000px)': { slides: { perView: 4, spacing: 10 } }
		},
		slides: { perView: 5, spacing: 10 },
		loop: true,
		renderMode: 'performance',
		drag: false,
		created(s) {
			s.moveToIdx(5, true, animation);
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation);
		}
	});

	return (
		<section className={scss.Section3}>
			<div>
				<div className={scss.content}>
					<div ref={sliderRef} className={scss.cards}>
						{brands.map((item, index) => (
							<div key={index} className="keen-slider__slide">
								<img className={scss.icon} src={item.logo} alt="brand" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3;
