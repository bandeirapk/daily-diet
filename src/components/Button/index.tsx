import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"

import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"

import {
  Container,
  CustomizeButtonDefault,
  ContainerButtonIcon,
  TitleButton
} from "./styles"

type ButtonRenderProps = {
  children: ReactNode
}

type ButtonProps = TouchableOpacityProps & {
  title?: string
  icon?: keyof typeof ICONS
  isOutline?: boolean
}

const ICONS = {
  add: Plus,
  edit: PencilSimpleLine,
  delete: Trash
}

function Button({ children }: ButtonRenderProps) {
  return <Container>{children}</Container>
}

function ButtonDefault({ title, ...rest }: ButtonProps) {
  return (
    <CustomizeButtonDefault {...rest}>
      <TitleButton>{title}</TitleButton>
    </CustomizeButtonDefault>
  )
}

function ButtonIcon({ icon = "add", title, isOutline, ...rest }: ButtonProps) {
  const Icon = ICONS[icon]
  return (
    <ContainerButtonIcon
      outline={isOutline}
      {...rest}
    >
      <Icon
        size={18}
        color={icon === "delete" ? "#000" : "#fff"}
      />

      <TitleButton outline={isOutline}>{title}</TitleButton>
    </ContainerButtonIcon>
  )
}

Button.Default = ButtonDefault
Button.Icon = ButtonIcon

export { Button }
