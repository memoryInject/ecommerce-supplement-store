import { screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { testRender, makeTestStore } from '../../reduxTestUtils';
import ProductScreen from '../ProductScreen';

import axios from 'axios';

jest.mock('axios');

let store;

const history = { push: function () {} };
const match = { params: { id: 5 } };

beforeEach(async () => {
  await axios.get.mockResolvedValueOnce({
    data: {
      _id: '1',
      name: 'Supplement A',
      image: '/images/productA.png',
      description: 'This is Product A',
      brand: 'PRODUCT A',
      category: 'protein',
      price: 29.99,
      size: '2 lbs.',
      flavour: 'Double Rich Chocolate',
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
  });

  store = makeTestStore();
  testRender(
    <Router>
      <ProductScreen history={history} match={match} />
    </Router>,
    {
      store,
    }
  );
});

it('Get a product by params id from backend', async () => {
  await waitFor(() => screen.getByText('Supplement A'));

  expect(screen.getByText(/Supplement/)).toBeInTheDocument();
});
