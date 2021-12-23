import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

describe('Product Component', () => {
    test('Should display name', () => {
        const product = {
            name: 'Восъкотопилка парна 10рамки INOX',
        }
        render(
            <BrowserRouter>
                 <Product product={product} />
            </BrowserRouter>);
      
        expect(document.querySelector('h5').textContent).toBe('Восъкотопилка парна 10рамки INOX');
    });

    test('Should display price', () => {
        const product = {
            price: '120',
        }
        render(
            <BrowserRouter>
                 <Product product={product} />
            </BrowserRouter>);
      
        expect(document.querySelector('.price .price').textContent).toBe('120лв.');
    })
})