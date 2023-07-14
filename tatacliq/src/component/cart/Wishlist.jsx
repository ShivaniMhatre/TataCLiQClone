import React from 'react'
import './../../../src/component/cart/Wishlist.css'
import Navbar from '../Navbar/Navbar'
import wish_data from './../../../src/data/wishlist.json'

const Wishlist = () => {
    return (
        <div id='wish_body'>
            <Navbar />

            <div id='wish_content'>
                <div id='inner_wish'>
                    {wish_data.map((pro) => (
                        <div className='wish_detail'>
                            <div className='remove'>
                                <img src='https://www.tatacliq.com/src/wishlist/components/img/Delete.svg' />
                            </div>
                            <div className='wish_img'>
                                <img src={pro.image} />
                            </div>

                            <div className='bag_btn'>
                                <input type='button' value='Add To Bag' />
                            </div>
                            <div className='wish_text'>
                                <p>{pro.name}</p>
                                <p>{pro.description}</p>
                                <span>₹{pro.price}</span>
                                <span><s>₹{pro["Before Discount"]}</s> </span>
                                {pro.Ratings && <div>
                                    <span>
                                        <p>{pro.Ratings}</p>
                                        <i class="fa-solid fa-star fa-2xs"></i>
                                    </span>
                                    <span>{pro.count}</span>
                                </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist