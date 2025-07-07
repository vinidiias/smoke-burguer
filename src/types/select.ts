import { Control } from "react-hook-form"

export interface SelectOption {
    label: string
    value: string
}

export type SelectProps = {
    className?: string,
    name: string
    placeholder?: string
    label?: string
    options?: SelectOption[]
}

export type ControlledSelectProp = {
  control: Control;
};