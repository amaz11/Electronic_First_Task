import "./style.css";
import { setupCounter } from "./counter.js";
import Logo from "./assets/logo.webp";
import imgcard1 from "./assets/static_banner_1691218181_64cdf105a381f.webp";
import imgcard2 from "./assets/static_banner_1691218181_64cdf105e5b07.webp";
import imgcard3 from "./assets/static_banner_1691255543_64ce82f7c471b.webp";

document.querySelector("#app").innerHTML = `
  <div>
  <nav class="nabvar">
  <div>
    <img src="${Logo}" alt="Logo" />
  </div>
  <div>
    <div>
      <ul class="topMenu">
        <li>Trending</li>
        <li>Pre-Orders</li>
        <li>Upcoming</li>
        <li>Support 24/7</li>
      </ul>
    </div>
    <div class="downMenuContainer">
      <ul class="downMenu">
        <li class="menuIcons"><i class="fa-solid fa-laptop"></i>PC<i class="fa-solid fa-angle-down"></i></li>
        <li class="menuIcons"><i class="fa-brands fa-playstation"></i>Playstation<i class="fa-solid fa-angle-down"></i></li>
        <li class="menuIcons"><i class="fa-brands fa-xbox"></i>Xbox<i class="fa-solid fa-angle-down"></i></li>
        <li class="menuIcons"><i class="fa-solid fa-gamepad"></i>Nintendo<i class="fa-solid fa-angle-down"></i></li>
        <li class="searchIcon"><i class="fa-solid fa-magnifying-glass"></i></li>
      </ul>
    </div>
  </div>
  <div>S
    <span>Cart</span>
    <span>Person</span>
  </div>
</nav>
  <div class="herosection">
      <div class="overlay"></div>
      <div class="herosectionText">
        <span class="daysCount">In 15 days</span>
        <h3 >Assassin's Creed Digital Premium<br> Edition + Early Access</h3>
        <div class="priceTag">
          <span>-25%</span>
          <h2>74.89$</h2>
        </div>
      </div>
    </div>
    <div class="trendindContainer">
    <div class="trendindHeaer">
    <h2>Trending</h2>
    <button class="viewBtn">View All</button>
    </div>
     <div class="cardItems">
        <div class="cardItem">
          <img class="cardItemImg" src="${imgcard1}" alt="" />
          <div class="nameTag">
          <span>Sengoku Dynaty</span>
          <span>19.99$</span>
          </div>
        </div>
        <div class="cardItem">
          <img class="cardItemImg" src="${imgcard2}" alt="" />
          <div class="nameTag">
          <span>Sengoku Dynaty</span>
          <span>19.99$</span>
          </div>
        </div>
        <div class="cardItem">
          <img class="cardItemImg" src="${imgcard3}" alt="" />
          <div class="nameTag">
          <span>Sengoku Dynaty</span>
          <span>19.99$</span>
          </div>
        </div>
        <div class="cardItem">
          <img class="cardItemImg" src="${imgcard3}" alt="" />
          <div class="nameTag">
          <span>Sengoku Dynaty</span>
          <span>19.99$</span>
          </div>
        </div>
     </div>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
