// woman nav클릭에 따른 이미지 변화
document
  .getElementById("slider-nav-container")
  .addEventListener("click", function (e) {
    const click_nav = e.target.parentElement;
    const list = document.getElementsByClassName("slider-nav");
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains("slider-nav-selected")) {
        list[i].classList.remove("slider-nav-selected");
      }
    }

    const image_list = document.getElementsByClassName("slider-content-image");
    for (let i = 0; i < image_list.length; i++) {
      if (image_list[i].classList.contains("selected-image")) {
        image_list[i].classList.remove("selected-image");
      }
    }
    document
      .getElementById(click_nav.id + "-image")
      .classList.add("selected-image");
    click_nav.classList.add("slider-nav-selected");
  });

//  nav바 하나씩 클릭해보는 함수부터 연습
// beauty클릭 시 -> 뷰티 이미지, 뷰티글자 볼드체
// document.getElementById("woman-beauty").addEventListener("click", function () {
//   const list = document.getElementsByClassName("slider-nav");
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].classList.contains("slider-nav-selected")) {
//       list[i].classList.remove("slider-nav-selected");
//     }
//   }

//   const image_list = document.getElementsByClassName("slider-content-image");
//   for (let i = 0; i < image_list.length; i++) {
//     if (image_list[i].classList.contains("selected-image")) {
//       image_list[i].classList.remove("selected-image");
//     }
//   }
//   document.getElementById("woman-beauty-image").classList.add("selected-image");
//   document.getElementById("woman-beauty").classList.add("slider-nav-selected");
// });
