import { getProduct, getProductsIds } from '../../actions'
import Link from 'next/link'


export default function ProductDetail({product}){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="pt-5">{product.name}</h2>
                    <img
                    className="pt-5"
                    src={product.imageUrl}
                    alt={product.name}
                    style={{maxWidth: '400px'}}
                    />
                    <h4 className="pt-5 pb-3">{product.description}</h4>
                    <button className="btn btn-primary me-3">Buy now</button>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col">
                    <Link href="/">
                        <a className="text-primary"><u>Back to Home</u></a>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

//hey Next, these are the possible id's
export async function getStaticPaths() {
    const paths = await getProductsIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    console.log('params.id', params.id)
    const product = await getProduct(params.id);
    return {
      props: {
        product
      }
    }
  }



