import { useState } from 'react';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import scss from './Section6.module.scss';
import foto from '../../../assets/GroupMufa 31.svg';
import foto1 from '../../../assets/Group 30 (1).svg';

const Section6 = () => {
	const url = import.meta.env.VITE_BEKENDT_URL;
	const url2 = import.meta.env.VITE_BEKENDT_URL2;

	const [inputValues, setInputValues] = useState({
		value1: '',
		value2: '',
		value3: '',
		value4: ''
	});

	const [isAdvertiser, setIsAdvertiser] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValues({
			...inputValues,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		const newObj = {
			name: inputValues
		};
		e.preventDefault();
		try {
			const response = (
				await axios.post(isAdvertiser ? url2 : url, inputValues, newObj)
			).data;

			console.log('Response:', response);
			toast.success(':unicorn_face: Wow so easy!', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
				transition: Bounce
			});
			setInputValues({
				value1: '',
				value2: '',
				value3: '',
				value4: ''
			});
		} catch (error) {
			console.error('Error posting user:', error);
			alert('Error');
		}
	};

	return (
		<>
			<ToastContainer />
			<section className={scss.section6}>
				<div className="container">
					<div className={scss.divphotos}>
						<div className={scss.photos1}>
							<img className={scss.logo1} src={foto} alt="logo2" />
							<img className={scss.logo2} src={foto1} alt="logo" />
						</div>
					</div>
					<div className={scss.content}>
						<div className={scss.div1}>
							<h2>Оставить заявку</h2>
							<p>Рекламные агентства имеют опыт работы в разных отраслях и</p>
							<p>знают, как эффективно привлекать целевую аудиторию.</p>
						</div>
						<div className={scss.div2}>
							<p>Кто по жизни?</p>
							<div className={scss.texts}>
								<button
									onClick={() => setIsAdvertiser(false)}
									className={`${scss.button2} ${!isAdvertiser && scss.active}`}
								>
									Блогер
								</button>
								<button
									onClick={() => setIsAdvertiser(true)}
									className={`${scss.button2} ${isAdvertiser && scss.active}`}
								>
									Рекламодатель
								</button>
							</div>
						</div>
						<div className={scss.div3}>
							<form onSubmit={handleSubmit}>
								<div className={scss.inputslabel}>
									<label>Ваше имя</label>
									<input
										type="text"
										name="value1"
										placeholder="Введите ваше имя"
										value={inputValues.value1}
										onChange={handleChange}
									/>
								</div>
								<div className={scss.inputslabel}>
									<label>Почта</label>
									<input
										type="text"
										name="value2"
										placeholder="Введите электронную почту"
										value={inputValues.value2}
										onChange={handleChange}
									/>
								</div>
								<div className={scss.inputslabel}>
									<label>Телефон</label>
									<input
										type="number"
										name="value3"
										placeholder="Введите ваш номер телефона"
										value={inputValues.value3}
										onChange={handleChange}
									/>
								</div>
								<div className={scss.inputslabel2}>
									<label>Комментарий</label>
									<input
										type="text"
										name="value4"
										placeholder="Введите ваш номер телефона"
										value={inputValues.value4}
										onChange={handleChange}
									/>
								</div>
								<button
									className={scss.btn}
									type="submit"
									onClick={handleSubmit}
								>
									Отправить
								</button>
							</form>
							<div className={scss.pa}>
								<p>Нажав на кнопку, вы соглашаетесь на</p>
								<a href="#">обработку персональных данных</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Section6;
