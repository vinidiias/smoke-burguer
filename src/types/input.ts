import { Control } from "react-hook-form"

export type InputProps = {
    className?: string,
    type?: 'text' | 'password' | 'email' | 'tel' | 'number',
    name: string
    placeholder?: string
    label?: string
}

export type ControlledInputProp = {
  control: Control;
};