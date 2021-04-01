// import styles below, scoped to this component
import styles from '../styles/Home.module.css'

import { getProducts } from '../actions'
import { useState } from 'react'
import axios from 'axios'
import Subscription from '../components/subscription'
import Products from '../components/products'

export default function Home({products}) {
  const [email, setEmail] = useState('');

  const inputChangeHandler = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const subscribeHandler = async () => {
    // const subscriptionRes = await axios.post('http://localhost:3000/api/subscription', {email});
    const subscriptionRes = await axios.post('https://next-ecommerce-demo.vercel.app/api/subscription', {email});
    alert(`${subscriptionRes.data.text}`);
    setEmail('');
  }

  return (
    <>
    <div className="container pt-5">
      <h1 className="text-center pb-3">Tea & Coffee shop</h1>

      {/* Products section starts */}
      <section>
        <div className="row">
          <Products products={products}/>
        </div>
      </section>
      {/* Products section ends */}

      {/* Subscribe section starts */}
      <section>
        <div className="row pb-5">
          <div className="col">
         <Subscription
         email={email}
         inputChangeHandler={inputChangeHandler}
         subscribeHandler={subscribeHandler}
          />  
          </div>
        </div>
      </section>
      {/* Subscribe section ends */}

    </div>
    </>
  )
}

// use getStaticProps whenever possible, so the content is pre-rendered at build time.
export async function getStaticProps(){
  const products = await getProducts();
  return {
    props: {
      products
    }
  }
}

// use getServerSideProps when data changes a lot and you need to get fresh content.
// The content is pre-rendered on the server side upon the client's request. 
// This is a slower option. If you uncomment this, and comment getStaticProps, the app
// should still work
// export async function getServerSideProps(){
//   const products = await getProducts();
//   return {
//     props: {
//       products
//     }
//   }
// }

