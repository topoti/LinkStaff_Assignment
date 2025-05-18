import { useState } from "react";
import $ from "jquery";
import "./App.css";

function App() {
	const [firstNumber, setFirstNumber] = useState("");
	const [result, setResult] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");

	const handleFirstNumber = (e) => {
		setFirstNumber(e.target.value);
	};
	const handleSecondNumber = (e) => {
		setSecondNumber(e.target.value);
	};
    const handleOperation = (e) =>{
		setOperation(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setResult(data);
				console.log(data);
			},
		});
	};

	return (
		<div className="App">
			<form
				action="http://localhost:8000/php server/server.php"
				method="post"
				onSubmit={(event) => handleSubmit(event)}
			>
				<div>
				<h1>EMOJI CALCULATOR</h1> 
				</div>

				<div className="flex-container">
				<input
				className="firstNumber"
				type = "number"
				id = "firstNumber"
				name = "firstNumber"
				value = {firstNumber}
				placeholder="Enter the 1st Number"
				onChange = {(event) =>handleFirstNumber(event)}
				/>
				 
				<input
				className="secondNumber"
				type = "number"
				id = "secondNumber"
				name = "secondNumber"
				value = {secondNumber}
				placeholder="Enter the 2nd Number"
				onChange = {(event) => handleSecondNumber(event)}
				/>	
                
				<div className="operation">
			  <div><select
				name = "operation"
				id = "operation"
				className="selectOperation"
				onChange= {(event) => handleOperation(event)}
	            >
					<option value="addition">&#128125;</option>
					<option value="subtraction">&#128128;</option>
					<option value="multiplication">&#128123;</option>
					<option value="division">&#128561;</option>
					</select></div>

	                <button className="button-1" type="submit">Submit</button>
					</div>
				
			    </div>
			</form>
			<h2>{result}</h2>
		</div>
	);
}

export default App;

