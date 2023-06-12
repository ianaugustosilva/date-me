import "./style.css";

import React, { useState } from "react";

function App() {
	const [answer, setAnswer] = useState<string>("");

	const handleYesClick = (): void => {
		setAnswer("te amo sua linda <3");
	};

	const handleNoHover = (): void => {
		const button = document.querySelector<HTMLButtonElement>("#no-button");

		if (button) {
			const buttonWidth = button.offsetWidth;
			const buttonHeight = button.offsetHeight;
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
			const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
			button.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
		}
	};

	return (
		<div className='container'>
			<h1>Quer namorar comigo?</h1>
			<button className='buttonYes' onClick={handleYesClick}>
				SIM
			</button>
			<button className='buttonNo' id='no-button' onMouseOver={handleNoHover}>
				NÃO
			</button>
			{answer && <p>Você respondeu: {answer}</p>}
		</div>
	);
}

export default App;
