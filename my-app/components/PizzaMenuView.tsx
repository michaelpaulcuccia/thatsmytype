import React, { useEffect, useState } from "react";
import {
  Form,
  Field,
  FormElement,
  FormRenderProps,
  FieldWrapper,
} from "@progress/kendo-react-form";

import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { PizzaMenuItem } from "../types";
import PizzaMenuCard from "./PizzaMenuCard";

const initialMenu: PizzaMenuItem[] = [
  { name: "Margherita", price: 14 },
  { name: "Meat Lovers", price: 21 },
  { name: "Veggie", price: 17 },
];

export default function PizzaMenuView() {
  const [pizzaMenu, setPizzaMenu] = useState<PizzaMenuItem[]>(initialMenu);
  const [formKey, setFormKey] = useState(1);

  const resetForm = () => {
    setFormKey(formKey + 1);
  };

  const handleSubmit = (values: { [name: string]: any }) => {
    const newPizza: PizzaMenuItem = {
      name: values.name as string,
      price: parseFloat(values.price as string), // Ensure price is a number
    };

    setPizzaMenu((prevMenu) => [...prevMenu, newPizza]);
    console.log("Updated Pizza Menu:", pizzaMenu);

    resetForm();
  };

  useEffect(() => {}, [pizzaMenu]);

  return (
    <>
      {pizzaMenu.map((item, i) => (
        <PizzaMenuCard key={i} item={item} />
      ))}
      <Form
        onSubmit={handleSubmit}
        key={formKey}
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
                    type="number" // Ensure the input is of type number
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
    </>
  );
}
