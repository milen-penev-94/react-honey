import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Product from './Product';

describe('Admin Product Component', () => {
    test('Should click delete product', () => {
        const product = {
            name: 'Восъкотопилка парна 10рамки INOX',
        }
        render(
            <BrowserRouter>
                 <Product product={product} onChange={false}/>
            </BrowserRouter>);
            
        fireEvent.click(document.querySelector('.delete')) ;  
        expect(document.querySelector('body').contains('modal-open')).toBe(true)
    });
})