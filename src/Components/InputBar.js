import React from "react"
import { Field, reduxForm } from "redux-form"

class InputBar extends React.Component {
	submittingInput = (vals) => {
		console.log(vals)
	}
	renderError = (meta) => {
		if (meta.touched) {
			return (
				<div
					style={{
						fontSize: "0.8vw",
						width: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontFamily: "sans-serif",
						transform: "translateX(50%)",
					}}
				>
					{meta.error}
				</div>
			)
		} else {
			return (
				<div
					style={{
						fontSize: "0.8vw",
						width: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transform: "translateX(50%)",
					}}
				></div>
			)
		}
	}
	renderInput = (formProps) => {
		console.log(formProps)

		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "300px",
					justifyContent: "space-evenly",
				}}
			>
				<input
					autoComplete="off"
					style={{ width: "50%", transform: "translateX(50%)" }}
					{...formProps.input}
					placeholder={formProps.input.name}
				/>

				{this.renderError(formProps.meta)}
			</div>
		)
	}
	render() {
		return (
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onSubmit={this.props.handleSubmit(this.submittingInput)}
			>
				<Field component={this.renderInput} name="Name" />
				<Field component={this.renderInput} name="Sex" />
				<button>Submit</button>
			</form>
		)
	}
}
var validate = (submittedResults) => {
	var errors = {}
	if (!submittedResults.Name) {
		errors.Name = "Please enter a name"
	}
	if (!submittedResults.Sex) {
		errors.Sex = "Please enter your gender"
	}
	console.log(errors)

	return errors
}
export default reduxForm({
	form: "Only Form",
	validate: validate,
})(InputBar)
