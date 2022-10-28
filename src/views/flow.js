import React from 'react';
import { ReactFragment } from 'react';


const Flow = () => {

    return (
<>
  <div
    data-collapse="all"
    data-animation="default"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navbar w-nav"
  >
    <div className="w-layout-grid grid-navbar">
      <div data-w-id="e8cea9b6-4627-f1cd-fec0-16ebfaf55914" className="nav">
        <a
          href="index.html"
          aria-current="page"
          className="brand w-nav-brand w--current"
        >
          <img
            src="images/Color-logo---no-background.svg"
            loading="lazy"
            alt=""
            className="logo"
          />
        </a>
      </div>
      <div data-w-id="e8cea9b6-4627-f1cd-fec0-16ebfaf55917" className="nav">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a
            href="index.html"
            aria-current="page"
            className="nav-link w-nav-link w--current"
          >
            Home
          </a>
          <a href="team-members.html" className="nav-link w-nav-link">
            About
          </a>
          <a
            href="marketing-and-community-growth.html"
            className="nav-link w-nav-link"
          >
            Technology
          </a>
          <a href="blog.html" className="nav-link w-nav-link">
            Blog
          </a>
          <a href="contact.html" className="nav-link w-nav-link">
            Contact
          </a>
        </nav>
      </div>
      <div className="nav right">
        <div
          data-node-type="commerce-cart-wrapper"
          data-open-product=""
          data-wf-cart-type="modal"
          data-wf-cart-query=""
          data-wf-page-link-href-prefix=""
          className="w-commerce-commercecartwrapper cart"
        >
          <a
            href="#"
            data-node-type="commerce-cart-open-link"
            className="w-commerce-commercecartopenlink cart-button w-inline-block"
          >
            <div
              data-w-id="3fe0fbe3-ccc5-bc56-8250-407ed953b481"
              className="text-cart w-inline-block"
            >
              Cart
            </div>
            <div
              data-w-id="3fe0fbe3-ccc5-bc56-8250-407ed953b483"
              className="w-commerce-commercecartopenlinkcount cart-quantity"
            >
              0
            </div>
          </a>
          <div
            data-node-type="commerce-cart-container-wrapper"
            style={{ display: "none" }}
            className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal cart-wrapper"
          >
            <div
              data-node-type="commerce-cart-container"
              className="w-commerce-commercecartcontainer cart-container"
            >
              <div className="w-commerce-commercecartheader cart-header">
                <h5 className="w-commerce-commercecartheading">Your Cart</h5>
                <a
                  href="#"
                  data-node-type="commerce-cart-close-link"
                  className="w-commerce-commercecartcloselink close-button w-inline-block"
                >
                  <img
                    src="images/close.svg"
                    loading="lazy"
                    alt=""
                    className="icon-close"
                  />
                </a>
              </div>
              <div className="border-ecommerce" />
              <div className="w-commerce-commercecartformwrapper">
                <form
                  data-node-type="commerce-cart-form"
                  style={{ display: "none" }}
                  className="w-commerce-commercecartform"
                >
                  <div
                    className="w-commerce-commercecartlist cart-list"
                    data-wf-collection="database.commerceOrder.userItems"
                    data-wf-template-id="wf-template-3fe0fbe3-ccc5-bc56-8250-407ed953b48d"
                  />
                  <div className="border-ecommerce" />
                  <div className="w-commerce-commercecartfooter cart-footer">
                    <div className="w-commerce-commercecartlineitem">
                      <div>Subtotal</div>
                      <div className="w-commerce-commercecartordervalue text-subtotal" />
                    </div>
                    <div>
                      <div
                        style={{ position: "relative" }}
                        data-wf-paypal-button='{"layout":"horizontal","color":"black","shape":"pill","label":"paypal","tagline":false,"note":false}'
                        className="paypal"
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            zIndex: 999,
                            cursor: "auto"
                          }}
                        />
                      </div>
                      <div
                        data-node-type="commerce-cart-quick-checkout-actions"
                        className="web-payments"
                      >
                        <a
                          data-node-type="commerce-cart-apple-pay-button"
                          role="button"
                          tabIndex={0}
                          aria-haspopup="dialog"
                          aria-label="Apple Pay"
                          style={{
                            backgroundImage:
                              "-webkit-named-image(apple-pay-logo-white)",
                            backgroundSize: "100% 50%",
                            backgroundPosition: "50% 50%",
                            backgroundRepeat: "no-repeat"
                          }}
                          className="w-commerce-commercecartapplepaybutton apple-pay"
                        >
                          <div />
                        </a>
                        <a
                          data-node-type="commerce-cart-quick-checkout-button"
                          role="button"
                          tabIndex={0}
                          aria-haspopup="dialog"
                          style={{ display: "none" }}
                          className="w-commerce-commercecartquickcheckoutbutton pay-with-browser"
                        >
                          <svg
                            className="w-commerce-commercequickcheckoutgoogleicon"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                          >
                            <defs>
                              <polygon
                                id="google-mark-a"
                                points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                              />
                              <polygon
                                id="google-mark-c"
                                points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                              />
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <path
                                fill="#4285F4"
                                d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                              />
                              <path
                                fill="#34A853"
                                d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                              />
                              <g transform="translate(0 4)">
                                <mask id="google-mark-b" fill="#fff">
                                  <use xlinkHref="#google-mark-a" />
                                </mask>
                                <path
                                  fill="#FBBC04"
                                  d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                  mask="url(#google-mark-b)"
                                />
                              </g>
                              <mask id="google-mark-d" fill="#fff">
                                <use xlinkHref="#google-mark-c" />
                              </mask>
                              <path
                                fill="#EA4335"
                                d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                mask="url(#google-mark-d)"
                              />
                            </g>
                          </svg>
                          <svg
                            className="w-commerce-commercequickcheckoutmicrosofticon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                          >
                            <g fill="none" fillRule="evenodd">
                              <polygon
                                fill="#F05022"
                                points="7 7 1 7 1 1 7 1"
                              />
                              <polygon
                                fill="#7DB902"
                                points="15 7 9 7 9 1 15 1"
                              />
                              <polygon
                                fill="#00A4EE"
                                points="7 15 1 15 1 9 7 9"
                              />
                              <polygon
                                fill="#FFB700"
                                points="15 15 9 15 9 9 15 9"
                              />
                            </g>
                          </svg>
                          <div>Pay with browser.</div>
                        </a>
                      </div>
                      <a
                        href="checkout.html"
                        value="Continue to Checkout"
                        data-node-type="cart-checkout-button"
                        className="w-commerce-commercecartcheckoutbutton checkout-button"
                        data-loading-text="Hang Tight..."
                      >
                        Continue to Checkout
                      </a>
                    </div>
                  </div>
                </form>
                <div className="w-commerce-commercecartemptystate cart-empty-state">
                  <div className="text-cart-empty">
                    There are not items in your cart.
                    <br />
                  </div>
                  <a href="get-started.html" className="button w-button">
                    Back To Shop
                  </a>
                </div>
                <div
                  style={{ display: "none" }}
                  data-node-type="commerce-cart-error"
                  className="w-commerce-commercecarterrorstate cart-error-state"
                >
                  <div
                    className="text-error w-cart-error-msg"
                    data-w-cart-quantity-error="Product is not available in this quantity."
                    data-w-cart-general-error="Something went wrong when adding this item to the cart."
                    data-w-cart-checkout-error="Checkout is disabled on this site."
                    data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                    data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                  >
                    Product is not available in this quantity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="e8cea9b6-4627-f1cd-fec0-16ebfaf55924"
          className="w-layout-grid grid-button-nav"
        >
          <a href="#" className="nav-button w-button">
            Get Started
          </a>
          <div className="menu-button w-nav-button">
            <div className="menu-icon w-icon-nav-menu" />
          </div>
        </div>
      </div>
    </div>
    <div className="shadow-navbar" />
  </div>
  <div className="section-hero wf-section">
    <div className="content hero">
      <div className="block-hero">
        <h1
          data-w-id="fec0fb7b-303f-09d0-3ce6-40f91d7252a5"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="heading-hero"
        >
          Humanity's optimal digital trust paradigm.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />‍
        </h1>
        <p
          data-w-id="dcd739db-6d1f-6a52-859b-4a3fd0e20c84"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="paragraph-large"
        >
          The only layer 1 blockchain bridging the tenets of regulation,
          compliance, and standardization at the foundational level to provide
          optimal usability &amp; value for nearly every use case.
        </p>
        <div
          data-w-id="77b60b92-872c-7997-8a32-0c57412cdee7"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="w-layout-grid grid-button"
        >
          <a href="get-started.html" className="button w-button">
            Get Started
          </a>
        </div>
      </div>
      <div data-w-id="297673ad-47a4-b4b1-8938-0ca16b3d6b41">
        <div className="figure-block-a-hero">
          <div style={{ width: "0%" }} className="figure-a1" />
          <div style={{ width: "0%" }} className="figure-a2" />
          <div style={{ width: "0%" }} className="figure-a3" />
        </div>
      </div>
    </div>
    <div
      data-w-id="58e11b86-9d96-c9a8-f52f-b1795c37fa57"
      style={{
        WebkitTransform:
          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform:
          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform:
          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform:
          "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        opacity: 0
      }}
      className="glow-top"
    />
  </div>
  <div className="section wf-section">
    <div data-w-id="0773ab12-e7cf-0dcb-1ac5-1097386497cc" className="content">
      <div className="block-heading">
        <div
          data-w-id="823c362f-ea60-5ffd-ca7f-cde6a03d15bb"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="subtitle"
        >
          what is quantum one?
        </div>
      </div>
      <div className="w-layout-grid grid-features">
        <div
          data-w-id="893553c5-8fd4-cfbf-8679-88871d8ec8a6"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/icon-1.svg"
              loading="lazy"
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-2">User Centric</h6>
          <p className="paragraph">
            Simple, intuitive, optimal usability derived from needs based
            analysis
          </p>
        </div>
        <div
          data-w-id="86649301-b3bf-a470-084f-c832dcc04618"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/trust.svg"
              loading="lazy"
              width={40}
              height={40}
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-3">Trusted</h6>
          <p className="paragraph-2">
            A Digital Identity Foundation contributor aiming to be
            SEC&nbsp;approved and regulated by default.
          </p>
        </div>
        <div
          data-w-id="82c90e76-3d3e-e0a8-5192-1d91c07d6533"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/blockchain.svg"
              loading="lazy"
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-4">Interoperable </h6>
          <p className="paragraph-3">
            Quantaverse ID&nbsp;is interoperable with regulatory compliant
            blockchains &amp; classic web ecosystems{" "}
          </p>
        </div>
        <div
          data-w-id="d69dcdee-aab4-e517-357b-a0d5f9b2aa34"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/icon-4.svg"
              loading="lazy"
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-5">Public-Private</h6>
          <p className="paragraph-4">
            Optimal context trust enable highly efficient HealthCare, Government
            Benefits, Judicial ecosystems, &amp; more
          </p>
        </div>
        <div
          data-w-id="6c922f6d-a6bc-ce40-9a2c-d1ba5021c7a1"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/icon-5.svg"
              loading="lazy"
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-6">Web-Agnostic</h6>
          <p className="paragraph-5">
            {" "}
            Web2 (classic internet), Web3 (blockchain), Web5 enabled.
          </p>
        </div>
        <div
          data-w-id="d8a73d62-1886-742f-ad2e-ca5926422de9"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="feature"
        >
          <div className="icon-feature-bg">
            <img
              src="images/icon-6.svg"
              loading="lazy"
              alt=""
              className="icon-feature"
            />
          </div>
          <h6 className="heading-7">Sustainable</h6>
          <p className="paragraph-6">
            {" "}
            &nbsp;We're engineering one of the first digital identity ecosystems
            for the post quantum era.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="section wf-section">
    <div className="content">
      <div className="w-layout-grid grid-right">
        <div className="block">
          <div
            data-w-id="10717017-9153-2952-45a2-9777c8214290"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="subtitle"
          >
            executive summary
          </div>
          <h2
            data-w-id="9ba3e33b-0e41-bbb4-d783-b036597e5f42"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="heading"
          >
            Eliminating blockchain investment risk
          </h2>
          <p
            data-w-id="4a8841b3-d63f-cdef-4a04-7328447bda2a"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="paragraph-large"
          >
            Quantum One is a web-agnostic blockchain with an omni-compliant,
            digital identity ecosystem forged into its foundation. We fully
            verify the identity of each user while complying with the various
            regulations required to legally operate business's in nearly every
            sector. Our proof-of-stake protocol &amp; fiscal strategy affords up
            to 90% reductions in current cost in areas such as banking,
            healthcare, and judicial systems.
          </p>
        </div>
        <div className="block-right">
          <div
            data-w-id="aa0c30b7-4b0e-5634-dacf-abd61c960570"
            className="page-home-1"
          >
            <div className="page-home-1-block">
              <div className="page-home-1a" />
              <div className="page-home-1b" />
              <div className="page-home-1c" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section wf-section">
    <div className="content">
      <div className="w-layout-grid grid-left">
        <div className="block-left">
          <div className="w-layout-grid grid-stats">
            <div
              id="w-node-_02064035-005b-20d3-cc19-3656bd8b82a4-88c9e0c9"
              data-w-id="02064035-005b-20d3-cc19-3656bd8b82a4"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              className="stats"
            >
              <h3 className="heading-stats">+20%</h3>
              <div className="text-stats">
                <sup>MORE INCOME FOR PARTICIPATING BUSINESSES</sup>
              </div>
            </div>
            <div
              id="w-node-_3f5f32dc-ddaa-e7e4-9106-c1de7dc4ad14-88c9e0c9"
              data-w-id="3f5f32dc-ddaa-e7e4-9106-c1de7dc4ad14"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              className="stats"
            >
              <h3 className="heading-stats">+$700M </h3>
              <div className="text-stats">
                <sup className="superscript-2">
                  ANNUAL REVENUE INCREASE FOR BUSINESSES WORTH &gt; $1B
                </sup>
              </div>
            </div>
            <div
              id="w-node-_938ee921-41a5-f1d9-5d7e-3338bf9379cb-88c9e0c9"
              data-w-id="938ee921-41a5-f1d9-5d7e-3338bf9379cb"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              className="stats lighter"
            >
              <h3 className="heading-stats">+$400B</h3>
              <div className="text-stats">
                <sup className="superscript">
                  PER YR. UNLOCKED VALUE IN US BANKING SECTOR ALONE
                </sup>
              </div>
            </div>
            <div
              id="w-node-f198c28a-f776-8799-306f-bca23b2e4ab7-88c9e0c9"
              data-w-id="f198c28a-f776-8799-306f-bca23b2e4ab7"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              className="stats lighter"
            >
              <h3 className="heading-stats">90%</h3>
              <div className="text-stats">
                reduction in user onboarding costs<sub>4</sub>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-node-_5713fedf-471c-a9c3-90d4-7d6642ea17a8-88c9e0c9"
          className="block"
        >
          <div
            data-w-id="5713fedf-471c-a9c3-90d4-7d6642ea17a9"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="subtitle"
          >
            stats
          </div>
          <h2
            data-w-id="5713fedf-471c-a9c3-90d4-7d6642ea17ab"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="heading"
          >
            Digital identity's trillion $ key
          </h2>
          <p
            data-w-id="5713fedf-471c-a9c3-90d4-7d6642ea17ad"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="paragraph-large"
          >
            Engineered for optimal trust contexts &amp; usability to unlock
            massive value in the classic internet (web2) world alone. See full
            WEF report{" "}
            <a
              href="https://www3.weforum.org/docs/WEF_Guide_Digital_Identity_Ecosystems_2021.pdf"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <div
            data-w-id="2d6db815-ef82-a123-9a77-26cdadb39017"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="w-layout-grid grid-button"
          >
            <a href="team-members.html" className="button w-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section wf-section">
    <div className="content">
      <div className="block-heading">
        <div
          data-w-id="6d9ad869-a5c2-fd2f-9bfc-e6fc73288d47"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="subtitle"
        >
          Backed by
        </div>
        <h2
          data-w-id="6d9ad869-a5c2-fd2f-9bfc-e6fc73288d49"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="heading"
        >
          Meet our friends and collaborators
        </h2>
        <p
          data-w-id="7fc5df83-6010-b5dc-f288-b6f30f9f4eef"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="paragraph-large"
        >
          We bring the best of web2 and web3 worlds together
        </p>
      </div>
      <div className="w-layout-grid grid-clients">
        <div
          data-w-id="0c106c66-bf23-050f-0fdb-3ed56c3a69f4"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-1.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="f567adfd-1fc5-47fc-fe1d-b3cb4ed22463"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/fractal-logo-gr.png"
            loading="lazy"
            srcSet="images/fractal-logo-gr-p-500.png 500w, images/fractal-logo-gr.png 1158w"
            sizes="100vw"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="15951e27-b4c4-fda3-2e35-207951f74bc2"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-3.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="d837c98e-8ed0-5a81-0b73-79c8cfad71ca"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-4.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="844d1e39-a177-95a8-d613-60f08197b22e"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-5.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="c3a5c7cd-0014-86d5-946e-cae0abff07cb"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-6.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="3897b77d-7c6d-d02d-a091-750ba0b115e0"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-7.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="02316edd-cdb3-0150-a792-54531d1e0283"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-8.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="70609f8f-440f-afa5-280d-e7ffc8391ecb"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-9.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
        <div
          data-w-id="303ba026-3055-cdf6-a5db-e3bed7bdaecc"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="client"
        >
          <img
            src="images/client-10.svg"
            loading="lazy"
            alt=""
            className="logo-client"
          />
          <div className="bg-client" />
        </div>
      </div>
    </div>
  </div>
  <div className="section wf-section">
    <div className="content">
      <div className="w-layout-grid grid-left">
        <div className="block-left">
          <div
            data-w-id="ab31e567-7829-c128-8a54-16b1afc9752c"
            className="page-home-2"
          >
            <div className="page-home-2-block">
              <div className="page-home-2a" />
              <div className="page-home-2b" />
              <div className="page-home-2c" />
            </div>
          </div>
        </div>
        <div
          id="w-node-_3930e259-75dd-d066-e614-6fbbe9bf2ee4-88c9e0c9"
          className="block"
        >
          <div
            data-w-id="3930e259-75dd-d066-e614-6fbbe9bf2ee5"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="subtitle"
          >
            developers
          </div>
          <h2
            data-w-id="3930e259-75dd-d066-e614-6fbbe9bf2ee7"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="heading"
          >
            Fully compliant, fully trusted.
          </h2>
          <p
            data-w-id="3930e259-75dd-d066-e614-6fbbe9bf2ee9"
            style={{
              WebkitTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="paragraph-large"
          >
            Quantum One is obsessed with assuring the integrity, safety, and
            security of the user environment we foster - both directly &amp;
            indirectly. As a result, we have disavowed Telegram until further
            notice and may disavow many similarily pseudo-secure applications as
            time progresses.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="section wf-section">
    <div className="content">
      <div className="block-heading">
        <div
          data-w-id="68275e70-ddcc-9d46-397e-61d7b3551ba4"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="subtitle"
        >
          Blog
        </div>
        <h2
          data-w-id="68275e70-ddcc-9d46-397e-61d7b3551ba6"
          style={{
            WebkitTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="heading"
        >
          Latest news on Quantum One
        </h2>
      </div>
      <div className="collection-list-wrapper w-dyn-list">
        <div role="list" className="collection-list w-dyn-items">
          <div role="listitem" className="collection-item w-dyn-item">
            <a
              data-w-id="9b3a04ce-54f9-ab44-7137-87c1c7ad463c"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              href="#"
              className="link-image-blog w-inline-block"
            >
              <img src="" loading="lazy" alt="" className="image-blog" />
              <div className="bg-blog" />
            </a>
            <div
              data-w-id="92c8a6ff-e0e8-c539-af2a-4e39bf8fd110"
              style={{
                WebkitTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 15px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                opacity: 0
              }}
              className="block-blog"
            >
              <div className="date-blog" />
              <a href="#" className="link-heading-blog w-inline-block">
                <h6 className="heading-blog" />
              </a>
            </div>
          </div>
        </div>
        <div className="empty-state w-dyn-empty">
          <div className="text-empty">No items found.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="section banner wf-section">
    <div className="content">
      <div
        data-w-id="5d90d470-fa17-1f16-14ad-fad48d39fb69"
        className="group-banner"
      >
        <div className="block-banner">
          <h3
            data-w-id="5d90d470-fa17-1f16-14ad-fad48d39fb6b"
            className="heading-banner"
          >
            Stay informed and never miss a Quantum One update!
          </h3>
          <div
            data-w-id="5d90d470-fa17-1f16-14ad-fad48d39fb6d"
            className="form-block-banner w-form"
          >
            <form
              id="Email-Form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form-banner"
            >
              <input
                type="email"
                className="text-field w-input"
                maxLength={256}
                name="Email"
                data-name="Email"
                placeholder="Your email address"
                id="Email"
                required=""
              />
              <input
                type="submit"
                defaultValue="Subscribe"
                data-wait="Please wait..."
                className="button w-button"
              />
            </form>
            <div className="success-message w-form-done">
              <div className="text-success">
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div className="text-error">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
        <div className="glow-banner" />
      </div>
    </div>
  </div>
  <div className="section footer wf-section">
    <div className="content">
      <div className="w-layout-grid grid-footer">
        <div
          id="w-node-_6603d099-87ea-d392-449a-caaf2cdb7f91-2cdb7f8e"
          data-w-id="6603d099-87ea-d392-449a-caaf2cdb7f91"
          className="block-footer"
        >
          <img
            src="images/Color-logo---no-background.png"
            loading="lazy"
            srcSet="images/Color-logo---no-background-p-500.png 500w, images/Color-logo---no-background-p-800.png 800w, images/Color-logo---no-background-p-1080.png 1080w, images/Color-logo---no-background-p-1600.png 1600w, images/Color-logo---no-background-p-2000.png 2000w, images/Color-logo---no-background-p-2600.png 2600w, images/Color-logo---no-background.png 3177w"
            sizes="(max-width: 479px) 83vw, 203.51666259765625px"
            alt=""
            className="logo-footer"
          />
          <p className="paragraph-footer">
            We're eliminating blockchain investment risk with solutions that
            will also unlock $400B of value per year in the US banking sector
            alone.
            <br />‍<br />
            <a href="mailto:info@yoursite.com" className="link-underlined">
              inquire@quantumone.network
            </a>
          </p>
        </div>
        <div
          data-w-id="6603d099-87ea-d392-449a-caaf2cdb7f99"
          className="block-footer"
        >
          <div className="heading-footer">Quick Links</div>
          <a href="team-members.html" className="link-footer">
            About
          </a>
          <a href="marketing-and-community-growth.html" className="link-footer">
            Technology
            <br />
          </a>
          <a href="contact.html" className="link-footer">
            Contact
          </a>
          <a href="blog.html" className="link-footer">
            Blog
          </a>
        </div>
        <div
          data-w-id="6603d099-87ea-d392-449a-caaf2cdb7fa5"
          className="block-footer"
        >
          <div className="heading-footer">Social</div>
          <a
            href="https://www.facebook.com/webflow/"
            target="_blank"
            className="link-footer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/webflow/"
            target="_blank"
            className="link-footer"
          >
            Discord
            <br />
          </a>
          <a
            href="https://twitter.com/webflow"
            target="_blank"
            className="link-footer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/c/Webflow"
            target="_blank"
            className="link-footer"
          >
            YouTube
          </a>
          <a
            href="https://www.youtube.com/c/Webflow"
            target="_blank"
            className="link-footer"
          >
            Reddit
          </a>
        </div>
        <div
          data-w-id="6603d099-87ea-d392-449a-caaf2cdb7fb1"
          className="block-footer"
        >
          <div className="heading-footer">Learn</div>
          <a href="template-info/licensing.html" className="link-footer">
            Stage 1 API
          </a>
          <a href="template-info/style-guide.html" className="link-footer">
            In the Press
            <br />
          </a>
          <a href="template-info/changelog.html" className="link-footer">
            Whitepaper
          </a>
          <a href="template-info/changelog.html" className="link-footer">
            GitHub
          </a>
        </div>
      </div>
      <div
        data-w-id="6603d099-87ea-d392-449a-caaf2cdb7fbb"
        className="footer-down"
      />
     </div>
   </div>
  </>
  );
};

export default Flow; 

        