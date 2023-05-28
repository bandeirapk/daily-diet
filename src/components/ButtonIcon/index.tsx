import { TouchableOpacityProps } from 'react-native';

import {
  ButtonIconTypeStyleProps,
  Container,
  IconButton,
  Title,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: JSX.Element;
  type?: ButtonIconTypeStyleProps;
  color?: string;
};

export function ButtonIcon({
  title,
  icon,
  type = 'BACKGROUND',
  color = 'black',
  ...rest
}: Props) {
  return (
    <Container
      activeOpacity={0.7}
      type={type}
      {...rest}
    >
      {icon ? icon : <IconButton color={color} />}

      <Title type={type}>{title}</Title>
    </Container>
  );
}
