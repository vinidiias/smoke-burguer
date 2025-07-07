import { IFields } from "@/types/fields"
import { Control, FieldValues } from "react-hook-form"
import { ControlledInput } from "@/components/ui/input"
import { ControlledSelect } from "@/components/ui/select";

export const renderInputs = ({ label, name, placeholder, type, options }: IFields, control: Control<FieldValues, unknown, FieldValues>) => {
  switch (type) {
    case 'text': 
    return (
      <ControlledInput
      className="w-full"
        control={control}
        label={label}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );
    case 'select':
      return (
        <ControlledSelect className="w-full" control={control} name={name} options={options} label={label} placeholder={placeholder} />
      );
  }
}