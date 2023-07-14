import React from 'react'
import './../../../src/component/Men/Men.css'
import men_data from './../../../src/data/products.json'

const Men = () => {
    return (
        <div id='men'>
            <div id="inner_men">
                <div id='men_heading'>
                    <h2>Men's Wear</h2>
                    <p>1234 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='men_content'>
                    <div id='men_left'>
                        <div id='inner_menleft'>
                            <div id='men_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='men_dept'>
                                <p>Department</p>
                                <div id='inner_mendept'>
                                    <p>Men's Clothing</p>
                                </div>
                            </div>
                            <div id='men_cate'>
                                <p>Category</p>
                                <div id='inner_mencate'>
                                    <p>Casual Wear</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                            </div>
                            <div className="men_other">
                                <p>Product Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Color</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Price</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Fit</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Fabric Family</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Sleeve</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Collar</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="men_other">
                                <p>Pattern</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='men_right'>
                        {men_data.map((pro) => (
                            <div className='men_detail'>
                                <div className='men_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='men_text'>
                                    <p>{pro.name}</p>
                                    <p>{pro.description}</p>
                                    <span>₹{pro.price}</span>
                                    <span><s>₹{pro["Before Discount"]}</s> </span>
                                    <div>
                                        <span>
                                            <p>{pro.Ratings}</p>
                                            <i class="fa-solid fa-star fa-xs"></i>
                                        </span>
                                        <span>{pro.count}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Men