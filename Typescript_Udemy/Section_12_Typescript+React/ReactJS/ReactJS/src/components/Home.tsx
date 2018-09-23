import * as React from "react";

// Being specification, which properties should have the create object
interface HomeProps {
    name: string;
    age: number;
}
//interface, state
//<HomeProps, {}>
export class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                Hello there, {this.props.name}, you are {this.props.age}, right?
            </div>
        );
    }
}