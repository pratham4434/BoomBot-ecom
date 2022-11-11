import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useAppContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useAppContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BoomBot</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => {}}>
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar