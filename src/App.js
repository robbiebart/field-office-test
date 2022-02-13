import { useState } from "react";

import {
	validateName,
	validateEmail,
	validatePhone,
	validateMessage,
} from "./lib/util";

import logo from "./logo.svg";
import "./App.scss";

function App() {
	const [step, setStep] = useState(1);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(name, email, phone, message);
		setEmail("");
		setName("");
		setPhone("");
		setMessage("");
		setStep(5);
	}

	function validateInput() {
		if (step === 1) {
			return validateName(name);
		} else if (step === 2) {
			return validateEmail(email);
		} else if (step === 3) {
			return validatePhone(phone);
		} else if (step === 4) {
			return validateMessage(message);
		}
	}

	function nextButton() {
		if (step !== 4) {
			setStep(step + 1);
		}
	}

	return (
		<div>
			<header className="header">
				<img src="/assets/PrimaryLogo.png" />
			</header>
			<main>
				<nav>
					<button
						onClick={() => setStep(step - 1)}
						disabled={step <= 1}
					>
						backward
					</button>
					<button
						onClick={() => setStep(step + 1)}
						disabled={step >= 4}
					>
						forward
					</button>
				</nav>
				<section className="main-grid instructions">
					<div className="margin"></div>
					<form className="form" onSubmit={handleSubmit}>
						<div>
							<p className="form__title">Contact</p>
							{step === 1 ? (
								<div>
									<h4 className="form__instructions">
										Great, can we get your name? (No spam we
										promise)
									</h4>
									<div className="form__wrapper">
										<div className="form__wrapper__counter">
											{step}/4
										</div>
										<input
											className="form__wrapper__input"
											placeholder="Name"
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
										<div className="form__wrapper__error-field">
											<p></p>
										</div>
									</div>
								</div>
							) : step === 2 ? (
								<div>
									<h4 className="form__instructions">
										We would also require your email
									</h4>
									<div className="form__wrapper">
										<div className="form__wrapper__counter">
											{step}/4
										</div>
										<input
											className="form__wrapper__input"
											placeholder="Email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
								</div>
							) : step === 3 ? (
								<div>
									<h4 className="form__instructions">
										and now your phone number
									</h4>
									<div className="form__wrapper">
										<div className="form__wrapper__counter">
											{step}/4
										</div>
										<input
											className="form__wrapper__input"
											placeholder="Phone"
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
										/>
									</div>
								</div>
							) : step === 4 ? (
								<div>
									<h4 className="form__instructions">
										And finally, what would you like to
										discuss with us?
									</h4>
									<div className="form__wrapper">
										<div className="form__wrapper__counter">
											{step}/4
										</div>
										<input
											className="form__wrapper__input"
											placeholder="message"
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}
										/>
									</div>
								</div>
							) : null}
						</div>
						{step === 5 ? (
							<div>Inquiry sent, Thank You </div>
						) : (
							<button
								className="submit"
								type={step === 4 ? "submit" : "button"}
								disabled={!validateInput()}
								onClick={() => nextButton()}
							>
								{step === 4 ? "Submit" : "Next"}
							</button>
						)}
					</form>
					<div className="margin"></div>
				</section>
			</main>
		</div>
	);
}

export default App;
