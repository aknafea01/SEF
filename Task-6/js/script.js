var total = document.getElementById("total");
var bag = document.getElementById("bag");
var bag_menu = document.getElementById("bag_menu");
var products_cart = document.querySelectorAll(".product");
var sub_price = document.getElementById("sub_price");
var products = document.querySelectorAll(".card");
var num_of_producuts = 0;
sub_price.innerHTML = 0;
total.innerHTML = num_of_producuts;
var btn_1 = document.getElementById("btn-1");
var btn_2 = document.getElementById("btn-2");
var btn_3 = document.getElementById("btn-3");
var btn_4 = document.getElementById("btn-4");
var btn_5 = document.getElementById("btn-5");
var btn_6 = document.getElementById("btn-6");
var btn_7 = document.getElementById("btn-7");
var btn_8 = document.getElementById("btn-8");
var btn_9 = document.getElementById("btn-9");
var res=0;
var p_1_count = document.getElementById("p_1_count");
var p_2_count = document.getElementById("p_2_count");
var p_3_count = document.getElementById("p_3_count");
var p_4_count = document.getElementById("p_4_count");
var p_5_count = document.getElementById("p_5_count");
var p_6_count = document.getElementById("p_6_count");
var p_7_count = document.getElementById("p_7_count");
var p_8_count = document.getElementById("p_8_count");
var p_9_count = document.getElementById("p_9_count");

var upated = function () {
  products_cart.forEach(function (el) {
    
    if (+el.querySelector(".count").innerHTML == 0) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
    el.querySelector(".delete").onclick = function () {
        
        console.log(sub_price.innerHTML);
      num_of_producuts -= el.querySelector(".count").textContent;
      sub_price.innerHTML = sub_price.innerHTML - (+el.querySelector(".count").textContent) * (+el.querySelector("[price]").getAttribute("price"));
      total.innerHTML = num_of_producuts;
      el.querySelector(".count").innerHTML = 0;
      el.style.display = "none";
      
      if (+num_of_producuts == 0) {
        document.querySelector(".info").style.opacity = "0";
      } else {
        document.querySelector(".info").style.opacity = "1";
      }
    };
  });
  if (+num_of_producuts == 0) {
    document.querySelector(".info").style.opacity = "0";
  } else {
    document.querySelector(".info").style.opacity = "1";
  }

};
bag.onmouseenter = function () {
  bag_menu.style.transform = "scale(1)";
};

bag.onmouseleave = function () {
  bag_menu.style.transform = "scale(0)";
};
upated();
btn_1.onclick = function () {
  p_1_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_1").getAttribute("price");
  upated();
};
btn_2.onclick = function () {
  p_2_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_2").getAttribute("price");

  upated();
};
btn_3.onclick = function () {
  p_3_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_3").getAttribute("price");

  upated();
};
btn_4.onclick = function () {
  p_4_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_4").getAttribute("price");

  upated();
};
btn_5.onclick = function () {
  p_5_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_5").getAttribute("price");

  upated();
};
btn_6.onclick = function () {
  p_6_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_6").getAttribute("price");

  upated();
};
btn_7.onclick = function () {
  p_7_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_7").getAttribute("price");

  upated();
};
btn_8.onclick = function () {
  p_8_count.innerHTML++;
  total.innerHTML++;
  num_of_producuts++;
  sub_price.innerHTML = +sub_price.innerHTML + +document.getElementById("price_8").getAttribute("price");
  upated();
};
