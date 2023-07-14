import React from 'react'
import './../../../src/component/cart/Payment.css'

const Payment = () => {
    return (
        <div id='pay_body'>
            <div id='pay_nav'>
                <div id='inner_pay_nav'>
                    <div id='pay_img'>
                        <img src='http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png' />
                    </div>
                    <div id='pay_profile'>
                        <div id='profile_circle'>
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <p>Shivani Mhatre</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div id='pay_content'>
                <div id='inner_pay_content'>
                    <h1>Checkout</h1>
                    <div id='pay_detail'>
                        <div id='add_detail'>
                            <div id='top_add'>
                                <div id='pay_icon'>
                                    <div id='pay_icon_left'>
                                        <span>icon</span>
                                        <span>Add Shipping Address</span>
                                    </div>
                                    <div id='pay_icon_right'>
                                        <p>Clear All</p>
                                    </div>
                                </div>
                            </div>
                            <div id='bottom_add'>
                                <div id='bottom_add_left'>
                                    <div>
                                        <input type='text' value='First Name(Required*)' placeholder='First Name(Required*)' />
                                        <input type='text' value='Last Name(Required*)' placeholder='Last Name(Required*)' />
                                    </div>
                                    <div>
                                        <input type='text' value='City/District (Required)*' placeholder='First Name(Required*)' />
                                    </div>
                                    <div>
                                        <input type='text' value='State (Required)*' placeholder='First Name(Required*)' />
                                    </div>
                                    <div>
                                        <select>
                                            <option>Landmark</option>
                                        </select>
                                    </div>
                                    <div id='cbox'>
                                        <div>
                                            <input type="radio" value='Home' />Home
                                        </div>
                                        <div>
                                            <input type="radio" value='Home' />Office
                                        </div>
                                    </div>
                                </div>
                                <div id='bottom_add_right'>
                                    <div>
                                        <input type='number' value='Last Name(Required*)' placeholder='Last Name(Required*)' />
                                    </div>
                                    <div>
                                        <textarea name="postContent" rows={4} cols={40} value="shivani" />
                                        <p style={{ fontSize: '10px' }}>Character Limit 120</p>
                                    </div>
                                    <div>
                                        <p>+91</p>
                                        <input type='number' value='Enter Your no' />
                                    </div>
                                </div>
                            </div>
                            <div id='save'>
                                <p style={{ color: 'deeppink' }}>Cancel</p>
                                <div id='save_btn'>
                                    <input type="button" value="save and Continue" />
                                </div>
                            </div>
                        </div>

                        <div id='billing'>
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
                                <p><b>Total Paybale</b>  </p>
                                <p>₹1399</p>
                            </div>
                            <div id='secure'>
                                <img src='https://www.tatacliq.com/src/cart/components/img/lock.svg' />
                                <p style={{fontSize:'13px',color:'gray'}}> Safe and secure payments. Easy returns. 100% Authentic products.</p>
                            </div> 
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment