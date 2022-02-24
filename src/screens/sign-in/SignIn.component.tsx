import { Button } from '@components/button/button.component'
import React from 'react'
import { StatusBar } from 'react-native'
import * as S from './SignIn.styles'

export interface SignInProps {
  testId?: string
}

export const SignIn = ({
  testId = 'component-SignIn-id',
  ...props
}: SignInProps) => {
  return (
    <S.Wrapper testID={testId} {...props}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <S.Heading>
          Github Explorer: {'\n'} Check and list your {'\n'}repositories
        </S.Heading>
        <S.SubHeading>
          Click on the button and filter your {'\n'} repositories by a tech
          stack
        </S.SubHeading>
        <Button />
      </S.Container>
    </S.Wrapper>
  )
}
