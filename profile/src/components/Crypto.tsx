import React, {useState} from 'react'

type price = {
  price: number;
}



const Crypto = () => {
  const [price, SetPrice] = useState();
  

  
  
  return (
    <div className='timeline'>
      <h1 className='text-[3rem] text-blue-500'>CRYPTO</h1>
      <p>Bitcoin ETF postponed until <b>early 2024</b> - this lines up with timing of halving.</p>
      <p>Cardano $300</p>
      <p>XRP: $400</p>
      <p>Meme Coin $100, potentially NUDES COIN</p>
      <h2>Exchanges: Kraken-needs new account. Bitstamp, Cex.io</h2>
      
    </div>
  )
}

export default Crypto
