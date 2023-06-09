import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {formatToCurrency, getProducts, getLocalStorage} from '../GeralFunctions'

import RowProduct from '../components/RowProduct'
import Summary from '../components/Summary'
import Header from '../components/Header'
import { MdKeyboardBackspace } from 'react-icons/md'

import { TableStyle, WrapperContentCart } from '../styles/components/CartStyle';

export default function Cart(){
  const [prodsCart, setProdsCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setProdsCart(getLocalStorage() ?? [])
    window.scrollTo(0,0)
  }, [])
  
  return (
    <>
      <Header isOutHomePage={true}/>
      <WrapperContentCart>
        <span className='icon-back' onClick={() => navigate('/')}> <MdKeyboardBackspace/> </span>
        <h1> Your Cart </h1>
        <div className='content'>
          <section>
            <TableStyle>
              <thead>
                <tr> 
                  <th className='thead-product  light-text'> Product </th>
                  <th className="light-text price-th"> Price </th>
                  <th className="light-text amount-th"> Amount </th>
                  <th className="light-text"> Total </th>
                </tr>
              </thead>
              <tbody>
                {prodsCart && prodsCart.map( (product, index) => (
                  <RowProduct 
                    key={index} 
                    product={product} 
                    setProdsCart={setProdsCart}
                    getProducts={getProducts}
                    formatToCurrency={formatToCurrency}
                  />
                ))}
                {prodsCart.length === 0 && <tr><td colSpan={4} className='empty-message'> The cart is empty!</td></tr>}
              </tbody>
            </TableStyle>
          </section>
          <aside>
            <Summary 
              setProdsCart={setProdsCart} 
              prodsCart={prodsCart}
              formatToCurrency={formatToCurrency}
            />
          </aside>
        </div>
      </WrapperContentCart>
    </>
  )
}