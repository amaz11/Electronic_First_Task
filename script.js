export const navBarDropDownMenu = (element) => {
  let listItems = element.getElementsByClassName("menuIcons");
  const dropDownOverlay = document.querySelector(".dropDownOverlay");
  const dropDownMenu = document.querySelector(".dropDownMenu");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("menuActive");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" menuActive", "");
      }
      this.className += " menuActive";
      console.log(listItems[i]);
      if (current[0].id === "listOne") {
        dropDownOverlay.style.display = "block";
        dropDownMenu.style.transition = "all 1s linear";
        dropDownMenu.classList.add("active");
      }
    });
  }
  dropDownOverlay.addEventListener("click", () => {
    dropDownOverlay.style.display = "none";
    dropDownMenu.classList.remove("active");
  });
};

export const searchBar = (element) => {
  element.addEventListener("click", () => {
    const downMenuDisplay = document.querySelector(".downMenuDisplay");
    const searchBarDisplay = document.querySelector(".searchBarDisplay");
    const cancle = document.querySelector(".cancle");
    downMenuDisplay.style.width = "300px";
    downMenuDisplay.style.width = "0px";
    downMenuDisplay.style.transition = "width 2s";
    setTimeout(() => {
      downMenuDisplay.style.zIndex = "-1";
      searchBarDisplay.style.zIndex = "5";
      cancle.style.visibility = "visible";
    }, 2000);
    cancle.addEventListener("click", () => {
      downMenuDisplay.style.width = "300px";
      downMenuDisplay.style.width = "700px";
      downMenuDisplay.style.zIndex = "10";
      searchBarDisplay.style.zIndex = "-1";
      cancle.style.visibility = "hidden";
    });
  });
};
