import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="section-title" style={{ textAlign: "center", paddingTop:'80px' }}>
          <h2>About Blockchain</h2>
          <hr />
          <p>
            Utilizing blockchain technology, our DApp enables secure and
            decentralized transactions. Powered by Infura's infrastructure, it
            connects seamlessly to the Ethereum blockchain. Experience the
            future of trustless transactions with our DApp, revolutionizing
            industries with immutable ledgers and transparent processes.{" "}
          </p>
        </div>
        <div className="row gap-3">
          <div className="col-lg-4 mt-4 mt-lg-0"
            style={{borderRadius:'35px', height:'300px', alignItems:'center', textAlign:'center', backgroundColor:'rgba(90, 90, 90, 0.5)', boxShadow:'rgba(0, 0, 0, 0.5) 5px 10px 15px'}}

          >
            <div className="box" style={{marginTop:"30px"}}>
              <h3>About Ethereum</h3>
              <ul className="pt-4 pb-3">
                <li>
                  <i className="bx bx-check"></i> Decentralized cryptocurrency
                  platform.{" "}
                </li>
                <li>
                  <i className="bx bx-check"></i> Smart contract functionality.{" "}
                </li>
                <li>
                  <i className="bx bx-check"></i> Supports decentralized
                  applications (DApps).{" "}
                </li>
                <li className="na">
                  <i className="bx bx-x"></i>{" "}
                  <span>Powered by Ether (ETH) cryptocurrency.</span>
                </li>
                <li className="na">
                  <i className="bx bx-x"></i>{" "}
                  <span>Implements proof-of-work consensus mechanism.</span>
                </li>
              </ul>
              <div>
              <a style={{color:'white'}} href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" className="buy-btn">
                Learn More
              </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 mt-4 mt-lg-0"
            style={{borderRadius:'35px', height:'300px', alignItems:'center', textAlign:'center', backgroundColor:'rgba(90, 90, 90, 0.5)', boxShadow:'rgba(0, 0, 0, 0.5) 5px 10px 15px'}}

          >
            <div className="box featured"  style={{marginTop:"30px"}}>
              <h3>About DApps</h3>
              <ul className="pt-4 pb-3">
                <li>
                  <i className="bx bx-check"></i> Distributed architecture.
                </li>
                <li>
                  <i className="bx bx-check"></i> Runs on blockchain network.
                </li>
                <li>
                  <i className="bx bx-check"></i> No central authority.
                </li>
                <li>
                  <i className="bx bx-check"></i> Immutable data storage.
                </li>
                <li>
                  <i className="bx bx-check"></i> Enhances transparency and
                  security.
                </li>
              </ul>
              <a style={{color:'white'}} href="https://www.investopedia.com/terms/e/ethereum.asp" target="_blank" className="buy-btn">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            style={{borderRadius:'35px', height:'300px', alignItems:'center', textAlign:'center', backgroundColor:'rgba(90, 90, 90, 0.5)', boxShadow:'rgba(0, 0, 0, 0.5) 5px 10px 15px'}}
          >
            <div className="box" style={{marginTop:"30px"}}>
              <h3>Crypto Blockchain</h3>
              <ul className="pt-4 pb-3">
                <li>
                  <i className="bx bx-check"></i> Digital or virtual currency.
                </li>
                <li>
                  <i className="bx bx-check"></i> Utilizes cryptography for
                  security.
                </li>
                <li>
                  <i className="bx bx-check"></i> Decentralized nature.
                </li>
                <li>
                  <i className="bx bx-check"></i> Peer-to-peer transactions.
                </li>
                <li>
                  <i className="bx bx-check"></i> Diverse range of
                  cryptocurrencies available.
                </li>
              </ul>
              <a style={{color:'white'}} href="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency#:~:text=Blockchain%20describes%20the%20way%20transactions,a%20two%2Dfactor%20authentication%20process." target="_blank" className="buy-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default Pricing;
