var tivi = document.querySelector(".tivi");
var mayloc = document.querySelector(".mayloc");
var laptop = document.querySelector(".laptop");
var maylanh = document.querySelector(".maylanh");
var quat = document.querySelector(".quat");
var xedap = document.querySelector(".xedap");
var maygiat = document.querySelector(".maygiat");
var tulanh = document.querySelector(".tulanh");
var tatca = document.querySelector(".new");

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}
window.onmousemove = function (e) {
  if (!e.target.matches(".dropbtn1")) {
    var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains("show")) {
      myDropdown1.classList.remove("show");
    }
  }
};
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onmousemove = function (e) {
  if (!e.target.matches(".dropbtn2")) {
    var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains("show")) {
      myDropdown2.classList.remove("show");
    }
  }
};
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
window.onmousemove = function (e) {
  if (!e.target.matches(".dropbtn3")) {
    var myDropdown3 = document.getElementById("myDropdown3");
    if (myDropdown3.classList.contains("show")) {
      myDropdown3.classList.remove("show");
    }
  }
};
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
window.onmousemove = function (e) {
  if (!e.target.matches(".dropbtn4")) {
    var myDropdown4 = document.getElementById("myDropdown4");
    if (myDropdown4.classList.contains("show")) {
      myDropdown4.classList.remove("show");
    }
  }
};
// ********************************
var arr_hinh = [
  "https://cdn.tgdd.vn/2022/03/banner/samsung(1)-390x210.png",
  "https://cdn.tgdd.vn/2022/07/banner/Desktop-380x200-2-380x200-1.png",
  "https://cdn.tgdd.vn/2022/07/banner/Desktop-380x200-3-380x200.png",
  "https://cdn.tgdd.vn/2022/06/banner/gia-dung-online-390x210-1.png",
  "https://cdn.tgdd.vn/2022/04/banner/VnPaylaptop-380x200-1.png",
  "https://cdn.tgdd.vn/2022/04/banner/TPBank-380x200-1.png",
  "https://cdn.tgdd.vn/2022/06/banner/EXB-500k-380x200-2.png",
  "https://cdn.tgdd.vn/2022/05/banner/Dungcugiadinh-390x210.png",
];
var index = 0;
function next() {
  index++;
  if (index >= arr_hinh.length) index = 0;
  var hinh = document.getElementById("hinh");
  var hinh2 = document.getElementById("hinh2");
  var hinh3 = document.getElementById("hinh3");
  hinh.src = arr_hinh[index];
  hinh2.src = arr_hinh[index + 1];
  hinh3.src = arr_hinh[index + 2];
}
function prev() {
  index--;
  if (index < 0) index = arr_hinh.length - 1;
  var hinh = document.getElementById("hinh");
  var hinh2 = document.getElementById("hinh2");
  var hinh3 = document.getElementById("hinh3");
  hinh.src = arr_hinh[index];
  hinh2.src = arr_hinh[index - 1];
  hinh3.src = arr_hinh[index - 2];
}
tatca.addEventListener("click", function () {
  window.open("https://www.thegioididong.com/dtdd");
});

// *********************************
function click() {
  tivi.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/tivi/led-casper-50ug6100");
  });
  mayloc.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/tivi/led-casper-50ug6100");
  });
  laptop.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/tivi/led-casper-50ug6100");
  });
  maylanh.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/may-lanh/aqua-aqa-kcrv10wnza");
  });
  quat.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/quat/dung-senko-dh1600?src=osp");
  });
  xedap.addEventListener("click", function () {
    window.open(
      "https://www.dienmayxanh.com/xe-dap/new-26-26-inch-trang?src=osp"
    );
  });
  maygiat.addEventListener("click", function () {
    window.open(
      "https://www.dienmayxanh.com/may-giat/aqua-inverter-10-kg-aqd-a1002g-s"
    );
  });
  tulanh.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/tu-lanh/aqua-aqr-i298eb-bs");
  });
}
click();
