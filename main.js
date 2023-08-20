import "./style.css";
import Logo from "./assets/logo.webp";
import imgcard1 from "./assets/static_banner_1691218181_64cdf105a381f.webp";
import imgcard2 from "./assets/static_banner_1691218181_64cdf105e5b07.webp";
import imgcard3 from "./assets/static_banner_1691255543_64ce82f7c471b.webp";
import { navBarDropDownMenu, searchBar } from "./script.js";

document.querySelector("#app").innerHTML = `
<div>
<nav class="nabvar">
  <div>
    <img src="${Logo}" alt="Logo" />
  </div>
  <div class="allMenu">
    <div>
      <ul class="topMenu">
        <li>Trending</li>
        <li>Pre-Orders</li>
        <li>Upcoming</li>
        <li>Support 24/7</li>
      </ul>
    </div>
    <div class="searchBarContainer">
      <div class="downMenuContainer">
      <div class="downMenuDisplay">
      <ul class="downMenu">
          <li class="menuIcons" id="listOne">
            <i class="fa-solid fa-laptop"></i>PC<i
              class="fa-solid fa-angle-down"
            ></i>
          </li>
          <li class="menuIcons">
            <i class="fa-brands fa-playstation"></i>Playstation
          </li>
          <li class="menuIcons">
            <i class="fa-brands fa-xbox"></i>Xbox
          </li>
          <li class="menuIcons">
            <i class="fa-solid fa-gamepad"></i>Nintendo
          </li>
          <li class="searchIcon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
        
        <div class="searchBarDisplay">
          <div class="searchBar">
            <input
              type="text"
              placeholder="Minecraft, RPG, multiplayer..."
            />
            <label htmlFor="">Advaced Search</label>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-xmark cancle"></i>
    </div>
  </div>
  <div class="cartIcons">
    <i class="fa-solid fa-cart-plus"></i>
    <i class="fa-regular fa-user"></i>
    <i class="fa-solid fa-bars bar-icons"></i>
  </div>
</nav>
<div class="herosection">
  <div class="overlay"></div>
  <div class="herosectionText">
    <span class="daysCount">In 15 days</span>
    <h3>
      Assassin's Creed Digital Premium<br />
      Edition + Early Access
    </h3>
    <div class="priceTag">
      <span>-25%</span>
      <h2>74.89$</h2>
    </div>
  </div>
</div>
<div class="trendindContainer">
  <div class="trendindHeaer">
    <h2 class="trendindHeaerTitle">Trending</h2>
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
  </div>
</div>
<div>
  <div class="dropDownOverlay"></div>
  <div class="dropDownMenu">
    <div class="dropDownMenuTitle">
      <span>Platforms</span>
      <span>View All</span>
    </div>
    <div class="dropDownMenuItems">
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
      <div class="dropDownMenuItem">
        <i class="fa-brands fa-steam"></i>
        <span>Steam</span>
      </div>
    </div>
    <div class="dropDownMenuTitle">
      <span>Platforms</span>
      <span>View All</span>
    </div>
  </div>
</div>
</div>
`;

navBarDropDownMenu(document.querySelector(".downMenu"));
searchBar(document.querySelector(".searchIcon"));
