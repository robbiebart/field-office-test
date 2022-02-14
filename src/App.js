import { useState, useEffect } from "react";

import {
	validateName,
	validateEmail,
	validatePhone,
	validateMessage,
} from "./lib/util";

import "./App.scss";

function App() {
	const [step, setStep] = useState(1);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);

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

	useEffect(() => {
		setError(false);
	}, [step]);

	return (
		<div>
			<header className="header">
				<img
					src="/assets/PrimaryLogo.png"
					alt="a geometric mountain shape"
				/>
			</header>
			<main>
				<section className="main-grid instructions">
					<div className="margin">
						{step === 1 ? null : (
							<button
								className="margin__arrow-left"
								onClick={() => setStep(step - 1)}
								disabled={step <= 1}
							>
								<img
									src="/assets/ArrowLeft.png"
									alt="left arrow button for navigation"
								/>
							</button>
						)}
					</div>
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
											className={`form__wrapper__input ${
												error ? "error" : ""
											}`}
											placeholder="Name"
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
										<div className="form__wrapper__error-field">
											<p>
												{error
													? "This field cannot be empty"
													: null}
											</p>
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
											className={`form__wrapper__input ${
												error ? "error" : ""
											}`}
											placeholder="Email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										<div className="form__wrapper__error-field">
											<p>
												{error
													? "Invalid email format"
													: null}
											</p>
										</div>
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
											className={`form__wrapper__input ${
												error ? "error" : ""
											}`}
											placeholder="Phone"
											value={phone}
											onChange={(e) =>
												setPhone(e.target.value)
											}
										/>
										<div className="form__wrapper__error-field">
											<p>
												{error
													? "This field cannot be empty"
													: null}
											</p>
										</div>
									</div>
								</div>
							) : step === 4 || step === 5 ? (
								<div>
									<h4 className="form__instructions">
										And finally, what would you like to
										discuss with us?
									</h4>
									<div className="form__wrapper">
										<div className="form__wrapper__counter">
											{Math.min(step, 4)}/4
										</div>
										<input
											className={`form__wrapper__input ${
												error ? "error" : ""
											}`}
											placeholder="message"
											value={message}
											onChange={(e) =>
												setMessage(e.target.value)
											}
										/>
										<div className="form__wrapper__error-field">
											<p>
												{error
													? "This field cannot be empty"
													: null}
											</p>
										</div>
									</div>
								</div>
							) : null}
						</div>
						(
						<button
							className={`submit${
								validateInput() ? " valid" : ""
							} ${step === 5 ? " success" : ""}`}
							type={step === 4 ? "submit" : "button"}
							disabled={!validateInput()}
							onClick={() => nextButton()}
						>
							{step === 4
								? "Submit"
								: step === 5
								? "Inquiry Sent, Thank you"
								: "Next"}
						</button>
						)
					</form>
					<div className="margin">
						<button
							className="margin__arrow-right"
							onClick={() =>
								validateInput()
									? setStep(step + 1)
									: setError(true)
							}
							disabled={step >= 4}
						>
							<img
								src="/assets/ArrowRight.png"
								alt="right arrow button for navigation"
							/>
						</button>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
