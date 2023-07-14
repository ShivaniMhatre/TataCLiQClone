import React from 'react'
import './../../../src/component/Beauty/Beauty.css'
import beauty_data from './../../../src/data/beauty.json'

const Beauty = () => {
    return (
        <div id='beauty'>
            <div id="inner_beauty">
                <div id='beauty_heading'>
                    <h2>Skinn by titan beauty & grooming</h2>
                    <p>67 Products</p>
                    <div id='popularity'>
                        <select>
                            <option><span>Sort By : </span>Popularity</option>
                        </select>
                        {/* <i class="fa-solid fa-arrow-down-wide-short"></i> */}
                        <i class="fa-solid fa-list"></i>
                    </div>
                </div>
                <div id='beauty_content'>
                    <div id='beauty_left'>
                        <div id='inner_beautyleft'>
                            <div id='beauty_filter'>
                                <span>
                                    <p>Filters</p>
                                    <p>Clear</p>
                                </span>
                            </div>
                            <div id='beauty_dept'>
                                <p>Departbeautyt</p>
                                <div id='inner_beautydept'>
                                    <p>Beauty and Grooming</p>
                                </div>
                            </div>
                            <div id='beauty_cate'>
                                <p>Category</p>
                                <div id='inner_beautycate'>
                                    <p>Fragranance & Perfumes</p>
                                    <i class="fa-solid fa-xmark fa-sm"></i>
                                </div>
                            </div>
                            <div className="beauty_other">
                                <p>Subcategory</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Price</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Gender</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Size</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>combo</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Brand</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>All Discount</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                            <div className="beauty_other">
                                <p>Availabilty</p>
                                <i class="fa-thin fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div id='beauty_right'>
                        {beauty_data.map((pro) => (
                            <div className='beauty_detail'>
                                <div className='beauty_img'>
                                    <img src={pro.image} />
                                </div>
                                <div className='beauty_text'>
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

export default Beauty