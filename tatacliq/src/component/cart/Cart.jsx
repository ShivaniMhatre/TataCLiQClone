import React from 'react'
import './Cart.css'
import { redirect, useNavigate } from 'react-router-dom'

const Cart = () => {
    const redirect=useNavigate()
    return (
        <div id='cartfull'>
            <div id='cart'>
                <div id='inner_cart_nav'>
                    <div id='cart_img'>
                        <img src='http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png' />
                    </div>
                    <div id='cart_profile'>
                        <div id='cart_circle'>
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <p>Shivani Mhatre</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            
            <div>
                <div id='bag'>
                    <p>My Bag</p>
                </div>
                <div id='address'>
                    <p>Pen,</p>
                    <p> 410207</p>
                    <p><u>Change Pin Code</u></p>
                </div>
            </div>
            <div id='back'>
                <p>Apply a relevant <b>coupon code</b> here to avail any additional discount. Applicable <b>cashback </b>if any will be credited to your account as per T&C.</p>
                <div id='ground'>
                    <div id='cartleft'>
                        <div>
                            <img src='https://www.tatacliq.com/src/cart/components/img/Vector.svg' />
                            <p>Get this order at <s>₹8999</s>  <b>₹4049</b> only!</p>
                        </div>
                        <div>
                            <div>
                                <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017521562_437Wx649H_202305120004041.jpeg' />
                            </div>
                            <div>
                                <span>Diza by Westside White Kurta</span>
                                <span><img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg' /></span>
                                <span>Delivery by 17th Jul |</span>
                                <span>FREE</span>
                                <p><b>₹1399.00</b> </p>
                                <span>Color: White </span>   <span>Size: S</span>
                                <div>
                                    <p>Quantity: 1</p>
                                    <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
                                    <p>Save to wishlist</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                        </div>
                        <button>Continue Shopping</button>
                    </div>
                    <div id='cartright'>
                        <div>
                            <img src='https://www.tatacliq.com/src/general/components/img/coupon.png' />
                            <p>Check for Coupons</p>
                        </div>
                        <div>
                            <div>
                                <p>Bag Total</p>
                                <span>₹1399.00</span>
                            </div>
                            <div>
                                <p>Shipping Charge</p>
                                <span>FREE</span>
                            </div>
                            <div>
                                <p>Bag Subtotal</p>
                                <span>₹1399.00</span>
                            </div>
                            <div>
                                <p><b>Total</b>  ₹1399</p>
                                <button onClick={()=>redirect('/payment')}>Checkout</button>
                            </div>

                            <div>
                                <img src='https://www.tatacliq.com/src/cart/components/img/lock.svg' />
                                <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart