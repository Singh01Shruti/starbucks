import './Section.css'
export default function Section(){
    return (
        <>
        <div>
            <div className="section1">
            <h1>Getting started is easy</h1>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="section2">
            <div className="section3">
                <h2>Create an account</h2>
                <p>To get started, <a href="#" className="join-link">join now</a>. You can also <a href="#" className="join-link">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>
            <div className="section3">
             <h2>Order and pay how you'd like</h2>
             <p>Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. <a href="#" className="join-link">Learn how</a></p>
            </div>
            <div className="section3">
            <h2>Earn Stars, get Rewards</h2>
            <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
            </div>
        </div>
        </>
    )
}