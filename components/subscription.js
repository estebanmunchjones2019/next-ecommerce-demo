export default function Subscription({email, inputChangeHandler, subscribeHandler}){
    return (
        <>
            <h3 className="pb-3">Subscribe to our newsletter to get the best deals!</h3>
            <label htmlFor="email" style={{display: 'block'}}>Please, enter your email</label>
            <input 
            className="me-3"
            placeholder="Your email here"
            id="email"
            onChange={inputChangeHandler}
            value={email} />
            <button 
            className="btn btn-primary"
            onClick={subscribeHandler}
            >Subscribe</button>
        </>
    )
}