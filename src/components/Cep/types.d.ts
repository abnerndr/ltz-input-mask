import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";

export type InputZipCodeProps = {
    id?: string;
    name?: string;
    value?: string | number | null;
    defaultValue?: string | number | null;
    placeholder?: string;
    maxlength?: string | number;
    minLength?:  string | number;
    onChange?: T;
    onBlur?: T;

    errors?: string;
    register?: UseFormRegister<T>
}