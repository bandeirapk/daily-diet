import { ReactNode } from "react"
import { TextInputProps, View } from "react-native"

import {
  Container,
  Label,
  TextInput,
  InputMultiline,
  InputDateAndTime,
  ContainerCustomize
} from "./styles"

type InputProps = {
  children: ReactNode
}

type InputFieldProps = TextInputProps & {
  title?: string
}

function Input({ children }: InputProps) {
  return <Container>{children}</Container>
}

function InputField({ title, ...rest }: InputFieldProps) {
  return (
    <View>
      <Label>{title}</Label>
      <TextInput {...rest} />
    </View>
  )
}

function InputFieldMultiline({ title, ...rest }: InputFieldProps) {
  return (
    <View>
      <Label>{title}</Label>
      <InputMultiline
        textAlignVertical={"top"}
        multiline
        {...rest}
      />
    </View>
  )
}

function InputFieldDateAndTime({ title, ...rest }: InputFieldProps) {
  return (
    <View>
      <Label>{title}</Label>
      <InputDateAndTime {...rest} />
    </View>
  )
}

function InputContainerDateAndTime() {
  return (
    <ContainerCustomize>
      <InputFieldDateAndTime title="Data" />

      <InputFieldDateAndTime title="Hora" />
    </ContainerCustomize>
  )
}

Input.Field = InputField
Input.FieldMultiline = InputFieldMultiline
Input.DateAndTime = InputContainerDateAndTime

export { Input }
