import * as React from "react";
import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { PizzaMenu } from "../constants";
import { PizzaMenuItem } from "../types";

const NewPizzaForm = () => {
  const handleSubmit = (dataItem: { name: string; price: number }) => {
    // Convert price to a number and push the new item to the PizzaMenu array
    const newPizza: PizzaMenuItem = {
      name: dataItem.name,
      price: parseFloat(dataItem.price.toString()), // Ensure price is a number
    };

    PizzaMenu.push(newPizza);
    console.log("Updated Pizza Menu:", PizzaMenu); // For debugging purposes
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps: FormRenderProps) => (
        <FormElement style={{ maxWidth: 650 }}>
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend>
            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"name"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Pizza Name"}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"price"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Price"}
                />
              </div>
            </FieldWrapper>
          </fieldset>
          <div className="k-form-buttons">
            <Button disabled={!formRenderProps.allowSubmit}>Submit</Button>
          </div>
        </FormElement>
      )}
    />
  );
};
export default NewPizzaForm;
