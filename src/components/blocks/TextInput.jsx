import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Label from "./Label";

class TextInput extends Component {
    render() {
        const { label, placeholder, maxLength, value, name } = this.props;

        return (
            <div className="text-input-block">
                <Label label={label} />

                <InputGroup>
                    <FormControl
                        name={name}
                        value={value}
                        placeholder={placeholder ?? label}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        maxLength={maxLength}
                        onChange={this.onChange}
                    />
                </InputGroup>
            </div>
        );
    }
    onChange = ({ target: { name, value } }) => {
        const { onFieldChange } = this.props;
        onFieldChange(name, value);
    };
}

export default TextInput;
