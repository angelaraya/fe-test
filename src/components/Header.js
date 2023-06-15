import SaatvaLogo from "./SaatvaLogo";
function Header({cartCount}) {

  return (
    <nav
      className="h-20 flex justify-between items-center
                 px-20 max-sm:px-3
                 bg-white"
    >
      <SaatvaLogo/>

      <div data-testid="cart-badge" className="w-12 h-12 p-2">
        {cartCount > 0 ? <span
          className="absolute bg-gold-600 rounded-full h-6 w-6 text-white ml-4 -mt-3 text-xs font-bold text-center align-bottom pt-1">{cartCount}</span> : <></>}
        <img src="/cart-shopping-solid.svg" alt="shopping cart" className="fill-gold-600"/>
      </div>
    </nav>
  )
}

export default Header;