import { SelectOption } from "./select"

export interface IFields {
  label: string
  name: string
  type: string
  placeholder: string
  options?: SelectOption[]
}