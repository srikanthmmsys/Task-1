const clickElementa = document.getElementById("subnav1");
const clickElementb = document.getElementById("subnav2");
const clickElementc = document.getElementById("subnav3");
const clickElementd = document.getElementById("subnav4");
const clickElemente = document.getElementById("subnav5");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const fontchElement = document.querySelector(".fontCh");
const caption1=document.querySelector(".caption1");
const caption2=document.querySelector(".caption2");
const caption3=document.querySelector(".caption3");
const caption4=document.querySelector(".caption4");
const caption5=document.querySelector(".caption5");

const reset = () => {
  // backgroundColor
  clickElementa.style.backgroundColor = "rgb(184, 179, 179)";
  clickElementb.style.backgroundColor = "rgb(184, 179, 179)";
  clickElementc.style.backgroundColor = "rgb(184, 179, 179)";
  clickElementd.style.backgroundColor = "rgb(184, 179, 179)";
  clickElemente.style.backgroundColor = "rgb(184, 179, 179)";
  // check
  check1.style.display = "none";
  check2.style.display = "none";
  check3.style.display = "none";
  check4.style.display = "none";
  check5.style.display = "none";
  // 
  caption1.style.backgroundColor="";
 caption2.style.backgroundColor="";
 caption3.style.backgroundColor="";
 caption4.style.backgroundColor="";
 caption5.style.backgroundColor="";

};

const clickHandeller1 = (e) => {
  reset();
  clickElementa.style.backgroundColor = "blue";
  check1.style.display = "inline-block";
  fontchElement.style.fontFamily ="roboto";
  caption1.style.backgroundColor="#e4f0f0";

  // e.style.backgroundColor =e.getAttribute("data-color"); ;
  // e.querySelector('i').style.display="inline-block";
  // document.querySelector("div~p>kbd").style.backgroundColor=e.getAttribute("data-bgcolor");
  //   fontchElement.style.fontFamily =e.getAttribute("data-fontfamily");
// console.log(e.nextElementSibling);
};
const clickHandeller2 = () => {
  reset();
  clickElementb.style.backgroundColor = "blue";
  check2.style.display = "inline-block";
  fontchElement.style.fontFamily = "Nunito";
  caption2.style.backgroundColor="#e4f0f0";
};
const clickHandeller3 = () => {
  reset();
  clickElementc.style.backgroundColor = "blue";
  check3.style.display = "inline-block";
  fontchElement.style.fontFamily = "montserrat";
  caption3.style.backgroundColor="#e4f0f0";
};
const clickHandeller4 = () => {
  reset();
  clickElementd.style.backgroundColor = "blue";
  check4.style.display = "inline-block";
  fontchElement.style.fontFamily = "Playfair Display";
  caption4.style.backgroundColor="#e4f0f0";
};
const clickHandeller5 = () => {
  reset();
  clickElemente.style.backgroundColor = "blue";
  check5.style.display = "inline-block";
  fontchElement.style.fontFamily = "roboto mono";
  caption5.style.backgroundColor="#e4f0f0";
};

clickElementa.addEventListener('click',clickHandeller1);
clickElementb.addEventListener("click", clickHandeller2);
clickElementc.addEventListener("click", clickHandeller3);
clickElementd.addEventListener("click", clickHandeller4);
clickElemente.addEventListener("click", clickHandeller5);
