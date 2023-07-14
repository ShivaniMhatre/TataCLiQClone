import React from 'react'
import './../../../src/component/kids/Kids.css'
import kids_data from './../../../src/data/kids.json'

const Kids = () => {
    return (
        <div id='kids'>
            <div id="inner_kids">
                <div id='kids_heading'>
                    <h2>Kids</h2>
                    <p>4524 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='kids_content'>
                    <div id='kids_left'>
                        <div id='inner_kidsleft'>
                            <div id='kids_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='kids_dept'>
                                <p>Departkidst</p>
                                <div id='inner_kidsdept'>
                                    <p>Kids's Clothing</p>
                                </div>
                            </div>
                            <div id='kids_cate'>
                                <p>Category</p>
                                <i class="fa-thin fa-plus"></i>
                                {/* <div id='inner_kidscate'>
                                    <p>Ethnic Wear</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div> */}
                            </div>
                            <div className="kids_other">
                                <p>Product Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Color</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Price</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Fit</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Fabric Family</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Sleeve</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Collar</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="kids_other">
                                <p>Pattern</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='kids_right'>
                        {kids_data.map((pro) => (
                            <div className='kids_detail'>
                                <div className='kids_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='kids_text'>
                                    <p>{pro.name}</p>
                                    <p>{pro.description}</p>
                                    <span>₹{pro.price}</span>
                                    <span><s>{pro["Before Discount"]}</s> </span>
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

export default Kids