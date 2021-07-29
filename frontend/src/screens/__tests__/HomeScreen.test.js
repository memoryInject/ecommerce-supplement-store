import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { testRender, makeTestStore } from '../../reduxTestUtils';
import HomeScreen from '../HomeScreen';

import axios from 'axios';

jest.mock('axios');

const productList = [
  {
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
  {
    _id: '2',
    name: 'Supplement B',
    image: '/images/productB.png',
    description: 'This is Product B',
    brand: 'PRODUCT B',
    category: 'protein',
    price: 29.99,
    size: '2 lbs.',
    flavour: 'No Flavour',
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '3',
    name: 'Supplement C',
    image: '/images/productC.png',
    description: 'This is Product C',
    brand: 'PRODUCT C',
    category: 'bcaa',
    price: 29.99,
    size: '2 lbs.',
    flavour: 'Lime',
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
];

let store;

const match = { params: { keyword: '' } };

// Jest mock implementation of window.confirm
global.confirm = () => true;

beforeEach(async () => {
  store = makeTestStore();

  // Product ProductCarousel, it should be at first because it's import form another file
  await axios.get.mockResolvedValueOnce({
    data: productList,
  });

  // All product list
  await axios.get.mockResolvedValueOnce({
    data: { products: productList, page: 1, pages: 1 },
  });

  testRender(
    <Router>
      <HomeScreen match={match} />
    </Router>,
    {
      store,
    }
  );
});

describe('Show all products', () => {
  it('list all the products and carousel', () => {
    // Check a product
    expect(screen.getByText('Supplement A')).toBeInTheDocument();

    // Check total products 3 for carousel and 3 for cards
    expect(screen.getAllByText(/Supplement/).length).toEqual(6);
    // screen.debug();
  });
});
