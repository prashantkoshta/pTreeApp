import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { Field, reduxForm } from "redux-form";
import Main from "../../stories/screens/Main";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}
class SearchForm extends React.Component<Props, State> {
	textInput: any;

	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "search" ? "person" : "unlock"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === "search" ? "Enter Zipcode" : ""}
					secureTextEntry={input.name === "search" ? true : false}
					{...input}
				/>
			</Item>
		);
	}

	search() {
		if (this.props.valid) {
            // Setch Records
			// this.props.navigation.navigate("Drawer");
		} else {
			Toast.show({
				text: "Enter Valid Zipcode!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	render() {
		const form = (
			// <Form>
			// 	<Field name="email" component={this.renderInput} validate={[email, required]} />
			// 	<Field
			// 		name="password"
			// 		component={this.renderInput}
			// 		validate={[alphaNumeric, minLength8, maxLength15, required]}
			// 	/>
			// </Form>

			<Form>
				<Field name="search" component={this.renderInput}/>
			</Form>
		);
		return <AAb searchForm={form} onSearch={() => this.search()} />;
	}
}
const SearchContainer = reduxForm({
	form: "search",
})(SearchForm);
export default SearchContainer;
