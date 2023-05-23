import React from 'react';

import LogoSvg from '@assets/svg/logoDailyDiet.svg';

import { Container, ProfilePhoto } from './styles';

export function Header() {
  return (
    <Container>
      <LogoSvg />

      <ProfilePhoto source={{ uri: 'https://www.github.com/bandeirapk.png' }} />
    </Container>
  );
}
