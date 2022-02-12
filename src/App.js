import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	function incrementStep() {
		if (currentStep < 4) {
			setCurrentStep(currentStep + 1);
		}
	}

	function decrementStep() {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	}

	return (
		<div>
			<header>the logo goes here</header>
			<main>
				<nav>
					<button
						onClick={() => {
							decrementStep();
							console.log("yay!", currentStep);
						}}
					>
						backward
					</button>
					<button
						onClick={() => {
							incrementStep();
							console.log("woo!", currentStep);
						}}
					>
						forward
					</button>
				</nav>
				<section className="instructions">
					<div>
						<h4>Contact</h4>
						<p>
							{currentStep === 1
								? "Great, can we get your name? (No spam we promise)"
								: currentStep === 2
								? "Step 2"
								: currentStep === 3
								? "Step 3"
								: currentStep === 4
								? "Step 4"
								: ""}
						</p>
					</div>
					<input
						placeholder={
							currentStep === 1
								? "Fullname*"
								: currentStep === 2
								? "Email"
								: currentStep === 3
								? "Phone"
								: currentStep === 4
								? "Message"
								: ""
						}
					></input>
				</section>

				<button>Submit</button>
			</main>
		</div>
	);
}

export default App;
