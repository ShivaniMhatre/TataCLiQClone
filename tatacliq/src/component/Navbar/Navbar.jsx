import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Navbar.css'



const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [color, setColor] = useState(false);
  const [backGround, setBackGround] = useState(false);
  const [rotate, setRotate] = useState(false)
  const redirect = useNavigate()

  function FallDown() {
    setDropDown(true);
    setColor(true);
    setBackGround(true)
    setRotate(true)
  }

  function Fallup() {
    setDropDown(false);
    setColor(false);
    setBackGround(false);
    setRotate(false);
  }


  return (
    <div id="navbar">
      <div id="left">
        <img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png" />
      </div>
      <div id="right">
        <div id="up">
          <p onClick={()=>redirect('/home')}>Tata CLiQ Luxury</p>
          <span>
            <p>CLiQ Cash</p>
            <p>Gift Card</p>
            <p>CliQ Care</p>
            <p>Track Orders</p>
            <p>Sign in/ Sign up</p>
          </span>
        </div>
        <div id="down">
          <div id="categories" onMouseEnter={FallDown} onMouseLeave={Fallup}>
            <p>Categories</p>
            <i className="fa-solid fa-angle-down" style={{ transform: rotate ? "rotate(180deg)" : "rotate(0deg)" }}></i>
          </div>
          <div>
            <p>Brands</p>
            <i className="fa-solid fa-angle-down" ></i>
          </div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder='Search for Products' />
          </div>
          <div>
            <i class="fa-regular fa-heart fa-sm" onClick={()=>redirect('/wish')}></i>
            <i class="fa-solid fa-bag-shopping fa-sm" onClick={()=>redirect('/cart')}></i>
          </div>
        </div>



        {dropDown && <div id="dropdown" onMouseEnter={FallDown} onMouseLeave={Fallup} style={{ backgroundColor: backGround? "white" : "black", color: color ? "black" : "white" }}>
          <div>
            <div onClick={()=>redirect('/women')}>
              <p>Women's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div onClick={()=>redirect('/men')}>
              <p >Men's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div onClick={()=>redirect('/kids')}>
              <p>Kids's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div onClick={()=>redirect('/hk')}>
              <p>Home & Kitchen</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div onClick={()=>redirect('/beauty')}>
              <p>Beauty</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div>
              <p>Gadgets</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div onClick={()=>redirect('/jewel')}>
              <p>Jewellery</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
            <div>
              <p>Accessories</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          {/* <div id="dropwomen">
            <div>
              <h4>Shop All Ethnic Wear</h4>
              <p>Kurtis & Kurtas</p>
              <p>Suits</p>
              <p>Sarees</p>
              <p>Lehengas</p>
              <p>Bottoms</p>
              <p>Blouses & Fabrics</p>
              <p>Dupattas</p>
            </div>
            <div>
              <p>Shorts</p>
              <p>Jackets & Blazers</p>
              <p>Leggings</p>
              <p>Capris</p>
              <p>Jumpsuits</p>
              <p>Shrugs</p>
              <p>Sweaters</p>
              <p>Sweatshirts</p>
            </div>
            <div>
              <h4>Lingerie & Lounge Sets</h4>
              <p>Bras</p>
              <p>Panties</p>
              <p>Lingerie Sets</p>
              <p>Camisoles</p>
              <p>Sleepwear & Robes</p>
              <p>Shapewear</p>
              <p>Swimwear</p>
            </div>
            <div>
              <h4>Bags, Wallets & Clutches</h4>
              <p>Handbags</p>
              <p>Tote Bags</p>
              <p>Sling Bags</p>
              <p>Backpacks</p>
              <p>Wallets</p>
              <p>Clutches</p>
              <p>Premium Handbags</p>
            </div>
            <div>
              <h4>Shop All Western Wear</h4>
              <p>Tops & Tunics</p>
              <p>Dresses</p>
              <p>Jeans</p>
              <p>Shirts</p>
              <p>Trousers</p>
              <p>Skirts</p>
            </div>

            <div>
              <h4>Activewear & Sportswear</h4>
              <p>T-shirts</p>
              <p>Shorts</p>
              <p>Sets</p>
              <p>Jackets</p>
              <p>Track Pants</p>
              <p>Innerwear</p>
            </div>

            <div>
              <h4>Shop All Footwear</h4>
              <p>Casual Footwear</p>
              <p>Boots</p>
              <p>Sneakers</p>
              <p>Flip Flops</p>
              <p>Sports Shoes</p>
              <p>Ethnic Footwear</p>
            </div>

            <div>
              <h4>Jewellery</h4>
              <p>Gold</p>
              <p>Diamond</p>
              <p>Silver</p>
              <p>Fashion Jewellery</p>
              <h4>Watches</h4>
              <p>Smart</p>
            </div>
          </div> */}
        </div>}

        {/* <div id="dropmen">
              <div>
                <h4>Shop All Ethnic Wear</h4>
                <p>Kurtis & Kurtas</p>
                <p>Suits</p>
                <p>Sarees</p>
                <p>Lehengas</p>
                <p>Bottoms</p>
                <p>Blouses & Fabrics</p>
                <p>Dupattas</p>
              </div>
              <div>
                <p>Shorts</p>
                <p>Jackets & Blazers</p>
                <p>Leggings</p>
                <p>Capris</p>
                <p>Jumpsuits</p>
                <p>Shrugs</p>
                <p>Sweaters</p>
                <p>Sweatshirts</p>
              </div>
              <div>
                <h4>Lingerie & Lounge Sets</h4>
                <p>Bras</p>
                <p>Panties</p>
                <p>Lingerie Sets</p>
                <p>Camisoles</p>
                <p>Sleepwear & Robes</p>
                <p>Shapewear</p>
                <p>Swimwear</p>
              </div>
              <div>
                <h4>Bags, Wallets & Clutches</h4>
                <p>Handbags</p>
                <p>Tote Bags</p>
                <p>Sling Bags</p>
                <p>Backpacks</p>
                <p>Wallets</p>
                <p>Clutches</p>
                <p>Premium Handbags</p>
              </div>
              <div>
                <h4>Shop All Western Wear</h4>
                <p>Tops & Tunics</p>
                <p>Dresses</p>
                <p>Jeans</p>
                <p>Shirts</p>
                <p>Trousers</p>
                <p>Skirts</p>
              </div>
              
              <div>
                <h4>Activewear & Sportswear</h4>
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Sets</p>
                <p>Jackets</p>
                <p>Track Pants</p>
                <p>Innerwear</p>
              </div>
              
              <div>
                <h4>Shop All Footwear</h4>
                <p>Casual Footwear</p>
                <p>Boots</p>
                <p>Sneakers</p>
                <p>Flip Flops</p>
                <p>Sports Shoes</p>
                <p>Ethnic Footwear</p>
              </div>
              
              <div>
                <h4>Jewellery</h4>
                <p>Gold</p>
                <p>Diamond</p>
                <p>Silver</p>
                <p>Fashion Jewellery</p>
                <h4>Watches</h4>
                <p>Smart</p> 
              </div>
            </div> */}

        {/* {drop && <div id="dropmen">
              <div>
                <h4>Tops</h4>
                <p>T-shirts</p>
                <p>Polo T-shirts</p>
                <p>Shirts</p>
                <p>Sweatshirts</p>
                <p>Bottoms</p>
                <p>Jackets</p>
                <p>Suits</p>
                <p>Blazers</p>
                <h4>Bottoms</h4>
                <p>Jeans</p>
                <p>Chinos</p>
                <p>Trousers</p>
                <p>Formal Trousers</p>
                <p>Shorts</p>
              </div>
              <div>
                <p>Joggers</p>
                <p>Trackpants</p>
                <h4>Activewear</h4>
                <p>T-Shirts & Jerseys</p>
                <p>Sports Shorts</p>
                <p>Sports Jackets</p>
                <p>Joggers</p>
                <h4>Innerwear</h4>
                <p>Boxers</p>
                <p>Briefs</p>
                <p>Trunks</p>
                <p>Vests</p>
                <p>Night Suits</p>
                <h4>Footwear</h4>
                <p>Casual Shoes</p>
              </div>
              <div>
                <p>Sneakers</p>
                <p>Formal Shoes</p>
                <p>Running Shoes</p>
                <p>Training Shoes</p>
                <p>Sports Shoes</p>
                <p>Boots</p>
                <p>Flip Flops</p>
                <p>Sandals & Floaters</p>
                <h4>Watches</h4>
                <p>Smartwatches</p>
                <p>Work Watches</p>
                <p>Casual Watches</p>
                <p>Party Watches</p>
                <p>Digital watches</p>
                <p>Multifunctional Watches</p>
              </div> 
              <div>
                <h4>Bags, Backpacks & Wallets</h4>
                <p>Backpacks</p>
                <p>Wallets</p>
                <p>Messenger Bags</p>
                <p>Crossbody Bags</p>
                <h4>Fashion Accessories</h4>
                <p>Belts</p>
                <h4>Ties</h4>
                <p>Cufflinks</p>
                <p>Sunglasses</p>
              </div>
            </div>} */}



      </div>
    </div>
  )
}

export default Navbar
