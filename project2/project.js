const form1 = document.querySelector(".form1");
const list1_8 = document.querySelector(".list1_8");
const Close = document.querySelector(".close");
const form2 = document.querySelector(".form2");
const span1 = document.querySelector(".span1");
const home = document.querySelector(".home");
const list4 = document.querySelector(".list4");
const list5 = document.querySelector(".list5");
const list6 = document.querySelector(".list6");
const list7 = document.querySelector(".list7");

form1.addEventListener("click", function () {
  document.querySelector(".form").style.display = "flex";
});
Close.addEventListener("click", function () {
  document.querySelector(".form").style.display = "none";
});
form2.addEventListener("click", function () {
  document.querySelector(".history").style.display = "flex";
});
span1.addEventListener("click", function () {
  document.querySelector(".history").style.display = "none";
});
list4.addEventListener("click", function () {
  document.querySelector(".cart").style.display = "flex";
});
list5.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/phu-kien");
});
list6.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/kinh-nghiem-hay");
});
list7.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/khuyen-mai");
});
home.addEventListener("click", function () {
  document.querySelector(".cart").style.display = "none";
});
// list1_8.addEventListener("click", function () {
//   document.querySelector(".accessory").style.display = "flex";
// });
// menu1.addEventListener("click", function () {
//   document.querySelector(".accessory").style.display = "none";
// });
// ***********************menu1**************

// ************************menu6*************
const iphone1 = document.querySelector(".iphone1");
const oppo1 = document.querySelector(".oppo1");
const samsung1 = document.querySelector(".samsung1");
const vivo1 = document.querySelector(".vivo1");
const xaomi1 = document.querySelector(".xiaomi1");
const iphone2 = document.querySelector(".iphone2");
const oppo2 = document.querySelector(".oppo2");
const samsung2 = document.querySelector(".samsung2");
const vivo2 = document.querySelector(".vivo2");
const xaomi2 = document.querySelector(".xiaomi2");
const iphone3 = document.querySelector(".iphone3");
const oppo3 = document.querySelector(".oppo3");
const samsung3 = document.querySelector(".samsung3");
const vivo3 = document.querySelector(".vivo3");
const xaomi3 = document.querySelector(".xiaomi3");

iphone1.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/iphone-13-pro-max");
});
oppo1.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/oppo-find-x5-pro?src=osp"
  );
});
samsung1.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-z-flip3-5g-128gb-flex-your-way?src=osp"
  );
});
vivo1.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/vivo-x80?src=osp");
});
xaomi1.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/xiaomi-12-pro?src=osp");
});
iphone2.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/iphone-13-pro-max");
});
oppo2.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/oppo-find-x5-pro?src=osp"
  );
});
samsung2.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-z-flip3-5g-128gb-flex-your-way?src=osp"
  );
});
vivo2.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/vivo-x80?src=osp");
});
xaomi2.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/xiaomi-12-pro?src=osp");
});
iphone3.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/iphone-13-pro-max");
});
oppo3.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/oppo-find-x5-pro?src=osp"
  );
});
samsung3.addEventListener("click", function () {
  window.open(
    "https://www.dienmayxanh.com/dien-thoai/samsung-galaxy-z-flip3-5g-128gb-flex-your-way?src=osp"
  );
});
vivo3.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/vivo-x80?src=osp");
});
xaomi3.addEventListener("click", function () {
  window.open("https://www.dienmayxanh.com/dien-thoai/xiaomi-12-pro?src=osp");
});

// ******liner ngang***************
var animationEl = document.querySelectorAll(".show-on-scroll");

function animationWindow(element) {
  var rect = element.getClientRects()[0]; //thong so toa do cac thu
  var hightScreen = window.innerHeight; //chieu cao khoi man hinh\

  //check xem element co ben tronmg man hinh hay ko
  console.log("check:", hightScreen);
  if (!(rect.bottom < 0 || rect.top > hightScreen)) {
    //ben trong thi vao day
    element.classList.add("start");
    console.log("cuong", rect);
  } else {
    //ben ngoai thi vao day
    element.classList.remove("start");
  }
  // if (!(rect.bottom < 100)) {
  //   element.classList.remove("start");
  // }
}
function checkAnimation() {
  animationEl.forEach((el) => {
    animationWindow(el);
  });
}
window.onscroll = checkAnimation;

// ************** hinh chuyen dong
var arr_hinh = [
  " https://cdn.tgdd.vn/2022/07/banner/380x200-NC-380x200-2.png",
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
  if (index >= arr_hinh.length - 2) index = 0;
  var hinh = document.getElementById("hinh");
  var hinh2 = document.getElementById("hinh2");
  var hinh3 = document.getElementById("hinh3");
  hinh.src = arr_hinh[index];
  hinh2.src = arr_hinh[index + 1];
  hinh3.src = arr_hinh[index + 2];
}
function prev() {
  index--;
  if (index <= 1) index = arr_hinh.length - 1;
  var hinh = document.getElementById("hinh");
  var hinh2 = document.getElementById("hinh2");
  var hinh3 = document.getElementById("hinh3");
  hinh.src = arr_hinh[index];
  hinh2.src = arr_hinh[index - 1];
  hinh3.src = arr_hinh[index - 2];
}
// *******************slider menu6****************
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const numberImg = document.querySelectorAll(".slider_content");
var index = 0;
next2.addEventListener("click", function () {
  index = index + 1;
  if (index > numberImg.length - 1) {
    index = 0;
  }
  document.querySelector(".container_slider").style.right = index * 100 + "%";
});
prev2.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = numberImg.length - 1;
  }
  document.querySelector(".container_slider").style.right = index * 100 + "%";
});
// *******************mới****************
var service1 = document.querySelector(".list2-1");
var service2 = document.querySelector(".list2-2");
var service3 = document.querySelector(".list2-3");
var service4 = document.querySelector(".list2-4");

service1.addEventListener("click", function () {
  window.open(
    "https://www.thegioididong.com/tien-ich/thanh-toan-internet-vnpt"
  );
});
service2.addEventListener("click", function () {
  window.open("https://www.thegioididong.com/tien-ich/thanh-toan-tien-dien");
});
service3.addEventListener("click", function () {
  window.open("https://www.thegioididong.com/sim-so-dep");
});
service4.addEventListener("click", function () {
  window.open("https://www.thegioididong.com/sim-so-dep");
});
// **********************function click**************
var tivi = document.querySelector(".tivi");
var mayloc = document.querySelector(".mayloc");
var laptop = document.querySelector(".laptop");
var maylanh = document.querySelector(".maylanh");
var quatlanh = document.querySelector(".quatlanh");
var xedap = document.querySelector(".xedap");
var maygiat = document.querySelector(".maygiat");
var tulanh = document.querySelector(".tulanh");
var tatca = document.querySelector(".new");

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
  quatlanh.addEventListener("click", function () {
    window.open("https://www.dienmayxanh.com/quat-dieu-hoa");
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
