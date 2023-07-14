import React from 'react'
import './../../../src/component/Women/Women.css'
import women_data from './../../../src/data/women.json'

const Women = () => {
    return (
        <div id='women'>
            <div id="inner_women">
                <div id='women_heading'>
                    <h2>Ethnic wear for women</h2>
                    <p>49423 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='women_content'>
                    <div id='women_left'>
                        <div id='inner_womenleft'>
                            <div id='women_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='women_dept'>
                                <p>Departwoment</p>
                                <div id='inner_womendept'>
                                    <p>Women's Clothing</p>
                                </div>
                            </div>
                            <div id='women_cate'>
                                <p>Category</p>
                                <div id='inner_womencate'>
                                    <p>Ethnic Wear</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                            </div>
                            <div className="women_other">
                                <p>Product Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Color</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Price</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Fit</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Fabric Family</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Sleeve</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Collar</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="women_other">
                                <p>Pattern</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='women_right'>
                        {women_data.map((pro) => (
                            <div className='women_detail'>
                                <div className='women_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='women_text'>
                                    <p>{pro.name}</p>
                                    <p>{pro.description}</p>
                                    <span>₹{pro.price}</span>
                                    <span><s>₹{pro["Before Discount"]}</s> </span>
                                    {pro.Ratings && <div>
                                        <span>
                                            <p>{pro.Ratings}</p>
                                            <i class="fa-solid fa-star fa-xs"></i>
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
        </div>
    )
}

export default Women