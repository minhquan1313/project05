// console.log(anime);
// let howLong_start = new Date().toUTCString();
// console.log(howLong_start);
const loaderControl = {
  show: () => {
    document.body.classList.add("modal-active");

    let modal_inner = document.querySelector(".modal-inner");
    modal_inner.style.transition = "0s";
    modal_inner.innerHTML = `
<div class="modal-loader">
  <div class="modal-loader__dots">
    <div class="modal-loader__dots-dot"></div>
    <div class="modal-loader__dots-dot"></div>
    <div class="modal-loader__dots-dot"></div>
  </div>
</div>`;
    setTimeout(() => {
      modal_inner.style.transition = "";
    }, 50);
  },
  hide: () => {
    document.body.classList.remove("modal-active");
    let modal_inner = document.querySelector(".modal-inner");
    let modal_overlay = document.querySelector(".modal__overlay");
    // modal_inner.style.transition = "0s";
    modal_overlay.style.transition = "0s";
    // console.log(modal_inner, modal_overlay);

    setTimeout(() => {
      // modal_inner.style.transition = "";
      modal_inner.innerHTML = ``;
      modal_overlay.style.transition = "";
    }, 500);
    // }, 200);
  },
};
function getProductsQuantity() {
  let toReturn = Math.ceil(window.innerHeight / 350);

  return toReturn < 1 ? 1 : toReturn;
}
function productsQuantityOnResize() {
  var quantity = 0;
  assignNewWidth({}, true);
  window.addEventListener("resize", assignNewWidth);

  function assignNewWidth(e, re) {
    let quantityNew = getProductsQuantity();
    if (quantityNew < 1) quantityNew = 1;
    if (quantityNew != quantity || re) {
      quantity = quantityNew;
      for (let i of document.querySelectorAll(".gallery__item")) {
        i.style.height = `calc(100% / ${quantity})`;
      }
    }
  }
}
function loadDataBase(amount) {
  function generateHtmlLi(src) {
    let li = document.createElement("li");
    li.classList.add("gallery__item");
    li.innerHTML = `<img src="${src}" class="gallery__item_img" alt="" onclick="modalController.modalShowError()" draggable="false" />`;
    return li;
  }
  const availableSrc = [
    "../img/95025.jpg",
    "../img/pexels-alana-sousa-3294248.jpg",
    "../img/pexels-juris-freidenfelds-2013665.jpg",
    "../img/pexels-tim-mossholder-2432221.jpg",
    "../img/section1new/4894238.jpg",
    "../img/section1new/hamster-bear-toy-wallpaper-preview.jpg",
    "../img/section1new/kisspng-golden-hamster-gerbil-guinea-pig-cage-hamster-5acf1ce1eeb027.9157413615235227859777.png",
    "../img/section1new/pngegg.png",
    "../img/section1new/PngItem_1128733.png",
    "../img/section1new/toppng.com-white-bunny-876x1204.png",
    "../img/section1new/wp4660053-roborovski-dwarf-hamster-wallpapers.jpg",
    "../img/section1/1434683.jpg",
    "../img/section1/793096.jpg",
    "../img/product/stuff/217306267_568187031014782_3933954885757458550_n.jpg",
    "../img/product/stuff/218892031_137286868545161_4949815104839960171_n.jpg",
    "../img/product/stuff/221187438_339061311213029_4307759676914558066_n.jpg",
    "../img/product/stuff/221615015_425135571978097_5012808734459016468_n.jpg",
    "../img/product/stuff/234175191_939225249959194_1989445639139581245_n.jpg",
    "../img/product/stuff/237422124_366043121535432_2656124276821208382_n.jpg",
    "../img/product/stuff/237469137_4550285111658765_3807004600942597620_n.jpg",
    "../img/product/stuff/237638218_1654297514917779_159637990097640203_n.jpg",
    "../img/product/stuff/237707294_241492521189764_528667470908003839_n.jpg",
    "../img/product/stuff/239412934_558648435337179_1622525699389735322_n.jpg",
    "../img/product/stuff/239635543_284800442984407_8147836509436470177_n.jpg",
    "../img/product/stuff/239723828_1008033753351858_675537763499228424_n.jpg",
    "../img/product/stuff/239902267_349066363527210_3644172529458450002_n.jpg",
    "../img/product/stuff/240146298_378656683698960_1015229008723299121_n.jpg",
    "../img/product/stuff/240172424_1208590149654624_8334899312535823269_n.jpg",
    "../img/product/stuff/240392284_440784303845666_6470988143877339205_n.jpg",
    "../img/product/stuff/240417495_273709880952581_8301977592304155001_n.jpg",
    "../img/product/stuff/240450870_407175907417670_1522255374927818839_n.jpg",
    "../img/product/stuff/240475886_202249605296491_250015768894001715_n.jpg",
    "../img/product/stuff/240491822_978428669643664_721282927413706345_n.jpg",
    "../img/product/stuff/240511411_984667878765184_9135766092212904178_n.jpg",
    "../img/product/stuff/240530574_285215429609998_5446182372936133211_n.jpg",
    "../img/product/stuff/240568360_4141414112653183_3522124453029375801_n.jpg",
    "../img/product/stuff/240600632_141563501429104_5053708829848779398_n.jpg",
    "../img/product/stuff/240617146_598069554541210_6327869871797745427_n.jpg",
    "../img/product/stuff/240620257_817059132312849_7177882713037891372_n.jpg",
    "../img/product/stuff/240644915_611105953389516_6431140633690371843_n.jpg",
    "../img/product/stuff/240706865_428248251953898_2301815411140268593_n.jpg",
    "../img/product/stuff/240712949_373724217632972_7115355396831851746_n.jpg",
    "../img/product/stuff/240727998_1204996629984504_280416794015873192_n.jpg",
    "../img/product/stuff/240756195_392139655607875_3798428489968504726_n.jpg",
    "../img/product/stuff/240869409_166331788916045_5353426098667656688_n.jpg",
    "../img/product/stuff/241233807_583962672757929_6516536010358666665_n.jpg",
    "../img/product/stuff/default.jpg",
    "../img/product/hamster/206889354_4096671060448977_6573253923774844042_n.jpg",
    "../img/product/hamster/211338192_991661711585727_800165525845538475_n.jpg",
    "../img/product/hamster/213684313_208641747848558_1266526646951295689_n.jpg",
    "../img/product/hamster/235522526_190182103103456_3087002335719432959_n.jpg",
    "../img/product/hamster/238242680_395860058760769_1789480820271904931_n.jpg",
    "../img/product/hamster/239536154_274446010872711_5638786650459763330_n.jpg",
    "../img/product/hamster/239936000_1028158577953728_6111259186228021192_n.jpg",
    "../img/product/hamster/240347609_536879677567707_5464533897103608985_n.jpg",
    "../img/product/hamster/240410149_343664287540359_9143547600771012299_n.jpg",
    "../img/product/hamster/2a206tz41r821.jpg",
    "../img/product/hamster/73f99f6df382cce0858af79b6911c373.jpg",
    "../img/product/hamster/bb2a42d7bd8c83582c24948565df1cfa.jpg",
    "../img/product/hamster/default.jpg",
    "../img/product/hamster/guine1.jpg",
    "../img/product/hamster/guine2.jpg",
    "../img/product/hamster/guine3.jpg",
    "../img/product/hamster/guine4.jpg",
    "../img/product/hamster/h1.jpg",
    "../img/product/hamster/h2.jpg",
    "../img/product/hamster/i1n02z8aeiqzRobo.jpg",
    "../img/product/hamster/mod_article1407019_6.jpg",
    "../img/product/hamster/sjypdc4yyqz51.jpg",
    "../img/product/hamster/tho1.jpg",
    "../img/product/hamster/tho2.jpg",
    "../img/product/hamster/tho3.jpg",
    "../img/product/hamster/tho4.jpg",
    "../img/product/hamster/tho5.jpg",
    "../img/product/hamster/tho6.jpg",
    "../img/product/hamster/tumblr_pk05weur2t1wpb43co1_1280.jpg",
    "../img/product/hamster/y63ieho527e31.jpg",
  ];

  const container = document.querySelector(".gallery__items");

  for (let i = 0; i < amount; i++) {
    let src = Math.floor(Math.random() * availableSrc.length);
    // console.log(src);
    container.appendChild(generateHtmlLi(availableSrc[src]));
  }
}
// function getAvailableWidthStyles() {
//   let startValue = 1;
//   let endValue = 7;
//   // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//   let widthStyles = [];
//   for (let i = startValue; i <= endValue; i++) {
//     widthStyles.push(`gallery__item_img--w${i}0`);
//   }
//   return widthStyles;
// }
// function randomWidthGallery() {
//   let widthStyles = getAvailableWidthStyles();
//   return widthStyles[Math.floor(Math.random() * widthStyles.length)];
// }
function ratioFromString(ratio) {
  // let s = "";
  // console.log("ratio", ratio);
  // console.log(ratio.slice(0, ratio.indexOf(":")));
  // console.log(ratio.slice(ratio.indexOf(":") + 1));
  // console.log("");

  return { a: parseInt(ratio.slice(0, ratio.indexOf(":"))), b: parseInt(ratio.slice(ratio.indexOf(":") + 1)) };
}
function getRightDOM(elementNode) {
  var bound = elementNode.getBoundingClientRect();
  //   document.body.getBoundingClientRect().right;
  return bound.right;
}
function getLeftDOM(elementNode) {
  var bound = elementNode.getBoundingClientRect();
  //   document.body.getBoundingClientRect().x;
  return bound.x;
}
function myLayout_andLayoutControllerFunc() {
  function reAssignNewPosition() {
    if (assignNewPositionTimeOut) {
      clearTimeout(assignNewPositionTimeOut);
    }
    assignNewPositionTimeOut = setTimeout(run, delayForAssignNewPosition);

    function run() {
      maximum_scroll = 0;
      // console.clear();
      // console.log("Resizing");

      const gutter = 2;

      // const container = document.querySelector(".gallery__items");
      const items = document.querySelectorAll(".gallery__item");
      // for (let i of items) {
      // reAssignNewWidthImg(i);
      // console.log(i);
      // console.log(ratioProcess);
      // console.log(i.offsetHeight, ratioProcess.a, ratioProcess.b, i.offsetHeight * (ratioProcess.a / ratioProcess.b));

      // let ratio = i.getAttribute("data-ratio");
      // let ratioProcess = ratioFromString(ratio);
      // i.style.width = i.offsetHeight * (ratioProcess.a / ratioProcess.b) + "px";

      // console.log("");
      // }

      const availableProductPRow = getProductsQuantity();

      const offsetTop = 100 / availableProductPRow;

      const staticLeft = getLeftDOM(items[0]);

      //   console.log("items.length", items.length);
      //   console.log("availableProductPRow", availableProductPRow);
      //   console.log("Math.ceil(items.length / availableProductPRow)", Math.ceil(items.length / availableProductPRow));
      //   console.log("offsetTop", offsetTop);

      // console.log("staticLeft", staticLeft);

      let top = 0;
      let left = 0;

      let count = 0;
      //   let countY = 0;

      for (let ii = 0; ii < Math.ceil(items.length / availableProductPRow); ii++) {
        top = 0;
        for (let jj = 0; jj < availableProductPRow; jj++) {
          if (count < items.length) {
            const item = items[count];

            let ratio = item.getAttribute("data-ratio");
            // console.log(item);
            let ratioProcess = ratioFromString(ratio);
            item.style.width = item.offsetHeight * (ratioProcess.a / ratioProcess.b) + "px";

            //   console.log(item);
            left = 0;
            if (count >= availableProductPRow) {
              // console.log(count - 4);
              left = getRightDOM(items[count - availableProductPRow]) - staticLeft;

              if (left > maximum_scroll) {
                maximum_scroll = left;
                maximum_scroll_element = item;
              }
            }
            // item.style.top = top + "%";
            // item.style.left = `${left}px`;
            item.style.transition = "0s";
            let _top = top;
            let _left = left;
            // setTimeout(() => {
            item.style.top = _top + "%";
            item.style.left = `${_left}px`;
            // item.style.transition = "top 0.3s, left 0.3s";
            // }, 10);

            top += offsetTop;
            count++;

            item.style.paddingBottom = "";
            item.style.paddingTop = "";
            item.style.paddingLeft = "";
            item.style.paddingRight = "";
            if (availableProductPRow > 1) {
              if (top == offsetTop) {
                item.style.paddingBottom = gutter + "px";
              } else if (top == 100) {
                item.style.paddingTop = gutter + "px";
              } else {
                item.style.paddingBottom = gutter + "px";
                item.style.paddingTop = gutter + "px";
              }

              if (left == 0) {
                item.style.paddingRight = gutter + "px";
              } else {
                item.style.paddingRight = gutter + "px";
                item.style.paddingLeft = gutter + "px";
              }
            } else {
              if (items.length > 1) {
                if (left == 0) {
                  item.style.paddingRight = gutter + "px";
                } else {
                  item.style.paddingRight = gutter + "px";
                  item.style.paddingLeft = gutter + "px";
                }
              }
            }

            //   if (left == 0 &&) {
            //   }
          }
        }
      }

      finalUpdateMaximumScroll();
      if (!layoutArranged) {
        layoutArranged = true;
      }
    }
    function finalUpdateMaximumScroll() {
      if (maximum_scroll) {
        // console.log("maximum_scroll", maximum_scroll);
        maximum_scroll = maximum_scroll - document.querySelector(".gallery__wrapper").offsetWidth + maximum_scroll_element.offsetWidth;
        // console.log("maximum_scroll", maximum_scroll);
      }
    }
  }
  function layoutControl() {
    // const container=document.querySelector

    const container = document.querySelector(".gallery__items");
    const scroll_container = document.querySelector(".gallery__wrapper");
    let deltaX;
    let deltaY;
    let down;
    let up;
    var animateAnime;
    let anime_duration;
    let lastScrollValue;
    let minScroll = 90;
    let nativeDeltaX;
    let nativeDeltaY;
    let isMousePc;

    let scrollValue = 0;
    animateTrigger(0, 0);

    scroll_container.addEventListener("wheel", wheelFunc);
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    function wheelFunc(e) {
      deltaX = e.deltaX;
      deltaY = e.deltaY;
      down = direction(deltaX) == "down" || direction(deltaY) == "down";
      up = direction(deltaX) == "up" || direction(deltaY) == "up";
      nativeDeltaX = Math.abs(deltaX);
      nativeDeltaY = Math.abs(deltaY);

      anime_duration = 0;
      isMousePc = (nativeDeltaX > minScroll || nativeDeltaY > minScroll) && (lastScrollValue == nativeDeltaX || lastScrollValue == nativeDeltaY);
      if (isMousePc) {
        anime_duration = nativeDeltaY || nativeDeltaX;
      }
      // console.log("deltaX", deltaX);
      // console.log("deltaY", deltaY);
      // console.log("");
      // console.log(direction(deltaX));
      if (down || up) {
        //   if (deltaY > 0) {
        scrollValue += deltaY || deltaX;
        if (scrollValue < 0) {
          scrollValue = 0;
          animateTrigger(-scrollValue, nativeDeltaY * 2 || nativeDeltaX * 2);
          // animateTrigger(-scrollValue, nativeDeltaY || nativeDeltaX);
        } else if (scrollValue <= maximum_scroll) {
          //   if (Math.abs(deltaY) < scrollDetect) {
          // if (Math.abs(deltaX) < scrollDetect || Math.abs(deltaY) < scrollDetect) {
          //   } else {
          //     anime_duration = 100;
          //   }
          //   if (
          //     Math.abs(deltaY) > minScroll ||
          //     Math.abs(deltaX) > minScroll ||
          //     (lastScrollValue == Math.abs(deltaY) && Math.abs(deltaY) > minScroll) ||
          //     (lastScrollValue == Math.abs(deltaX) && Math.abs(deltaX) > minScroll)
          //   ) {
          //   console.log("deltaY", deltaY, "anime_duration", anime_duration);
          // animateTrigger(-scrollValue, nativeDeltaY * 2 || nativeDeltaX * 2);
          animateTrigger(-scrollValue, anime_duration);
        } else if (scrollValue > maximum_scroll) {
          scrollValue = maximum_scroll;
          animateTrigger(-scrollValue, nativeDeltaY * 2 || nativeDeltaX * 2);
          // animateTrigger(-scrollValue, nativeDeltaY || nativeDeltaX);
        }

        // animateTrigger(-scrollValue, nativeDeltaY || nativeDeltaX);

        //   } else if (deltaX > 0) {
        // scrollValue += deltaX;
        //   }
        //   console.log("scrollValue", scrollValue);
        lastScrollValue = nativeDeltaY || nativeDeltaX;
      }
      //  else if (up) {
      //   if (deltaY < 0) {
      //     scrollValue -= deltaY;
      //   } else if (deltaX < 0) {
      //     scrollValue -= deltaX;
      //   }
      //   console.log("up", scrollValue);
      // }
    }
    function direction(delta) {
      return delta < 0 ? "up" : delta > 0 ? "down" : "unknown";
    }
    function animateTrigger(translateX, duration) {
      // if (animateAnime) {
      // animateAnime.pause();
      // }
      animateAnime = anime({
        targets: container,
        translateX: translateX,
        duration: duration,

        // easing: "easeOutQuart",
        easing: "easeOutQuad",
      });
      // document.querySelector(".header__item").innerText = translateX;
    }
  }
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  let maximum_scroll = 0;
  let maximum_scroll_element;
  let assignNewPositionTimeOut;

  reAssignNewPosition();
  window.addEventListener("resize", reAssignNewPosition);

  layoutControl();
}
function modalController() {
  modalController.show = (html) => {
    document.body.classList.add("modal-active");
    content.innerHTML = "";
    content.appendChild(html);
  };
  modalController.hide = () => {
    document.body.classList.remove("modal-active");
    setTimeout(() => {
      content.innerHTML = "";
    }, 300);
  };

  // modalController.modalShowProduct = (e) => {
  //   const product = products.find((re) => re.id == e);
  //   // console.log(product);
  //   // flickityFunc(product);
  //   modalController.show(modalProduct(product));
  //   flickityFunc(".main-carousel3");
  // };

  modalController.modalShowError = () => {
    modalController.show(modalCantClick());
  };

  //   function modalProduct(obj) {
  //     // console.log(obj);

  //     const imgs = obj.cover.map((re) => `<img src="${re}" alt="" class="carousel-cell" />`).join("");
  //     // console.log(imgs);
  //     let birth = `<p>Ngày sinh: ${obj.birth}</p>`;
  //     let gender = `<p>Giới tính: ${obj.gender}</p>`;
  //     if (obj.type != "pet") {
  //       birth = `<p>Ngày sản xuất: ${obj.birth}</p>`;
  //       gender = `<p>Chất liệu: ${obj.gender}</p>`;
  //     }
  //     let isLiked = "";
  //     if (currentLiked.split(",").find((re) => re == obj.id)) {
  //       isLiked = "active";
  //     }

  //     const product = document.createElement("div");
  //     product.classList.add("modal__product");
  //     // flickityFunc(product)
  //     product.innerHTML = `
  // <div class="randomThings">
  //   <div class="randomThing randomThing--1"></div>
  // </div>
  // <div class="modal__product-wrapper">
  //   <div class="modal__product-content modal__product-cover">
  //     <div class="main-carousel3 modal__product-coverBox">
  //       ${imgs}
  //     </div>
  //   </div>
  //   <div class="modal__product-content modal__product-infomation">
  //     <div class="modal__product-info">
  //       <p class="modal__product-name">${obj.name}</p>
  //       <p class="modal__product-price">${obj.price + obj.currency}</p>
  //       <div class="modal__product-des">
  //       ${birth}
  //       ${gender}
  //         <p>
  //           ${obj.description}
  //         </p>
  //       </div>
  //     </div>
  //     <div class="modal__product-purchase">
  //       <div class="modal__product-addCart">
  //         <button class="btn btn--round btn--noOutline">Thêm vào giỏ</button>
  //       </div>
  //       <div class="modal__product-emotion">
  //         <button class="btn btn--round btn--noOutline ${isLiked}" onclick="reactionFunc(this,${obj.id})">
  //           <i class="far fa-heart"></i>
  //           <i class="fas fa-heart"></i>
  //         </button>
  //       </div>
  //     </div>
  //     <div class="modal__product-categories">Xếp loại: <a href="javascript:;">${obj.species}</a></div>
  //   </div>
  // </div>
  // <div class="modal__product-close" onclick="modalController.hide()"></div>`;
  //     return product;
  //   }
  function modalCantClick() {
    const popup = document.createElement("div");
    popup.classList.add("popupError");
    popup.innerHTML = `
<div class="popupError__P">
  <div class="popupError__P-phone">
    <div class="whiteScreen">
      <div class="topBunnyEar"></div>

      <div class="roundShape">
        <div class="xShape" style="--rotate: 45deg; --xShape-delay: 0.4s"></div>

        <div class="xShape" style="--rotate: -45deg; --xShape-delay: 0.2s"></div>
      </div>

      <div class="msgBox">
        <div class="msgBox__inner" style="--xShape-delay: 0.6000000000000001s">
          <div class="roundShape roundShape--msg">
            <div class="xShape" style="--rotate: 0deg; --xShape-delay: 0.8s"></div>
          </div>
        </div>

        <div class="msgBox__inner" style="--xShape-delay: 0.7s">
          <div class="roundShape roundShape--msg">
            <div class="xShape" style="--rotate: 0deg; --xShape-delay: 0.8999999999999999s"></div>
          </div>
        </div>

        <div class="msgBox__inner" style="--xShape-delay: 0.8s">
          <div class="roundShape roundShape--msg">
            <div class="xShape" style="--rotate: 0deg; --xShape-delay: 1s"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="popupError__P-lineWFlower">
    <div class="line">
      <div class="flower1">
        <div class="flower1__canh"></div>
        <div class="flower1__hoa"></div>
      </div>

      <div class="flower2">
        <div class="flower2__canh"></div>

        <div class="flower2__hoa-sub flower2__hoa-subP1"></div>
        <div class="flower2__hoa"></div>
        <div class="flower2__hoa-sub flower2__hoa-subP2"></div>
      </div>
    </div>
  </div>
</div>

<div class="popupError__404">
  <div class="popupError__404-inner">
    <div class="popupError__4">
      <div class="line-u" style="--timeL-u: 0.2s"></div>
      <div class="line-u" style="--timeL-u: 0.5s"></div>
      <div class="line-4"></div>
    </div>
    <div class="popupError__0">
      <div class="line-u0 line-u0--1"></div>
      <div class="line-u0 line-u0--2"></div>
      <div class="line-u0 line-u0--3"></div>
    </div>
    <div class="popupError__4">
      <div class="line-u" style="--timeL-u: 0.30000000000000004s"></div>
      <div class="line-u" style="--timeL-u: 0.6000000000000001s"></div>
      <div class="line-4"></div>
    </div>
  </div>
</div>

<p class="popupError__desc">Không có đâu, đừng click :))</p>`;
    return popup;
  }
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  const modal = document.querySelector(".modal");
  var isDown = false;
  modal.onmousedown = (e) => {
    // console.log(e.target);
    // console.log(e.target.closest(".modal__overlay"));
    if (e.target.closest(".modal__overlay") || (e.target.closest(".modal-inner") && !e.target.closest(".modal__product") && !e.target.closest(".modal-loader") && !e.target.closest(".popupError"))) {
      // console.log("yes");
      isDown = true;
    } else return;
  };

  modal.onmouseup = (e) => {
    // console.log(e);
    if (!isDown) {
      return;
    } else {
      if (e.target.closest(".modal__overlay") || (e.target.closest(".modal-inner") && !e.target.closest(".modal__product"))) {
        isDown = false;
        modalController.hide();
      }
    }
  };
  // const overlay = modal.querySelector(".modal__overlay");
  // const inner = modal.querySelector(".modal-inner");
  // console.log(overlay);
  // overlay.onclick = modalController.hide;
  // inner.onclick = modalController.hide;
  const content = modal.querySelector(".modal-inner");
  const cantClickEle = document.querySelectorAll("*[data-cant_click]");
  for (let i of cantClickEle) {
    if (i.href) {
      i.href = "javascript:;";
    }
    i.setAttribute("onclick", "modalController.modalShowError()");
  }
  // console.log(products);
  // console.log(modalProduct(products[0]));
  // console.log(typeof modalController.hide);
}
function checkAllImgsLoaded(imgs) {
  let totalImgs = imgs.length;
  let loadedImgs = 0;
  for (let i of imgs) {
    //   i.classList.add(randomWidthGallery());
    // console.log(i);
    let img = i.querySelector("img");
    // let img = i;
    if (img.complete) {
      // console.log("img complete", img);
      reAssignNewWidthImg(i);
      loadedImgs++;
    } else {
      img.onload = (d) => {
        // console.log("img complete on load", img);
        reAssignNewWidthImg(i);
        loadedImgs++;
      };
    }
  }
  let layoutInterVal = setInterval(() => {
    if (loadedImgs == totalImgs) {
      // console.log(loadedImgs, totalImgs);
      clearInterval(layoutInterVal);
      imgsLoaded = true;
    }
  }, 50);
}
function getRatio(a, b) {
  // console.log("getRatio", a, b);
  let i = 2;
  while (i <= a && i <= b) {
    if (a % i == 0 && b % i == 0) {
      // console.log("before", i, a, b);
      // if (a % i == 0)
      a = a / i;
      // if (b % i == 0)
      b = b / i;
      // console.log("after", i, a, b);
      // console.log("i", i);
      // console.log("a", a, "b", b);
    } else i++;
  }
  // console.log("");

  return `${a}:${b}`;
}
function reAssignNewWidthImg(imgParent) {
  let img = imgParent.querySelector("img");
  imgParent.style.width = img.offsetWidth + "px";
  // let bound = imgParent.getBoundingClientRect();
  imgParent.setAttribute("data-ratio", getRatio(imgParent.offsetWidth, imgParent.offsetHeight));
  // imgParent.setAttribute("data-original_width", imgParent.offsetWidth);

  // console.log(bound.width);
}
function checkAllAddOns() {
  let condition = typeof anime;
  let interval = setInterval(() => {
    if (condition) {
      clearInterval(interval);
      allAddOnsLoaded = true;
    }
  }, 50);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// randomWidthGallery();
// let img=new Image();
// img.complete
const delayForAssignNewPosition = 20;
// const imgs = document.querySelectorAll(".gallery__item");
let imgsLoaded = false;
let layoutArranged = false;
// console.log(imgs);
// console.log(imgs);

var allAddOnsLoaded = false;
checkAllAddOns();

let interval = setInterval(() => {
  // console.log("interval");

  if (allAddOnsLoaded) {
    clearInterval(interval);

    loadDataBase(500);
    // console.log("Database ok");
    checkAllImgsLoaded(document.querySelectorAll(".gallery__item"));
    // console.log("CheckAll ok");
    productsQuantityOnResize();
    // console.log("productsQuantityOnResize ok");
    modalController();
    // console.log("modalController ok");
    let layoutInterVal = setInterval(() => {
      if (imgsLoaded) {
        clearInterval(layoutInterVal);
        myLayout_andLayoutControllerFunc();
        // console.log("myLayout_andLayoutControllerFunc ok");
      }
    }, 50);
  }
}, 50);

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // setTimeout(() => {
    // setTimeout(() => {
    // }, 500);
    let interval = setInterval(() => {
      if (layoutArranged) {
        clearInterval(interval);
        // console.log("DOM ready");
        // let howLong_end = new Date();
        // alert(`Ready to use: ${(howLong_end.getTime() - howLong_start.getTime()) / 1000}s`);
        loaderControl.hide();
      }
    }, 50);
    // setTimeout(() => {
    //   startAnimation = true;
    // }, 300);
    // }, 1000);
  }
};
// alert("Update rồi");
// window.onmousemove = (d) => {
//   console.log(d.target);
// };
