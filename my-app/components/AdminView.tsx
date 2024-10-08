import React, { useEffect, useState } from "react";
import { usePizzaMenu } from "../context/MenuContext";
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

export default function AdminView() {
  const { pizzaMenu, addPizza } = usePizzaMenu();
  const [formKey, setFormKey] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);

  const resetForm = () => {
    setFormKey(formKey + 1);
  };

  const handleSubmit = (values: { [name: string]: any }) => {
    const newPizza: PizzaMenuItem = {
      name: values.name as string,
      price: parseFloat(values.price as string), // Ensure price is a number
    };

    addPizza(newPizza);
    resetForm();
  };

  const handleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {}, [pizzaMenu]);

  return (
    <>
      <h2>Admin View</h2>
      <br />
      <button onClick={handleAdmin}>
        {!isAdmin ? "click if admin" : "close"}
      </button>
      {isAdmin && (
        <>
          {pizzaMenu.map((item, i) => (
            <PizzaMenuCard key={i} item={item} />
          ))}
          <br />
          <br />
          <h2>Add a new pizza</h2>
          <Form
            onSubmit={handleSubmit}
            key={formKey}
            render={(formRenderProps: FormRenderProps) => (
              <FormElement style={{ maxWidth: 650 }}>
                <fieldset className={"k-form-fieldset"}>
                  <FieldWrapper>
                    <div>
                      <Field
                        name={"name"}
                        component={Input}
                        label={"Pizza Name"}
                      />
                    </div>
                  </FieldWrapper>
                  <FieldWrapper>
                    <div>
                      <Field
                        name={"price"}
                        component={Input}
                        label={"Price"}
                        type="number"
                      />
                    </div>
                  </FieldWrapper>
                </fieldset>
                <br />
                <div>
                  <Button disabled={!formRenderProps.allowSubmit}>
                    Submit
                  </Button>
                </div>
              </FormElement>
            )}
          />
        </>
      )}
    </>
  );
}
