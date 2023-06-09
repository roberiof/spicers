import { useEffect, useState } from 'react'
import  { getProducts } from '../GeralFunctions'
import Card from '../components/Card'
import Header from '../components/Header'

import { WrapperHome, WrapperCards } from '../styles/components/HomeStyle'

export default function Home(){
  const [prods, setProds] = useState([])

  useEffect( () => {
    getProducts().then(data => setProds(data))
    window.scroll(0,0)
  }, [])

  return(
    <>
      <Header/>
      <WrapperHome>
        <div className='presentation'>
          <div className="text">
            <h1> A new way to consume <span className='colored-h1'>Spicyries</span> for real <span className="colored-h1">Spicers</span></h1>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <WrapperCards>
          {prods && prods.map( (item, index) => {
            if(item.amount !== 0){
              return <Card key={index} product={item} setProds={setProds}/>
            }
          })}
          {prods && prods.map( (item, index) => {
            if(item.amount === 0){
              return <Card key={index} product={item} setProds={setProds}/>
            }
          })}
        </WrapperCards>
      </WrapperHome>
    </>
  )
}