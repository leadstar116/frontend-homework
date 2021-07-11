import { shallow } from 'enzyme'
import CompanyLink from './CompanyLink'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('<CompanyLink />', () => {
  let store = mockStore({
    selectedCompanyId: 1,
  });
  store.dispatch = jest.fn();

  it('renders link', () => {
    expect(shallow(
      <Provider store={store}>
        <CompanyLink id={1} name="Dummy company" />
      </Provider>)
    ).toMatchSnapshot()
  })
})
