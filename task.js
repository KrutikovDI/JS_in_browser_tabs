const tabNavigation = document.querySelector(".tab__navigation");
const tabs = document.querySelectorAll(".tab");
const tabArray = [...tabs];
const tabContents = document.querySelectorAll(".tab__content");
const tabContentsArray = [...tabContents];
tabNavigation.addEventListener("click", (e) => {
  let tab = e.target;
  if (tab.className == "tab__navigation") {
    e.preventDefault()}
  else {
    let index = tabArray.indexOf(tab);
    for (i = 0; i < tabArray.length; i++) {
      tabArray[i].className = "tab";
    }
    tab.classList.add("tab_active");
    for (j = 0; j < tabContentsArray.length; j++) {
      tabContentsArray[j].className = "tab__content";
    }
    tabContentsArray[index].classList.add('tab__content_active');
  }
});