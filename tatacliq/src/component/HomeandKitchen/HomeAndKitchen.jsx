import React from 'react'
import './../../../src/component/HomeandKitchen/HomeAndKitchen.css'
import hk_data from './../../../src/data/HomeandKitchen.json'

const HomeAndKitchen = () => {
    return (
        <div id='hk'>
            <div id="inner_hk">
                <div id='hk_heading'>
                    <h2>Single Bedsheet</h2>
                    <p>1029 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='hk_content'>
                    <div id='hk_left'>
                        <div id='inner_hkleft'>
                            <div id='hk_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='hk_dept'>
                                <p>Department</p>
                                <div id='inner_hkdept'>
                                    <p>Home</p>
                                </div>
                            </div>
                            <div id='hk_cate'>
                                <p>Category</p>
                                <div id='inner_hkcate'>
                                    <p>Bed Linen</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                            </div>
                            <div id='hk_pro'>
                                <p>Product Type</p>
                                <div id='inner_hkpro'>
                                    <p>Bed Sheet</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                            </div>
                            
                            <div className="hk_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Type</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Color</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Price</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Fit</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Fabric Family</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Sleeve</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Collar</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="hk_other">
                                <p>Pattern</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='hk_right'>
                        {hk_data.map((pro) => (
                            <div className='hk_detail'>
                                <div className='hk_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='hk_text'>
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

export default HomeAndKitchen