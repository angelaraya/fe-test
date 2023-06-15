import {useEffect, useState} from 'react';
import Header from "./components/Header";
import Picker from "./components/Picker"
import Spinner from "./components/Spinner";
import Carousel from "./components/Carousel";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [mattresses, setMattresses] = useState([]);

  useEffect(() => {
    fetch('/mattresses.json')
      .then(response => response.json())
      .then(body => setMattresses(Object.values(body['mattresses'])))
  }, []);

  const handlePickerClick = (clickedId) => setSelectedIdx(clickedId)

  const handleAddToCart = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCartCount(cartCount + 1);
    }, 500)
  }

  if (!mattresses.length) {
    // TODO Loading...
    return <></>
  }

  return (
    <div className="flex flex-col h-screen">
      <Header cartCount={cartCount}></Header>

      <div id="background" className="flex justify-center bg-gold-50 flex-1">
        <div id="content" className="flex max-xl:flex-col max-w-[120rem]
                                     py-3 max-sm:px-3 px-16 gap-x-6
                                     items-start">

          <Carousel paths={mattresses.map(m => m.imageFileName)}
                    alts={mattresses.map(m => m.name)}
                    index={selectedIdx}/>

          <div className="w-full">
            <h2 className="font-heading text-4xl mb-12">
              Choose Your Mattress
            </h2>
            <p className="font-copy uppercase text-sm mb-2">
              Select Mattress Type
            </p>
            <div className="flex lg:min-w-[30rem]">
              <Picker names={[...mattresses.map(m => m.name)]} selectedIdx={selectedIdx}
                      onClick={handlePickerClick}></Picker>
            </div>

            <div>
              <p className="font-bold inline-flex w-full justify-between mt-8">{mattresses[selectedIdx].name} <span
                className="font-normal text-gray-800">${mattresses[selectedIdx].price.toLocaleString()}</span></p>
            </div>
            <p
              className="inline-flex items-center gap-x-0.5 font-copy">{mattresses[selectedIdx].reviewRating.toPrecision(2)}<span><img
              className="w-4" src="star-solid.svg" alt="star"/></span>< /p>

            <button onClick={() => handleAddToCart()}
                    className={`w-full border-1 bg-gold-600 text-white h-10 mt-12 inline-flex items-center justify-center gap-x-3`}
                    disabled={processing}
                    data-testid="add-to-cart-btn"
            >
              {processing ? <span data-testid="spinner"><Spinner/></span> : <span>Add to Cart</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
