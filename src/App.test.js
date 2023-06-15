import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


const mockMattresses =
  {
    "mattresses": {
      "classic": {
        "name": "Saatva Classic",
        "price": 999,
        "reviewRating": 4.9,
        "imageFileName": "classic-carousel.jpg"
      },
      "loom": {
        "name": "Loom & Leaf",
        "price": 1299,
        "reviewRating": 4.0,
        "imageFileName": "loom-carousel.jpg"
      },
      "zen": {
        "name": "Zenhaven",
        "price": 1599,
        "reviewRating": 4.5,
        "imageFileName": "zen-carousel.jpg"
      }
    }
  }

describe('cart button', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMattresses),
    })
  })

  test('button renders', async () => {
    render(<App/>);
    await waitFor(() => {
      const addToCartBtn = screen.getByText('Add to Cart');
      expect(addToCartBtn).toBeInTheDocument()
    })
  })

  test('clicking the button shows the spinner', async () => {
    const user = userEvent.setup();
    render(<App/>);
    await waitFor(async () => {
      const addToCartBtn = screen.getByTestId('add-to-cart-btn');
      await user.click(addToCartBtn);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    })
  })

  test('the spinner disappears a second after the click', (done) => {
    const user = userEvent.setup();
    render(<App/>);
    let addToCartBtn;
    waitFor(() => {
      addToCartBtn = screen.getByText('Add to Cart');
      user.click(addToCartBtn);
    }).then(() => {
      setTimeout(() => {
        expect(addToCartBtn).toHaveTextContent('Add to Cart');
        done();
      }, 1100)
    })
  })
})
