import { useState } from "react";

import {
	validateName,
	validateEmail,
	validatePhone,
	validateMessage,
} from "./lib/util";

import logo from "./logo.svg";
import "./App.css";

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
			<header>the logo goes here</header>
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
				<section className="instructions">
					<form onSubmit={handleSubmit}>
						<div>
							<h4>Contact</h4>
							{step === 1 ? (
								<div>
									<p>Great, can we get your name?</p>
									<input
										placeholder="Name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
							) : step === 2 ? (
								<div>
									<p>We would also require your email</p>
									<input
										placeholder="Email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
							) : step === 3 ? (
								<div>
									<p>and now your phone number</p>
									<input
										placeholder="Phone"
										value={phone}
										onChange={(e) =>
											setPhone(e.target.value)
										}
									/>
								</div>
							) : step === 4 ? (
								<div>
									<p>
										And finally, what would you like to
										discuss with us?
									</p>
									<input
										placeholder="message"
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
									/>
								</div>
							) : null}
						</div>
						{step === 5 ? (
							<div>Inquiry sent, Thank You </div>
						) : (
							<button
								type={step === 4 ? "submit" : "button"}
								disabled={!validateInput()}
								onClick={() => nextButton()}
							>
								{step === 4 ? "Submit" : "Next"}
							</button>
						)}
					</form>
				</section>
			</main>
		</div>
	);
}

export default App;
