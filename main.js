import "./style.css";
import { setupCounter } from "./counter.js";
import Logo from "./assets/logo.webp";

document.querySelector("#app").innerHTML = `
  <div>
  <nav class="nabvar">
  <div>
    <img src="${Logo}" alt="Logo" />
  </div>
  <div>
    <div>
      <ul>
        <li>Trending</li>
        <li>Pre-Orders</li>
        <li>Upcoming</li>
        <li>Support 24/7</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>PC</li>
        <li>Playstation</li>
        <li>Xbox</li>
        <li>Nintendo</li>
        <li>Search</li>
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
  </div>
`;

setupCounter(document.querySelector("#counter"));
