import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import origStore from './store';

const TestProvider = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
);

export function testRender(ui, { store, ...otherOpts }) {
  return render(
    <TestProvider store={store}>
      <Router>{ui}</Router>
    </TestProvider>,
    otherOpts
  );
}

export function makeTestStore() {
  const store = origStore;
  //const origDispatch = store.dispatch;
  //store.dispatch = jest.fn(origDispatch);
  return store;
}

export function DisplayState() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <h2>Display State</h2>
      {userInfo && (
        <>
          <h1>{userInfo.username}</h1>
          <h1>{userInfo.email}</h1>
        </>
      )}
    </div>
  );
}
