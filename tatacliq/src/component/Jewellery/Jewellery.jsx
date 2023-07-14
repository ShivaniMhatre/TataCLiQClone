import React from 'react'
import './../../../src/component/Jewellery/Jewellery.css'
import jewel_data from './../../../src/data/Jewellery.json'

const Jewellery = () => {
    return (
        <div id='jewel'>
            <div id="inner_jewel">
                <div id='jewel_heading'>
                    <h2>Jewellery</h2>
                    <p>41228 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='jewel_content'>
                    <div id='jewel_left'>
                        <div id='inner_jewelleft'>
                            <div id='jewel_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='jewel_dept'>
                                <p>Department</p>
                                <div id='inner_jeweldept'>
                                    <p>Jewellery</p>
                                </div>
                            </div>
                            <div className="jewel_other">
                                <p>Category</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Suitable For</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Price </p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Metal</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Purity</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Collection</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Stone</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Metal Color</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="jewel_other">
                                <p>Ocassion</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='jewel_right'>
                        {jewel_data.map((pro) => (
                            <div className='jewel_detail'>
                                <div className='jewel_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='jewel_text'>
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

export default Jewellery