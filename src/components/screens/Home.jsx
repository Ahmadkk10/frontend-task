import React from "react";
import Footer from "../Footer";
import "./Homed.css";
const Home = () => {
  return (
    <div className="carosal">
      <div class="container">
          <div class="slideshow">
            {/* <!-- carousel control buttons --> */}
            <button class="slide-btn slide-btn-1"></button>
            <button class="slide-btn slide-btn-2"></button>
            <button class="slide-btn slide-btn-3"></button>
            <button class="slide-btn slide-btn-4"></button>
            <button class="slide-btn slide-btn-5"></button>
            <button class="slide-btn slide-btn-6"></button>
            <button class="slide-btn slide-btn-7"></button>
            <button class="slide-btn slide-btn-8"></button>
            <button class="slide-btn slide-btn-9"></button>
            <button class="slide-btn slide-btn-10"></button>
            <button class="slide-btn slide-btn-11"></button>
            <button class="slide-btn slide-btn-12"></button>
            <button class="slide-btn slide-btn-13"></button>
            <button class="slide-btn slide-btn-14"></button>
            {/* <!-- carousel wrapper which contains all images --> */}
            <div class="slideshow-wrapper">
              <div class="slide">
                <a href="https://www.myntra.com/shop/prebuzz">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/fusion-wear?f=Categories%3AKurta%20Sets%2CKurtas&rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/735e64d7-b478-4c04-9a2d-0c93ae257cfc1654097850282-Kurtas-Sets_Desktop.jpg"
                    alt="pic"
                 />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/womens-western-wear?f=Categories%3ADresses&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg"
                    alt="pic"
                 />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/myntra-fashion-store?f=Brand%3AAllen%20Solly%2CArrow%2CBlackberrys%2CColorPlus%2CDENNISON%2CExcalibur%2CHancock%2CINVICTUS%2CJAINISH%2CLouis%20Philippe%2CLouis%20Philippe%20Ath.Work%2CMarks%20%26%20Spencer%2CPark%20Avenue%2CPeter%20England%2CPeter%20England%20Elite%2CRaymond%2CTHE%20BEAR%20HOUSE%2CV%20Dot%2CVan%20Heusen%3A%3ACategories%3AShirts%2CShorts%2CTrousers%2CTshirts%3A%3AGender%3Amen%2Cmen%20women&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/sportscategory?f=Categories%3ACasual%20Shoes%2CSports%20Shoes%3A%3AGender%3Amen%2Cmen%20women">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/fusion-wear?f=Categories%3AKurta%20Sets&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/watch?f=Brand%3AArmani%20Exchange%2CEmporio%20Armani%2CFossil%2CMichael%20Kors%2CTommy%20Hilfiger%3A%3ACategories%3AWatch%20Gift%20Set%2CWatches%3A%3AGender%3Amen%20women%2Cwomen">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3d0ac179-044c-4060-a28a-89bbf63a112f1654099355774-Premium-Watches_DK--1-.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/mens-sports-apparel?rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/men-innerwear?f=Categories%3ABoxers%2CBriefs%2CInnerwear%20Vests%2CLounge%20Pants%2CLounge%20Shorts%2CLounge%20Tshirts%2CNight%20suits%2CPyjamas%2CTrunk&rf=Price%3A131.0_500.0_131.0%20TO%20500.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk--1-.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/ninja2plus">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/a1a2d3b7-f227-4ee9-9026-4f0754e219851654006760962-Smartwatches_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/women-apparel?f=Categories%3ATops%2CTshirts">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/5b4e9f29-f0ef-41bf-be9d-83f468c823cc1654006815381-Tees---Tops_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/lingerie?f=Categories%3ABra%2CBriefs%2CLingerie%20Set&rf=Discount%20Range%3A10.0_100.0_10.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/215d36d4-54d5-4b82-ba76-d86f5eed17a81654006864315-Staycation-Essentials_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/fusion-wear?rf=Discount%20Range%3A60.0_100.0_60.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1768e5bd-41a3-4373-b583-eafb68c41f401654006978408-Indian-Wear_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
              <div class="slide">
                <a href="https://www.myntra.com/handbags-and-bags?f=Categories%3AHandbags%2CWallets&rf=Discount%20Range%3A40.0_100.0_40.0%20TO%20100.0">
                  <img
                    class="slide-img"
                    src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/ad85684f-9dda-47e2-bdfe-c6d2ea3bb7271654007028955-Handbags-Wallets_DK.jpg"
                    alt="pic"
                  />
                </a>
              </div>
            </div>
          </div>
   
      </div>
      <div className="h1-container">
        <h1 className="h1-title">DEAL OF THE DAY</h1>
      </div>
      <div className="grid-pic">
        <picture className="pic-div">
          <source
            media="(min-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(max-width: 768px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(min-width: 768px) and (max-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/93dfef3a-8a0f-4fc0-9b85-18994c0317811654259359380-Indian-Wear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/baf2eea1-99bb-4450-8e06-76ee16912b4a1654259491840-Myntra-Unique-T-Shirts-----1.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c56d1bc6-31fa-45fd-a028-ef1f64d2aba71654259537347-Handbags---Accessories.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/578fb727-c9fd-4343-a18c-ce6051baedf01654259561154-Sportswear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c62d7100-210f-4053-9204-bf756c22127d1654259588435-Tops---Tees--8-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/58bd2a00-7ca7-43b2-ba9b-28bb86338f301654271113512-Livon.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f43702f5-3d08-4042-a881-f5597cd7e7a01654271113504-PaulasChoice.jpg"
            alt="pic"
          />
          </a>
        </picture>
      </div>

      <div className="h1-container">
        <h1 className="h1-title">BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
      </div>
      <div className="grid-pic">
        <picture className="pic-div">
          <source
            media="(min-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(max-width: 768px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(min-width: 768px) and (max-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/93dfef3a-8a0f-4fc0-9b85-18994c0317811654259359380-Indian-Wear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/baf2eea1-99bb-4450-8e06-76ee16912b4a1654259491840-Myntra-Unique-T-Shirts-----1.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c56d1bc6-31fa-45fd-a028-ef1f64d2aba71654259537347-Handbags---Accessories.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/578fb727-c9fd-4343-a18c-ce6051baedf01654259561154-Sportswear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c62d7100-210f-4053-9204-bf756c22127d1654259588435-Tops---Tees--8-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/58bd2a00-7ca7-43b2-ba9b-28bb86338f301654271113512-Livon.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f43702f5-3d08-4042-a881-f5597cd7e7a01654271113504-PaulasChoice.jpg"
            alt="pic"
          />
          </a>
        </picture>
        <picture className="pic-div">
          <source
            media="(min-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(max-width: 768px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(min-width: 768px) and (max-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/93dfef3a-8a0f-4fc0-9b85-18994c0317811654259359380-Indian-Wear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/baf2eea1-99bb-4450-8e06-76ee16912b4a1654259491840-Myntra-Unique-T-Shirts-----1.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c56d1bc6-31fa-45fd-a028-ef1f64d2aba71654259537347-Handbags---Accessories.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/578fb727-c9fd-4343-a18c-ce6051baedf01654259561154-Sportswear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c62d7100-210f-4053-9204-bf756c22127d1654259588435-Tops---Tees--8-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/58bd2a00-7ca7-43b2-ba9b-28bb86338f301654271113512-Livon.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f43702f5-3d08-4042-a881-f5597cd7e7a01654271113504-PaulasChoice.jpg"
            alt="pic"
          />
          </a>
        </picture>
      </div>

      <div className="h1-container">
        <h1 className="h1-title">TOP PICKS</h1>
      </div>
      <div className="grid-pic">
        <picture className="pic-div">
          <source
            media="(min-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(max-width: 768px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <source
            media="(min-width: 768px) and (max-width: 1024px)"
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
          />
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/2db37deb-e8fd-4aec-98b0-1dd0311577181654259321095-Jeans--2-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/93dfef3a-8a0f-4fc0-9b85-18994c0317811654259359380-Indian-Wear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/baf2eea1-99bb-4450-8e06-76ee16912b4a1654259491840-Myntra-Unique-T-Shirts-----1.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c56d1bc6-31fa-45fd-a028-ef1f64d2aba71654259537347-Handbags---Accessories.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/578fb727-c9fd-4343-a18c-ce6051baedf01654259561154-Sportswear--12-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/c62d7100-210f-4053-9204-bf756c22127d1654259588435-Tops---Tees--8-.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/58bd2a00-7ca7-43b2-ba9b-28bb86338f301654271113512-Livon.jpg"
            alt="pic"
          />
          </a>
          <a href="https://www.myntra.com/women-ethnic-wear?rf=Price%3A399.0_22620.0_399.0%20TO%2022620.0&sort=popularity">
          <img
            src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f43702f5-3d08-4042-a881-f5597cd7e7a01654271113504-PaulasChoice.jpg"
            alt="pic"
          />
          </a>
        </picture>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
