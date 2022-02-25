import { waitFor } from '@testing-library/react-native'
import React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Home } from './Home.component'

describe('<Home />', () => {
  const testId = 'component-home-id'

  it('should render the Home component', async () => {
    const { queryByTestId } = renderWithTheme(<Home testId={testId} />)
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
  })
})
