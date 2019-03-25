import * as React from 'react'
import { MemoryRouter as Router, Route } from 'react-router-dom'
import * as renderer from 'react-test-renderer'
import Error from '../index'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Route exact={true} component={Error} />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
