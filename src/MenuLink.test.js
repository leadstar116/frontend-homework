import { shallow } from 'enzyme'
import MenuLink from './MenuLink'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<MenuLink />', () => {
  let store = mockStore({
    selectedCompanyId: 1,
  });
  store.dispatch = jest.fn();

  it('renders link', () => {
    expect(shallow(
      <Provider store={store}>
        <MenuLink icon="phone" text="Call me" />
      </Provider>)
    ).toMatchSnapshot()
  })
})
