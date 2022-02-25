import { Button } from '@components/button/button.component'
import React from 'react'
import { Button as RNButton, StatusBar } from 'react-native'
import * as S from './Home.styles'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '@navigation/RootStackParams'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export interface HomeProps {
  testId?: string
}

export const Home = ({ testId = 'component-home-id', ...props }: HomeProps) => {
  const navigation = useNavigation<homeScreenProp>()

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
        <RNButton
          title="teste"
          onPress={() => {
            navigation.navigate('List')
          }}
        />
      </S.Container>
    </S.Wrapper>
  )
}
