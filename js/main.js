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

    setTimeout(() => {
      // modal_inner.style.transition = "";
      modal_inner.innerHTML = ``;
      modal_overlay.style.transition = "";
    }, 500);
  },
};
// loaderControl.show();

function getTransformCenterX(elementNode) {
  const currentStyle = elementNode.getAttribute("style");
  elementNode.setAttribute("style", "transform:translateX(0)");
  const bound = elementNode.getBoundingClientRect();
  elementNode.setAttribute("style", currentStyle);
  // console.log(bound);
  // elementNode.style.transform = `translateX(${window.innerWidth / 2 - (bound.x + bound.width / 2)}px)`;
  // console.log(`transform: translateX(${parseFloat(Number(window.innerWidth / 2 - (bound.x + bound.width / 2)).toFixed(3))}px);`);
  // console.log(`transform: translateX(${parseFloat(window.innerWidth / 2 - (bound.x + bound.width / 2))}px);`);
  return window.innerWidth / 2 - (bound.x + bound.width / 2);
}
function transformCenterX(elementNode) {
  // console.log(bound);
  // console.log(window.innerWidth);
  // console.log(window.innerWidth / 2 - (bound.x + bound.width / 2));
  // console.log(`transform:translateX(${window.innerWidth / 2 - (bound.x + bound.width / 2)}px)`);

  // console.log("X", elementNode);
  anime({
    targets: elementNode,
    translateX: 0,
    duration: 0,
  });
  // elementNode.style.transform = ``;
  const bound = elementNode.getBoundingClientRect();
  // console.log(bound);
  // elementNode.style.transform = `translateX(${window.innerWidth / 2 - (bound.x + bound.width / 2)}px)`;
  anime({
    targets: elementNode,
    translateX: window.innerWidth / 2 - (bound.x + bound.width / 2),
    duration: 0,
  });
  // return window.innerWidth / 2 - (bound.x + bound.width / 2);
}
function transformCenterY(elementNode) {
  // console.log("Y", elementNode);
  // elementNode.style.transform = ``;
  anime({
    targets: elementNode,
    translateY: 0,
    duration: 0,
  });
  const bound = elementNode.getBoundingClientRect();
  // console.log(bound);
  elementNode.style.transform = `translateY(${window.innerHeight / 2 - (bound.y + bound.height / 2)}px)`;
  anime({
    targets: elementNode,
    translateY: window.innerHeight / 2 - (bound.y + bound.height / 2),
    duration: 0,
  });
}
function transformCenterXY(elementNode) {
  // console.log("XY", elementNode);
  // elementNode.style.transform = ``;
  anime({
    targets: elementNode,
    translateX: 0,
    translateY: 0,
    duration: 0,
  });
  const bound = elementNode.getBoundingClientRect();
  // console.log(bound);
  // elementNode.style.transform = `translate(${window.innerWidth / 2 - (bound.x + bound.width / 2)}px,${window.innerHeight / 2 - (bound.y + bound.height / 2)}px)`;
  anime({
    targets: elementNode,
    translateX: window.innerWidth / 2 - (bound.x + bound.width / 2),
    translateY: window.innerHeight / 2 - (bound.y + bound.height / 2),
    duration: 0,
  });
}
function getTransformLeftScreen(elementNode) {
  const currentStyle = elementNode.getAttribute("style");
  elementNode.setAttribute("style", "transform:translateX(0)");
  const bound = elementNode.getBoundingClientRect();
  elementNode.setAttribute("style", currentStyle);

  // console.log(elementNode, -bound.right);
  return -bound.right;
}
function transformLeftScreen(elementNode) {
  anime({
    targets: elementNode,
    translateX: 0,
    duration: 0,
  });
  const bound = elementNode.getBoundingClientRect();
  // console.log(elementNode, bound);
  // console.log(bound);
  // console.log(elementNode, `transform: translateX(${-bound.right}px)`);
  anime({
    targets: elementNode,
    translateX: -bound.right,
    duration: 0,
  });
  return -bound.right;
}
function onStartAnimation() {
  anime.suspendWhenDocumentHidden = false;
  const section = document.querySelector("#fullpage");
  const mainCover = section.querySelector("#fullpage .main_avatar > img");
  const subTitle = section.querySelector(".intro__title-sup");
  const title = section.querySelector(".intro__title");
  const des = section.querySelector(".intro__des");
  if (window.innerWidth <= 1400) des.textContent = "Lông mềm như nhung, mắt long lanh như ngọc.";
  const arrow = section.querySelector(".intro__arrow");
  const arrow_head = arrow.querySelector(".intro__arrowHead");
  const products = section.querySelectorAll(".hamster");
  const logo = document.querySelector(".header__logo > a");
  logo.style.transform = "scale(0)";
  // anime({
  //   targets: [title],
  //   scale: 0,
  //   duration: 0,
  // });

  // const header = document.querySelector("header");

  const hideElements = [mainCover, des, arrow, arrow_head, ...products];
  anime({
    targets: hideElements,
    opacity: 0,
    duration: 0,
  });
  // const intervalDelay = 60;

  let chars_title;
  let chars_subTitle;

  let isDup = false,
    isDup_duration = 0,
    isDup_translateY = 0,
    isDup_offset = 0;
  splitTexts_TransformCenter_scale0();

  let toStart = setInterval(() => {
    // console.log("interval");
    if (startAnimation) {
      clearInterval(toStart);
      firstAppear();
      setTimeout(
        () => {
          secondAnimate();
        },
        3000 + 1100
        // 3000 + 1100 + 800 + 100
      );
    }
  }, 200);

  // setTimeout(() => {
  //   title.style.borderColor = "currentColor";

  //   console.log("anime");
  //   let titleAnime = anime.timeline({
  //     easing: "easeInOutBack",
  //   });
  //   titleAnime.add({
  //     targets: title,
  //     translateX: 0,
  //     duration: 1000,
  //   });

  //   anime({
  //     targets: subTitle,
  //     translateX: 0,
  //     translateY: 0,
  //     duration: 1400,
  //     easing: "easeInOutBack",
  //   });
  // }, chars.length * intervalDelay + 700);

  // setTimeout(() => {
  // console.log("a");
  // }, 1000);
  function splitTexts_TransformCenter_scale0() {
    let chars = title.innerText.split("");
    let style = 'style="opacity: 0;transform-origin: top;"';
    let dataIncluded;
    title.innerHTML = chars
      .map((re) => {
        dataIncluded = "";
        if (re.toLowerCase() == "o") {
          dataIncluded = "data-o_span";
        }
        return re != " " ? `<span ${style} ${dataIncluded}>${re.toUpperCase()}</span>` : `<span ${style} ${dataIncluded}>&#160</span>`;
      })
      .join("");
    chars = subTitle.innerText.split("");
    style = 'style="transform-origin: bottom;"';
    subTitle.innerHTML = chars.map((re) => (re != " " ? `<span ${style};>${re}</span>` : `<span ${style}>&#160</span>`)).join("");

    chars_title = title.querySelectorAll("span");
    chars_subTitle = subTitle.querySelectorAll("span");

    transformCenterXY(subTitle);
    transformCenterX(title);

    let temp1 = subTitle.getBoundingClientRect();
    let temp2 = title.getBoundingClientRect();

    // scale nho lai khoi chu
    anime({
      targets: [title, subTitle],
      scale: 0,
      duration: 0,
    });
    // title.style.transform = "scale(0)";
    // subTitle.style.transform = "scale(0)";

    // console.log(temp2.y + temp2.height);
    // console.log(temp1.y);
    if (temp1.y < temp2.y + temp2.height) {
      isDup = true;
      isDup_duration = 300;
      isDup_translateY = Math.trunc(temp2.y + temp2.height - temp1.y);
      isDup_offset = 1300;
    }
  }
  function firstAppear() {
    // console.log(isDup);
    // console.log(isDup_translateY);
    anime({
      targets: title,
      scale: 1,
      duration: 0,
    });

    var o_span, logo_span;
    // var boundOSpan;
    var o_spanY, o_spanHeight;
    var logoY, logoHeight;
    if (!toSided) {
      setTimeout(() => {
        o_span = title.querySelector("*[data-o_span").getBoundingClientRect();
        o_spanY = o_span.y - 50;
        o_spanHeight = o_span.height;

        logo_span = logo.getBoundingClientRect();
        logoY = logo_span.y;
        logoHeight = logo_span.height;
        // console.log("o_spanY", o_spanY);
        // console.log("logoY", logoY);

        // console.log(`transform:translateY(${o_spanY - logoY}px)`);

        // console.log(`transform: translateX(0px)\nbackground:#ccc;`);
        // console.log(o_spanY - logoY + o_spanHeight / 2 - logoHeight / 2);
        // console.log(window.getComputedStyle(logo));
        // ......
        logo.style.transform = `translateY(${o_spanY - logoY - logoHeight / 2}px) translateX(${o_span.x - logo_span.x + o_span.width / 2 - logo_span.width / 2}px) scale(${0})`;
        // logo.style.transform = `translateY(${o_spanY - logoY + o_spanHeight / 2 - logoHeight / 2}px) translateX(${o_span.x - logo_span.x + o_span.width / 2 - logo_span.width / 2}px) scale(${0})`;
        // let tl = anime.timeline({});
        setTimeout(() => {
          if (!toSided) {
            let logoAnime = anime({
              // Logo hien ra tai chu O
              targets: logo,
              scale: [0, logoScale],
              duration: 1200,
            });
            animeToPause.push(logoAnime);

            setTimeout(() => {
              if (!toSided) {
                let logoAnime = anime({
                  // Logo nho lai va bien mat
                  targets: logo,
                  // translateX: 0,
                  // translateY: 0,
                  // scale: { value: logoScale, easing: "easeOutElastic", duration: 1800 },
                  scale: 0,
                  opacity: 0,
                  // duration: 800,
                  duration: 300,
                  easing: "linear",
                });
                animeToPause.push(logoAnime);

                setTimeout(() => {
                  if (!toSided) {
                    let logoAnime = anime({
                      // Logo hien ra tren top
                      targets: logo,
                      translateX: [0, 0],
                      translateY: [0, 0],
                      scale: logoScale,
                      opacity: 1,
                      duration: 1400,
                    });
                    animeToPause.push(logoAnime);
                  }
                }, 1190);
              }
            }, 1200 + 250 + 10);
          }
        }, 1450);
      }, 10);
    }

    // setInterval(() => {
    //   o_span = logo;
    //   // o_span = title.querySelector("*[data-o_span");

    //   boundOSpan = o_span.getBoundingClientRect();
    //   console.log("boundOSpan.x", boundOSpan.x);
    //   console.log("boundOSpan.y", boundOSpan.y);
    //   console.log("");
    // }, 50);

    let aa = anime.timeline({
      easing: "easeOutSine",
    });
    // aa.
    aa.add({
      // Hien khoi subTitle
      targets: subTitle,
      scale: [0, 3],
      duration: 1200,
      easing: "easeOutBounce",
    })
      .add(
        {
          // Scale các ký tự của subtitle
          targets: chars_subTitle,
          scale: anime.stagger([0.5, 1], { from: "center" }),
          delay: anime.stagger(30, { from: "center" }),
          duration: 800,
        },
        1000
      )
      .add(
        {
          // Di chuyển vị trí của subTitle nếu đụng title
          targets: isDup ? subTitle : [],
          translateY: `+=${isDup_translateY}`,
          duration: isDup_duration,
        },
        isDup_offset
      )
      .add(
        {
          // Xuất hiện ký tự title
          targets: chars_title,
          translateY: [50, 0],
          scaleY: anime.stagger([1.4, 1], { from: "center" }),
          opacity: 1,
          delay: anime.stagger(30, { from: "center" }),
          duration: 300,
          easing: "easeOutCubic",
        },
        1300
      )
      // Ve vi tri theo như ban đầu
      .add(
        {
          targets: subTitle,
          translateX: 0,
          translateY: 0,
          scale: { value: 1, easing: "easeOutBack" },
          easing: "easeInBack",
          duration: 1100,
        },
        3000
      )
      .add(
        {
          targets: chars_subTitle,
          scale: 1,
          duration: 600,
        },
        3000
      )
      .add(
        {
          targets: title,
          translateX: 0,
          easing: "easeInBack",
          duration: 1100,
        },
        3000
      )
      // Nén chữ
      .add(
        {
          targets: chars_title,
          scaleY: 1,
          scaleX: anime.stagger([0.2, 1]),
          left: anime.stagger([0, -350]),
          duration: 1100,
          easing: "easeInBack",
        },
        3000
      )
      .add({
        targets: chars_title,
        scaleX: 1,
        left: 0,
        duration: 800,
        easing: "easeOutBack",
      });

    moveLeftThenRightAfter();
    function moveLeftThenRightAfter() {
      setTimeout(() => {
        // console.log(chars_title);
        // let s = "";
        // for (let i of chars_title) {
        //   s = s + i.textContent;
        // }
        // title.innerHTML = s;
        // s = "";
        // for (let i of chars_subTitle) {
        //   s = s + i.textContent;
        // }
        // subTitle.innerHTML = s;
        // title.removeAttribute("style");
        // subTitle.removeAttribute("style");
        const eles = [...chars_subTitle, ...chars_title, title, subTitle];
        for (let i of eles) {
          i.removeAttribute("style");
        }
        var animeTitle = anime({
          targets: title,
          loop: true,
          translateX: 50,
          direction: "alternate",
          easing: "easeInOutQuad",
          duration: 15000,
        });
        animeToPause = [...animeToPause, animeTitle];
        var animeSubTitle = anime({
          targets: subTitle,
          translateX: -50,
          easing: "easeOutSine",
          duration: 10000,
        });
        animeToPause = [...animeToPause, animeSubTitle];

        setTimeout(() => {
          animeSubTitle1 = anime({
            targets: subTitle,
            loop: true,
            translateX: 50,
            direction: "alternate",
            easing: "easeInOutQuad",
            duration: 20000,
          });
          animeToPause = [...animeToPause, animeSubTitle1];
        }, 5000 + 50);
      }, 3000 + 1100 + 800 + 50);
    }
  }
  function secondAnimate() {
    // transformLeftScreen(arrow);

    // console.log("second");
    mainCover.style.transformOrigin = "bottom";
    arrow.style.transformOrigin = "left";
    arrow_head.style.transform = "translateY(-50%)";

    for (let i of products) {
      transformLeftScreen(i);
    }
    transformLeftScreen(arrow);
    des.style.transformOrigin = "top left";

    let aa = anime.timeline({
      easing: "easeOutSine",
    });
    aa.add(
      {
        // Hamster bự xuất hiện
        targets: mainCover,
        opacity: 1,
        // scale: {
        // value: [0, 1],
        // duration: 1500,
        //  easing: "easeOutElastic"
        // easing: "easeOutQuart",
        // },
        translateY: { value: ["50%", 0], easing: "easeOutBack" },
        // duration: 700,
        duration: 900,
        easing: "easeOutQuad",
      },
      0
    )
      .add(
        {
          // Sản phẩm xuất hiện
          targets: products,
          opacity: { value: 1, easing: "easeOutCubic", duration: 1000 },
          translateX: 0,
          // scale: [0, 1],
          delay: anime.stagger(100),
          duration: 2000,
          easing: "easeOutElastic",
        },
        1000
      )
      .add(
        {
          // Mũi tên xuất hiện bay từ bên trái vô
          targets: arrow,
          scaleX: { value: [1, 2.5], easing: "easeOutCirc" },
          translateX: 0,
          opacity: { value: 1, duration: 300 },
          duration: 1000,
          easing: "easeOutQuad",
        },
        1
      )
      .add(
        {
          // Dịch mũi tên lùi n px
          targets: arrow,
          scaleX: 1,
          translateX: -10,
          duration: 1000,
          easing: "easeOutElastic",
        },
        1000
      )
      .add(
        {
          // Đầu mũi tên xuất hiện
          targets: arrow_head,
          scale: [0, 1],
          translateX: { value: ["100%", 0], easing: "easeOutBounce" },
          rotate: { value: "1turn", easing: "easeOutElastic", delay: 200, duration: 1800 },
          opacity: { value: 1, duration: 200 },
          duration: 800,
          // easing: "easeOutElastic",
          //
        },
        750
      )
      .add(
        {
          targets: des,
          scale: [0, 1],
          opacity: 1,
          duration: 1000,
          easing: "easeOutExpo",
        },
        1150
      );
    setTimeout(() => {
      var animeProducts = anime({
        // product chạy qua lại
        targets: products,
        translateX: [0, 30],
        opacity: [1, 1],
        // delay: 1000,
        delay: anime.stagger(200),
        duration: 1000,
        easing: "easeInOutQuad",
        direction: "alternate",
        loop: true,
      });
      animeToPause = [...animeToPause, animeProducts];
    }, 1100 + 2000 + 50);
    setTimeout(() => {
      var animeArrow = anime({
        // Mũi tên di chuyển qua lại
        targets: arrow,
        translateX: [-10, 0],
        opacity: [1, 1],
        loop: true,
        direction: "alternate",
        duration: 1000,
        // delay: 1000,
        easing: "easeInOutQuad",
      });
      animeToPause = [...animeToPause, animeArrow];
    }, 1000 + 1000 + 50);
    setTimeout(() => {
      var animeDes = anime({
        targets: des,
        loop: true,
        opacity: [1, 1],
        scale: [1, 1],
        direction: "alternate",
        easing: "easeInOutQuad",
        translateX: 8,
        duration: 1000,
      });
      animeToPause = [...animeToPause, animeDes];
    }, 1000 + 1000 + 400 + 50);
    setTimeout(() => {
      var animeArrowHead = anime({
        // Đầu mũi tên di chuyển qua lại
        targets: arrow_head,
        // scale: [1, 1.1],
        translateX: [0, 20],
        scale: [1, 1],
        opacity: [1, 1],
        loop: true,
        // rotate: {
        //   value: ["-10deg", "10deg"],
        //   duration: 1000,
        // },
        direction: "alternate",
        duration: 1000,
        // delay: 100,
        easing: "easeInOutQuad",
      });
      animeToPause = [...animeToPause, animeArrowHead];
    }, 750 + 1800 + 100 + 50);
  }
}
function animationOnScroll() {
  // const collections = [".product", ".collection", ".section--final .wrapper-frame--full"];
  // var id = 0;
  // const delay_for_waypointJs = 400;
  // var wp = new Waypoint({
  //   element: document.querySelector(".product"),
  //   handler: function (direction) {
  //     console.log("Basic waypoint triggered");
  //   },
  //   offset: "25%",
  // });

  // Timeout for Fullpage to be scrolled over
  animateProducts();
  animateProductHeaders();
  // setTimeout(() => {
  // }, 1000);
  // on : 'sided','b', 'm_b', 'm','l_m', 't', 'l_t'
  // const collections = [
  // new myAnimeConstructor({
  //   target: ".section--three:not(.section--four) .product",
  //   translateY: ["50%", "0%"],
  //   on: "ll_m",
  //   easing: "easeOutCubic",
  //   duration: 600,
  //   // delay: anime.stagger(150),
  //   hasStagger: true,
  // }),
  //   new myAnimeConstructor({
  //     target: ".title >.main-title",
  //     translateX: ["100%", "0%"],
  //     on: "l_m",
  //     duration: 2000,
  //   }),
  //   new myAnimeConstructor({
  //     target: ".title >.sub-title",
  //     translateX: ["-100%", "0%"],
  //     on: "l_m",
  //     duration: 2000,
  //   }),
  // ];

  // for (let i of collections) {
  //   console.log(i);
  // }

  // run();

  // const easeModes = [
  //   "easeInSine",
  //   "easeOutSine",
  //   "easeInOutSine",
  //   "easeInQuad",
  //   "easeOutQuad",
  //   "easeInOutQuad",
  //   "easeInCubic",
  //   "easeOutCubic",
  //   "easeInOutCubic",
  //   "easeInQuart",
  //   "easeOutQuart",
  //   "easeInOutQuart",
  //   "easeInQuint",
  //   "easeOutQuint",
  //   "easeInOutQuint",
  //   "easeInExpo",
  //   "easeOutExpo",
  //   "easeInOutExpo",
  //   "easeInCirc",
  //   "easeOutCirc",
  //   "easeInOutCirc",
  //   "easeInBack",
  //   "easeOutBack",
  //   "easeInOutBack",
  //   "easeInElastic",
  //   "easeOutElastic",
  //   "easeInOutElastic",
  //   "easeInBounce",
  //   "easeOutBounce",
  //   "easeInOutBounce",
  // ];
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  function animateProducts() {
    const products = document.querySelectorAll(".section--three:not(.section--four) .product");
    const headers = document.querySelector(".product__headers");

    let isClicked = false;
    headers.addEventListener("click", headersClick);

    let lastProduct = 0;
    var quantity = getProductsQuantity();
    // console.log("products.length / quantity", products.length / quantity);
    for (let i = 0; i < Math.ceil(products.length / quantity); i++) {
      let elements = [];
      for (let j = 0; j < quantity; j++) {
        if (products[lastProduct]) {
          products[lastProduct].style.opacity = "0";
          elements.push(products[lastProduct++]);
        }
      }
      // console.log("elements[0]", elements[0]);
      let wp = new Waypoint({
        element: elements[0],
        handler: function (direction) {
          wp.destroy();
          // console.log("elements", elements);
          // console.log("quantity", quantity);
          if (!isClicked) {
            let ani = anime({
              targets: elements,
              translateY: ["100%", "0%"],
              // translateY: anime.stagger(["100%", "0%"], { grid: [quantity, 1], from: "center" }),
              opacity: { value: 1, easing: "easeOutQuad", duration: 500 },
              // easing: "easeOutBack",
              // easing: "easeOutElastic",
              // easing: "easeOutCirc",
              easing: "easeOutSine",
              delay: anime.stagger(100, { grid: [quantity, 1], from: "center" }),
              duration: 500,
              // duration: 1500,
            });
            setTimeout(() => {
              for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.opacity = "";
                element.style.transform = "";
              }
            }, 500 + 100 * quantity);
          }
        },
        offset: window.innerHeight - (parseInt(window.getComputedStyle(elements[0]).height) * 2) / 3,
      });
    }
    function headersClick(e) {
      // console.log("click");
      const _li = e.target.closest("li");
      if (_li && _li != headers.querySelector("li")) {
        isClicked = true;
        // console.log("li");
        headers.removeEventListener("click", headersClick);
        anime({
          targets: products,
          opacity: 1,
          duration: 0,
          // easing: "easeOutQuad",
        });
      }
    }
    window.addEventListener("resize", (e) => {
      quantity = getProductsQuantity();
    });
  }
  function animateProductHeaders() {
    const headerTab = document.querySelector(".product__headers");
    const headers = headerTab.querySelectorAll(".product__header");
    const navTab = headerTab.querySelector(".product__header-nav");
    const nav = navTab.querySelector(".nav");

    const titles = document.querySelectorAll(".main-title");
    const subTitles = document.querySelectorAll(".sub-title");

    const texts = [...titles, ...subTitles];

    const productTips = document.querySelectorAll(".section--four .product");
    const carouselBtnSection4 = document.querySelectorAll(".section--four button");

    const collections = document.querySelectorAll(".section--five .collection");

    const whyBanner = document.querySelector(".section--final .introduce__deepBG-img");
    const whyBanner_subtitle = document.querySelector(".section--final .title> span");
    const whyBanner_title = document.querySelector(".section--final .title> .shop_name");

    const reasons = document.querySelectorAll(".section--final .reason");
    const reason_title = document.querySelectorAll(".section--final .reason__label");
    const reason_subTitle = document.querySelectorAll(".section--final .reason__des");
    const footer = document.querySelector("footer");

    const hideElements = [
      ...headers,
      nav,
      navTab,
      ...texts,
      ...productTips,
      ...carouselBtnSection4,
      ...collections,
      whyBanner,
      whyBanner_subtitle,
      whyBanner_title,
      ...reasons,
      ...reason_title,
      ...reason_subTitle,
      footer,
    ];
    anime({
      targets: hideElements,
      opacity: 0,
      duration: 0,
    });
    // nav.style.transform = `translateX(${getTransformLeftScreen(nav)}px)`;
    // console.log(nav);
    setTimeout(() => {
      transformLeftScreen(nav);
    }, 900);
    setTimeout(
      () => {
        // settimeout bc nav is transforming in productsNavigation function

        // anime({
        //   targets: nav,
        //   translateX: getTransformLeftScreen(nav),
        //   duration: 1,
        //   update: function () {
        //     console.log("Anime ran");
        //   },
        // });
        let wp = new Waypoint({
          element: headerTab,
          handler: (d) => {
            if (d == "down") {
              wp.destroy();
              anime({
                targets: headers,
                scale: [0, 1],
                opacity: 1,
                duration: 800,
                delay: anime.stagger(60),
                easing: "easeOutBounce",
              });

              anime({
                targets: navTab,
                translateY: ["100%", 0],
                opacity: [0, 1],
                duration: 600,
                easing: "easeOutQuint",
                // update: () => {
                //   console.log("navTab");
                // },
              });
              anime({
                targets: nav,
                translateX: 0,
                opacity: [0, 1],
                delay: 350,
                duration: 1200,
              });
              // console.log("Here");
            }
          },
          offset: "86%",
          // offset: window.innerHeight - headerTab.offsetHeight,
        });

        let wp1 = new Waypoint({
          element: productTips[0],
          handler: (d) => {
            if (d == "down") {
              wp1.destroy();

              anime({
                targets: productTips,
                opacity: 1,
                // translateY: ["100%", 0],
                scale: [0, 1],
                easing: "easeOutQuad",
                duration: 700,
                // delay: anime.stagger(80),
              });
            }
          },
          offset: window.innerHeight - productTips[0].offsetHeight,
        });

        let wp2 = new Waypoint({
          element: carouselBtnSection4[0],
          handler: (d) => {
            if (d == "down") {
              wp2.destroy();

              anime({
                targets: carouselBtnSection4,
                opacity: [0, 1],
                easing: "easeOutQuad",
                duration: 500,
              });
            }
          },
          offset: "86%",
        });

        let wp3 = new Waypoint({
          element: collections[0],
          handler: (d) => {
            if (d == "down") {
              wp3.destroy();
              anime({
                targets: collections[0],
                opacity: [0, 1],
                translateX: ["-100%", 0],
                duration: 700,
                easing: "easeOutCubic",
              });
              anime({
                targets: collections[1],
                opacity: [0, 1],
                translateX: ["100%", 0],
                duration: 700,
                easing: "easeOutCubic",
              });
            }
          },
          offset: window.innerHeight - collections[0].offsetHeight,
        });

        let wp4 = new Waypoint({
          element: whyBanner,
          handler: (d) => {
            if (d == "down") {
              // console.log(wp4);
              // console.log(this);
              wp4.destroy();
              // console.log(wp4);
              anime({
                targets: whyBanner,
                duration: 1800,
                // skewY: [20, 0],
                scaleY: [0, 1],
                translateY: { value: ["-40%", 0] },
                opacity: { value: [0, 1], duration: 800, easing: "easeOutSine" },
                // easing: "easeOutBack",
              });

              anime({
                targets: whyBanner_subtitle,
                delay: 300,
                translateX: { value: ["100%", 0], easing: "easeOutElastic", duration: 1600 },
                scaleX: { value: [2, 1], easing: "easeOutElastic", duration: 1600 },
                opacity: { value: [0, 1], easing: "easeOutSine" },
                easing: "easeOutExpo",
                duration: 800,
              });
              anime({
                targets: whyBanner_title,
                delay: 300,
                scaleX: { value: [2, 1], easing: "easeOutElastic", duration: 1600 },
                translateX: { value: ["-100%", 0], easing: "easeOutElastic", duration: 1600 },
                opacity: { value: [0, 1], easing: "easeOutSine" },
                easing: "easeOutExpo",
                duration: 1000,
              });
            }
          },
          offset: window.innerHeight - whyBanner.offsetHeight,
          // offset: window.innerHeight - whyBanner.offsetHeight / 2,
        });

        let wp5 = new Waypoint({
          element: reasons[0],
          handler: (d) => {
            if (d == "down") {
              wp5.destroy();
              anime({
                targets: reasons[0],
                translateX: ["100%", 0],
                translateY: ["-50%", 0],
                opacity: [0, 1],
                duration: 1400,
              });
              anime({
                targets: reasons[1],
                translateY: ["-50%", 0],
                opacity: [0, 1],
                duration: 1400,
              });
              anime({
                targets: reasons[2],
                translateX: ["-100%", 0],
                translateY: ["-50%", 0],
                opacity: [0, 1],
                duration: 1400,
              });
              // reason_subTitle

              setTimeout(() => {
                anime({
                  targets: reason_title,
                  scale: { value: [0, 1], duration: 1200 },
                  opacity: [0, 1],
                  delay: anime.stagger(150, { from: "center" }),
                });

                setTimeout(() => {
                  anime({
                    targets: reason_subTitle,
                    scale: { value: [0, 1], duration: 1500 },
                    opacity: [0, 1],
                    delay: anime.stagger(160, { from: "center" }),
                  });
                }, 100);
              }, 500);
            }
          },
          offset: window.innerHeight - reasons[0].offsetHeight,
        });

        let wp6 = new Waypoint({
          element: footer,
          handler: (d) => {
            if (d == "down") {
              wp6.destroy();

              anime({
                targets: footer,
                translateY: ["100%", 0],
                opacity: [0, 1],
                duration: 1500,
              });
            }
          },
          offset: window.innerHeight - footer.offsetHeight / 2,
        });
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
        for (let i of titles) {
          let wp = new Waypoint({
            element: i,
            handler: (d) => {
              if (d == "down") {
                wp.destroy();
                anime({
                  targets: i,
                  opacity: [0, 1],
                  translateY: ["100%", 0],
                  // duration: 800,
                  easing: "easeOutQuart",
                });
              }
            },
            offset: "86%",
          });
        }
        for (let i of subTitles) {
          let wp = new Waypoint({
            element: i,
            handler: (d) => {
              if (d == "down") {
                wp.destroy();
                anime({
                  targets: i,
                  opacity: [0, 1],
                  translateY: ["-100%", 0],
                  // duration: 800,
                  easing: "easeOutQuart",
                });
              }
            },
            offset: "86%",
          });
        }
      },
      1000
      // 700 + 50
    );
    // console.log(headerTab);
    // console.log("run");

    // console.log(headerTab);
  }
  // function myAnimeConstructor(obj) {
  //   // on : 'sided','b', 'm_b', 'm','l_m', 't', 'l_t'
  //   var percentOn = { sided: "0%", t: "0%", b: "100%", m_b: "90%", m: "50%", ll_m: "70%", mm_m: "30%", l_m: "80%", m_m: "20%" };
  //   this._at = obj.on || "b";
  //   this._on = percentOn[obj.on] || (obj.on ? obj.on : percentOn[this._at]);
  //   // console.log("obj.on", obj.on);
  //   // console.log("percentOn[obj.on]", percentOn[obj.on]);
  //   this._target = obj.target;
  //   // console.log("id", id);
  //   this._id = obj.id || id++;
  //   this._opacity = obj.opacity || { value: [0, 1], easing: "easeOutCubic" };
  //   this._translateX = obj.translateX;
  //   this._translateY = obj.translateY;
  //   this._translateZ = obj.translateZ;
  //   this._rotate = obj.rotate;
  //   this._rotateX = obj.rotateX;
  //   this._rotateY = obj.rotateY;
  //   this._scale = obj.scale || [1, 1];
  //   this._scaleX = obj.scaleX;
  //   this._scaleY = obj.scaleY;
  //   this._scaleZ = obj.scaleZ;
  //   this._skew = obj.skew;
  //   this._skewX = obj.skewX;
  //   this._skewY = obj.skewY;
  //   this._perspective = obj.perspective;
  //   this._duration = obj.duration || 1000;
  //   this._delay = obj._hasStagger ? (typeof obj.delay == "function" ? obj.delay : 0) : obj.delay ? obj.delay : 0;
  //   // console.log();
  //   this._easing = obj.easing || "easeOutElastic";
  //   this._hasStagger = obj.hasStagger || false;
  // }
  // function run() {
  //   window.addEventListener("resize", () => {
  //     setTimeout(() => {
  //       Waypoint.refreshAll();
  //     }, delay_for_waypointJs);
  //   });
  //   window.addEventListener("mouseup", () => {
  //     setTimeout(() => {
  //       Waypoint.refreshAll();
  //     }, delay_for_waypointJs);
  //   });

  //   for (let i of collections) {
  //     console.log("i", i);
  //     const elements = i._hasStagger ? [document.querySelector(i._target)] : document.querySelectorAll(i._target);
  //     // [li] : [li,li,li,...]
  //     // console.log("elements", elements);
  //     if (i._hasStagger) {
  //       anime({
  //         targets: i._target,
  //         opacity: 0,
  //         duration: 1,
  //       });
  //     }
  //     for (let ele of elements) {
  //       ele.style.opacity = "0";

  //       // if (i._at != "sided") {
  //       // console.log("ele", ele);
  //       let wp = new Waypoint({
  //         element: ele,
  //         handler: function (direction) {
  //           // console.log("scrolled to ", this.element);
  //           // const wp_condition = i._at != "sided" ? direction == "down" && !ele.classList.contains("waypointOK") : toSided && direction == "down" && !ele.classList.contains("waypointOK");

  //           const wp_condition = i._at != "sided" ? direction == "down" : toSided && direction == "down";

  //           // console.log(this.element);
  //           // console.log("i._at", i._at);
  //           // console.log("toSided", toSided);
  //           // const wp_condition_negative = i._at != "sided" ? direction == "up" && ele.classList.contains("waypointOK") : false;

  //           // if (wp_condition) {

  //           wp.disable();
  //           // ele.classList.add("waypointOK");
  //           console.log(direction);

  //           // console.log(this.element.getAttribute("data-my-id"));

  //           // console.log(this.element + " waypoint triggered");
  //           // console.log("ele", ele);
  //           // console.log("i.opacity", i._opacity);
  //           // console.log("i.translateX", i.translateX);
  //           // console.log("i.translateY", i.translateY);
  //           // console.log("i.translateZ", i.translateZ);
  //           // console.log("i.rotate", i.rotate);
  //           // console.log("i.rotateX", i.rotateX);
  //           // console.log("i.rotateY", i.rotateY);
  //           // console.log("i.rotateZ", i.rotateZ);
  //           // console.log("i.scale", i.scale);
  //           // console.log("i.scaleX", i.scaleX);
  //           // console.log("i.scaleY", i.scaleY);
  //           // console.log("i.scaleZ", i.scaleZ);
  //           // console.log("i.skew", i.skew);
  //           // console.log("i.skewX", i.skewX);
  //           // console.log("i.skewY", i.skewY);
  //           // console.log("i.perspective", i.perspective);
  //           // console.log("i.duration", i.duration);
  //           // console.log("i.delay", i.delay);
  //           // console.log("i.easing", i.easing);
  //           // console.log("ok");
  //           anime({
  //             targets: i._hasStagger ? i._target : ele,
  //             opacity: i._opacity,
  //             translateX: i._translateX,
  //             translateY: i._translateY,
  //             rotate: i._rotate,
  //             rotateX: i._rotateX,
  //             rotateY: i._rotateY,
  //             rotateZ: i._rotateZ,
  //             scale: i._scale,
  //             scaleX: i._scaleX,
  //             scaleY: i._scaleY,
  //             scaleZ: i._scaleZ,
  //             skew: i._skew,
  //             skewX: i._skewX,
  //             skewY: i._skewY,
  //             perspective: i._perspective,
  //             duration: i._duration,
  //             delay: i._delay,
  //             easing: i._easing,
  //           });
  //           // }

  //           // else if (wp_condition_negative) {
  //           //   console.log(direction);
  //           //   anime({
  //           //     targets: i._hasStagger ? i._target : ele,
  //           //     opacity: 0,
  //           //     duration: Math.trunc(i._duration / 2),
  //           //     easing: "easeOutCubic",
  //           //   });
  //           //   ele.classList.remove("waypointOK");
  //           // }
  //         },
  //         offset: i._on,
  //       });
  //     }
  //   }
  //   // console.log(elements);
  //   // var canChange = [];
  //   // window.addEventListener("scroll", animeTrigger);

  //   // function animeTrigger() {
  //   //   for (let i of collections) {
  //   //     const obj = i;
  //   //     const elements = document.querySelectorAll(obj.target);
  //   //     const fElement = elements[0];
  //   //     const pos = fElement.getBoundingClientRect();
  //   //     const startOn = obj.on == "bottom" ? window.innerHeight / 5 : obj.on == "middle" ? window.innerHeight / 1.8 : 0;

  //   //     const condition = obj.on == "sided" ? toSidedCompletely : !fElement.classList.contains("animeed") && pos.y - window.innerHeight + startOn < 0;
  //   //     const conditionNegative = obj.on == "sided" ? !toSidedCompletely : fElement.classList.contains("animeed") && pos.y - window.innerHeight + startOn > 0;

  //   //     if (condition) {
  //   //       fElement.classList.add("animeed");
  //   //       console.log("before", collections);
  //   //       collections = collections.filter((re) => re.id !== obj.id);
  //   //       console.log(collections);
  //   //       anime({
  //   //         targets: elements,
  //   //         target: obj.target,
  //   //         opacity: obj.opacity,
  //   //         translateX: obj.translateX,
  //   //         translateY: obj.translateY,
  //   //         translateZ: obj.translateZ,
  //   //         rotate: obj.rotate,
  //   //         rotateX: obj.rotateX,
  //   //         rotateY: obj.rotateY,
  //   //         rotateZ: obj.rotateZ,
  //   //         scale: obj.scale,
  //   //         scaleX: obj.scaleX,
  //   //         scaleY: obj.scaleY,
  //   //         scaleZ: obj.scaleZ,
  //   //         skew: obj.skew,
  //   //         skewX: obj.skewX,
  //   //         skewY: obj.skewY,
  //   //         perspective: obj.perspective,
  //   //         duration: obj.duration,
  //   //         delay: obj.delay,
  //   //         easing: obj.easing,
  //   //       });
  //   //       setTimeout(() => {
  //   //         collections.push(obj);
  //   //       }, timer);
  //   //     } else if (conditionNegative) {
  //   //       fElement.classList.remove("animeed");
  //   //       anime({
  //   //         targets: elements,
  //   //         opacity: 0,
  //   //         duration: 1,
  //   //       });
  //   //     }
  //   //   }
  //   // }
  // }
}
function scrollFirstPage_and_header() {
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  function enableScroll() {
    // call this to Enable
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  const headerControl = {
    items: document.querySelectorAll(".header__item"),
    hide: function () {
      for (let i of this.items) {
        transformCenterX(i);
        i.style.opacity = "0";
      }
    },
    showAnimate: function () {
      if (headerHide) {
        headerHide.pause();
      }
      headerShow = anime({
        targets: this.items,
        translateX: 0,
        scale: { value: [0, 1], duration: 1200 },
        rotate: ["1turn", "0turn"],
        opacity: { value: 1, easing: "easeOutQuart", duration: 800 },
        delay: anime.stagger(60, { from: "last" }),
        // easing: "linear",
        duration: 1600,
      });
    },
    hideAnimate: function () {
      if (headerShow) {
        headerShow.pause();
      }
      headerHide = anime({
        targets: this.items,
        translateX: function (el, i) {
          return getTransformCenterX(el);
        },
        scale: 0,
        rotate: "1turn",
        opacity: 0,
        delay: anime.stagger(60, { from: "last" }),
        easing: "easeOutSine",
        duration: 500,
      });
    },
  };

  const animeToPauseControl = {
    pause: function () {
      if (animeToPauseControlTimeOut) {
        clearTimeout(animeToPauseControlTimeOut);
      }
      if (animeToPause[0]) {
        for (let i of animeToPause) {
          i.pause();
        }
      }
      animeToPauseControlTimeOut = setTimeout(() => {
        if (animeToPause[0]) {
          for (let i of animeToPause) {
            i.pause();
          }
        }
      }, 10000);
    },
    play: function () {
      clearTimeout(animeToPauseControlTimeOut);
      if (animeToPause[0]) {
        for (let i of animeToPause) {
          i.play();
        }
      }
    },
  };
  function animateSectionTwo() {
    const section = document.querySelector(".section--two");
    const imgs = section.querySelectorAll(".slider ul li > .cover .cover_wrapper > img");
    // const texts = section.querySelectorAll(".slider ul li > .content >*:not(button)");
    const sub_titles = section.querySelectorAll(".slider ul li > .content >.sub-title");
    const titles = section.querySelectorAll(".slider ul li > .content >.title");
    const btns = section.querySelectorAll(".slider ul li > .content > .btn");
    const dots = section.querySelector(".flickity-page-dots");

    const hideElements = [section, ...imgs, ...sub_titles, ...titles, ...btns, dots];
    anime({
      targets: hideElements,
      opacity: 0,
      duration: 0,
    });
    setTimeout(() => {
      // console.log("run animate");
      anime({
        targets: dots,
        opacity: 1,
        translateY: ["100%", 0],
        // scale: { value: [3, 1], easing: "easeOutBounce", duration: 2000 },
        delay: 1700,
        easing: "easeOutSine",
        duration: 1000,
      });
      anime({
        targets: btns,
        opacity: { value: 1, easing: "easeOutSine" },
        scale: [0, 1],
        translateX: { value: ["-400px", 0], duration: 1500 },
        delay: 1700,
        duration: 1200,
      });
      anime({
        targets: titles,
        opacity: { value: 1, easing: "easeOutSine" },
        scale: [0, 1],
        translateX: { value: ["-400px", 0], duration: 1500 },
        delay: 1600,
        duration: 1200,
      });
      anime({
        targets: sub_titles,
        opacity: { value: 1, easing: "easeOutSine" },
        scale: [0, 1],
        translateX: { value: ["-400px", 0], duration: 1000 },
        delay: 1500,
        duration: 1200,
      });
      anime({
        targets: imgs,
        opacity: 1,
        translateY: ["100%", 0],
        scale: { value: [0, 1], duration: 1200 },
        easing: "easeOutExpo",
        delay: 1000,
        duration: 1200,
      });
      // easeOutElastic
      anime({
        targets: section,
        translateY: ["-100%", 0],
        // opacity: { value: 1, duration: 500, easing: "easeOutSine" },
        opacity: 1,
        easing: "easeOutCubic",
        duration: 1000,
      });

      // anime({
      //   targets: covers,
      //   left: "0%",
      //   right: "0%",
      //   easing: "easeOutCubic",
      //   duration: 1000,
      // });
    }, delay * 1000);
  }
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  headerControl.hide();
  var headerShow, headerHide;
  var animeToPauseControlTimeOut;
  var isScrolling = false;

  // var isScrollingTimeOut;
  var timeOutOnWheel;
  var nextpage = [fullpage.nextElementSibling];
  if (fullpage.nextElementSibling.nextElementSibling) {
    nextpage = [...nextpage, fullpage.nextElementSibling.nextElementSibling];
    if (fullpage.nextElementSibling.nextElementSibling.nextElementSibling) {
      nextpage = [...nextpage, fullpage.nextElementSibling.nextElementSibling.nextElementSibling];
    }
  }
  // console.log(nextpage);

  toSided = false;
  toSidedCompletely = false;
  // toFixedStyle(fullpage);
  // window.addEventListener("scroll", scrollToTop);

  disableScroll();

  let interval = setInterval(() => {
    if (startAnimation) {
      clearInterval(interval);

      window.addEventListener("wheel", onWheelFunc);
    }
  }, 200);

  // window.onwheel = onWheelFunc;
  const delay = 1;
  //   This
  // animateLogo();
  // onWheelFunc({}, true);
  // anime({
  //   targets: ".header__logo>a",
  //   scale: logoScale,
  //   duration: 0,
  // });

  document.querySelector(".intro__arrowHead").onclick = () => {
    onWheelFunc({}, true);
  };

  function onWheelFunc(e, re) {
    // console.log(e);
    var key = !e.shiftKey && !e.ctrlKey;
    // console.log(isScrolling);
    if ((key && e.deltaY > 0 && !toSided) || re) {
      // console.log("Cuon xuong");
      // console.log("wheel1");
      toSided = true;
      addActiveBody();
      animateLogoRemove();
      headerControl.showAnimate();
      animeToPauseControl.pause();
      anime({
        targets: fullpage,
        translateX: "-100%",
        duration: delay * 1000,
        easing: "easeOutBounce",
      });
      // anime({
      //   targets: nextpage,
      //   translateX: "100%",
      //   duration: 0,
      //   easing: "linear",
      // });

      anime({
        targets: nextpage,
        translateX: ["100%", "0%"],
        duration: delay * 1000,
        easing: "easeOutBounce",
      });
      timeOutOnWheel = setTimeout(() => {
        toSidedCompletely = true;
        enableScroll();
        // window.removeEventListener("scroll", scrollToTop);
      }, delay * 1000);
      if (!animatedAfterScroll) {
        animationOnScroll();
        animatedAfterScroll = true;
      }
      animateSectionTwo();
    } else if (key && window.scrollY < 2 && e.deltaY < 0 && toSided && !isScrolling) {
      // console.log("Cuon len");
      // Scroll len
      toSided = false;
      headerControl.hideAnimate();
      animeToPauseControl.play();
      toSidedCompletely = false;
      clearTimeout(timeOutOnWheel);
      removeActiveBody();
      // window.onwheel = () => {};
      window.removeEventListener("wheel", onWheelFunc);
      disableScroll();
      // window.addEventListener("scroll", scrollToTop);
      animateLogo();
      anime({
        targets: fullpage,
        translateX: 0,
        duration: delay * 1800,
      });
      setTimeout(() => {
        // window.onwheel = onWheelFunc;
        window.addEventListener("wheel", onWheelFunc);
        // console.log('window.addEventListener("wheel", onWheelFunc);');
      }, delay * 1800);
    }
    // isScrolling = true;
    // clearTimeout(isScrollingTimeOut);
    // isScrollingTimeOut = setTimeout(() => {
    // console.log("scrolling");
    // isScrolling = false;
    // }, 400);
  }
  function animateLogo() {
    anime({
      targets: ".header__logo>a",
      scale: logoScale,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      duration: delay * 1800,
    });
  }
  function animateLogoRemove() {
    anime({
      targets: ".header__logo>a",
      scale: 1,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      duration: delay * 1000,
      easing: "easeOutBounce",
    });
  }
  function addActiveBody() {
    document.body.classList.add("active");
  }
  function removeActiveBody() {
    document.body.classList.remove("active");
  }
}
function productsQuantityOnResize() {
  var quantity = 0;
  assignNewWidth({}, true);
  window.addEventListener("resize", assignNewWidth);
  // window.onresize = assignNewWidth;

  function assignNewWidth(e, re) {
    let quantityNew = getProductsQuantity();
    if (quantityNew < 1) quantityNew = 1;
    if (quantityNew != quantity || re) {
      quantity = quantityNew;
      // console.log("quantity", quantity);
      for (let i of document.querySelectorAll(".section--three:not(.section--four) .product")) {
        i.style.width = `calc(100% / ${quantity})`;
      }

      // if (quantity == 1) quantity++;

      // for (let i of document.querySelectorAll(".section--four .product")) {
      //   i.style.width = `calc(100% / ${quantity})`;
      // }
    }
  }
}
function getProductsQuantity() {
  return Math.round(window.innerWidth / 300);
}
function loadDataBase() {
  function loadProducts() {
    let products = [];
    let id = 0;
    // type: stuff | pet
    // species: hamster | rabbit | guineaPig | stuff | toy
    products.push(
      new Product({
        type: "pet",
        name: "Shen",
        species: "hamster",
        description: "",
        sold: false,
        cover: ["213684313_208641747848558_1266526646951295689_n.jpg", "211338192_991661711585727_800165525845538475_n.jpg", "206889354_4096671060448977_6573253923774844042_n.jpg"],
        liked: 35,
        gender: "Cái",
      })
    );
    products.push(
      new Product({
        type: "pet",
        name: "Jelly",
        species: "hamster",
        description: "Mẹ bé này đẻ 3 đứa, nuôi xong tới lúc 3 đứa trưởng thành cái mẹ nó mất luôn. 2 anh em của bé này em cho rồi, bé này em cũng cho nốt luôn rồi. Nên không mua được đâu :>",
        cover: ["240410149_343664287540359_9143547600771012299_n.jpg", "239536154_274446010872711_5638786650459763330_n.jpg", "240347609_536879677567707_5464533897103608985_n.jpg"],
        sold: false,
        liked: 65,
      })
    );
    products.push(new Product({ type: "pet", name: "Bungerbeep", species: "hamster", description: "", cover: ["mod_article1407019_6.jpg", "mod_article1407019_6.jpg"], sold: false }));
    products.push(new Product({ type: "pet", name: "Candy", species: "hamster", description: "", cover: ["2a206tz41r821.jpg", "sjypdc4yyqz51.jpg"], sold: false }));
    products.push(new Product({ type: "pet", name: "Inkysmush", species: "hamster", description: "", cover: ["h1.jpg", "h2.jpg", "tumblr_pk05weur2t1wpb43co1_1280.jpg"], sold: false }));
    products.push(
      new Product({
        type: "pet",
        name: "Frosty",
        species: "rabbit",
        description: "Bé này mình từng nuôi, nhưng bán rồi do nó quậy với ngu quá.",
        cover: ["tho1.jpg", "tho2.jpg", "tho3.jpg"],
        sold: false,
        gender: "Đực",
        liked: 87,
      })
    );
    products.push(
      new Product({
        type: "pet",
        name: "Kimblesmush",
        species: "rabbit",
        description: "Bé này mình từng nuôi, dễ thương cực kỳ, do là lần đầu nuôi nên không biết chăm nên bé ra đi lâu rồi, buồn hiu :<",
        cover: ["tho4.jpg", "tho5.jpg", "tho6.jpg"],
        sold: false,
        gender: "Cái",
        liked: 21,
      })
    );
    products.push(new Product({ type: "pet", name: "Buddy", species: "guineaPig", description: "", cover: ["guine4.jpg", "guine3.jpg", "guine2.jpg"], sold: false }));
    products.push(
      new Product({
        type: "pet",
        name: "Gingles",
        species: "guineaPig",
        description: "Thấy 2 quả lựu đạn của toy seo nè :> Xịn xò chưa :> Hong lo ế luôn nhé hehe...",
        cover: ["238242680_395860058760769_1789480820271904931_n.jpg", "239936000_1028158577953728_6111259186228021192_n.jpg", "235522526_190182103103456_3087002335719432959_n.jpg"],
        sold: false,
        liked: 12,
      })
    );
    // ......
    products.push(
      new Product({
        type: "stuff",
        name: "Lồng xách tay hamster",
        species: "stuff",
        description: "",
        cover: ["240712949_373724217632972_7115355396831851746_n.jpg", "237638218_1654297514917779_159637990097640203_n.jpg", "239412934_558648435337179_1622525699389735322_n.jpg"],
        sold: false,
        liked: 98,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Lồng mica 1 tầng",
        species: "stuff",
        description: "",
        cover: ["240706865_428248251953898_2301815411140268593_n.jpg", "217306267_568187031014782_3933954885757458550_n.jpg", "241233807_583962672757929_6516536010358666665_n.jpg"],
        sold: false,
        liked: 9,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Lồng hamster cở lớn",
        species: "stuff",
        description: "",
        cover: ["240644915_611105953389516_6431140633690371843_n.jpg", "240727998_1204996629984504_280416794015873192_n.jpg", "240450870_407175907417670_1522255374927818839_n.jpg"],
        sold: false,
        liked: 2,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Đĩa bay xách tay",
        species: "stuff",
        description: "",
        cover: ["240869409_166331788916045_5353426098667656688_n.jpg", "237707294_241492521189764_528667470908003839_n.jpg", "239902267_349066363527210_3644172529458450002_n.jpg"],
        sold: false,
        liked: 121,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Lồng hamster mini",
        species: "stuff",
        description: "",
        cover: ["240511411_984667878765184_9135766092212904178_n.jpg", "240417495_273709880952581_8301977592304155001_n.jpg", "240530574_285215429609998_5446182372936133211_n.jpg"],
        sold: false,
        liked: 77,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Lồng hamster hoàng tử",
        species: "stuff",
        description: "",
        cover: ["221615015_425135571978097_5012808734459016468_n.jpg", "218892031_137286868545161_4949815104839960171_n.jpg", "221187438_339061311213029_4307759676914558066_n.jpg"],
        sold: false,
        liked: 93,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Xích đu đi đu đưa",
        species: "toy",
        description: "",
        cover: ["239635543_284800442984407_8147836509436470177_n.jpg", "237469137_4550285111658765_3807004600942597620_n.jpg", "239723828_1008033753351858_675537763499228424_n.jpg"],
        sold: false,
        liked: 66,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Cầu nhúng nhảy hamster",
        species: "toy",
        description: "",
        cover: ["240568360_4141414112653183_3522124453029375801_n.jpg", "240491822_978428669643664_721282927413706345_n.jpg", "240146298_378656683698960_1015229008723299121_n.jpg"],
        sold: true,
        liked: 24,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Cầu thang sắc màu",
        species: "toy",
        description: "",
        cover: ["240756195_392139655607875_3798428489968504726_n.jpg", "234175191_939225249959194_1989445639139581245_n.jpg", "240617146_598069554541210_6327869871797745427_n.jpg"],
        sold: false,
        liked: 85,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Bóng tập đi hamster",
        species: "toy",
        description: "",
        cover: ["240620257_817059132312849_7177882713037891372_n.jpg", "240172424_1208590149654624_8334899312535823269_n.jpg", "240475886_202249605296491_250015768894001715_n.jpg"],
        sold: false,
        liked: 22,
      })
    );
    products.push(
      new Product({
        type: "stuff",
        name: "Đường hầm trốm tìm",
        species: "toy",
        description: "",
        cover: ["240600632_141563501429104_5053708829848779398_n.jpg", "237422124_366043121535432_2656124276821208382_n.jpg", "240392284_440784303845666_6470988143877339205_n.jpg"],
        sold: Math.random() < 0.2 ? true : false,
        liked: 28,
      })
    );

    return products;
    function Product(obj) {
      // console.log(obj);
      let staticUrl = {
        pet: "./img/product/hamster/",
        stuff: "./img/product/stuff/",
      };

      if (!obj.type) obj.type = "pet";
      if (!obj.species) obj.species = "hamster";
      if (!obj.name) obj.name = "Name";
      if (!obj.price) obj.price = Math.round(Math.random() * 100) * 1000;
      if (!obj.currency) obj.currency = "d";
      if (!obj.description) obj.description = "Đửng mua, hổng bán đâu. Web này làm chơi thôi, có đâu mà bán mà mua :>";
      if (!obj.sold) obj.sold = false;
      if (!obj.id) obj.id = id++;
      if (!obj.gender)
        if (obj.type == "pet") {
          obj.gender = "Đực";
        } else {
          obj.gender = "Gỗ";
        }
      if (!obj.liked) obj.liked = Math.round(Math.random() * 100);
      if (!obj.cover || (obj.cover && obj.cover.length < 1)) {
        obj.cover = [staticUrl[obj.type] + "default.jpg"];
      } else {
        for (let i in obj.cover) {
          if (!obj.cover[i].includes("http")) {
            obj.cover[i] = staticUrl[obj.type] + obj.cover[i];
          } else {
            obj.cover[i] = obj.cover[i];
          }
        }
      }
      if (!obj.birth) {
        let today = new Date();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate() - Math.trunc(Math.random() * 30));
        obj.birth = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      }

      this.type = obj.type;
      this.species = obj.species;
      this.name = obj.name.trim();
      this.gender = obj.gender;
      this.price = obj.price;
      this.currency = obj.currency;
      this.description = obj.description;
      this.sold = obj.sold;
      this.birth = obj.birth;
      this.id = obj.id;
      this.cover = obj.cover;
      this.liked = obj.liked;
    }
  }
  function productGenerateHtml(obj) {
    // console.log(obj);
    let isNew = (new Date().getTime() - new Date(getUtc(obj.birth)).getTime()) / 1000 / 60 / 60 / 24 < 7 ? '<div class="bestSeller"><i class="ti-thumb-up"></i> Mới</div>' : "";
    let isSold = obj.sold ? `<div class="soldArchive">Đã bán</div>` : "";

    let html = document.createElement("li");
    if (obj.sold) html.classList.add("sold");

    // console.log(html);
    // console.log("");
    html.classList.add("product");
    html.setAttribute("data-my-id", obj.id);
    html.setAttribute("data-my-type", obj.type);
    html.setAttribute("data-my-species", obj.species);
    html.innerHTML = `
                    <div class="background_card"></div>
                    <div class="archives">
                      ${isNew}
                      ${isSold}
                      <div class="viewAndAddCart dff">
                        <button class="btn btn--round btn--noOutline viewAndAddCart__view" onclick="modalController.modalShowProduct(${obj.id})">
                          <span class="text">Xem nhanh</span><span class="icon"><i class="ti-eye"></i></span>
                        </button>
                        <button class="btn btn--round btn--noOutline viewAndAddCart__cart" data-cant_click>
                          <span class="icon"><i class="ti-shopping-cart"></i></span><span class="text">Thêm vào giỏ</span>
                        </button>
                      </div>      
                    </div>
                    <div class="product__cover">
                      <div class="pt">
                        <img src="${obj.cover[0]}" alt="" class="product__cover-img" />
                      </div>
                    </div>
                    <div class="product__info">
                      <div class="emotion" onclick="reactionFunc(this,${obj.id})">
                        <i class="fas fa-heart"></i>
                        <i class="far fa-heart"></i>
                        <div class="amount">${obj.liked}</div>
                      </div>
                      <div class="info">
                        <div class="name">${obj.name}</div>
                        <div class="price">${obj.price + obj.currency}</div>
                      </div>
                    </div>`;
    return html;
    function getUtc(time) {
      let a = time.split("/");
      return `${a[1]}/${a[0]}/${a[2]}`;
    }
    /* <li class="product sold">
                                    <div class="background_card"></div>
                                    <div class="archives">
                                      <div class="bestSeller"><i class="ti-thumb-up"></i> Mới</div>
                                      <div class="soldArchive">Đã bán</div>
                                    </div>
                                    <div class="product__cover">
                                      <div class="pt">
                                        <img src="./img/product/hamster/bb2a42d7bd8c83582c24948565df1cfa.jpg" alt="" class="product__cover-img" />
                                      </div>
                                    </div>
                                    <div class="product__info">
                                      <div class="emotion">
                                        <i class="fas fa-heart"></i>
                                        <i class="far fa-heart"></i>
                                        <div class="amount">300</div>
                                      </div>
                                      <div class="info">
                                        <div class="name">Shen</div>
                                        <div class="price">120.000d</div>
                                      </div>
                                    </div>
                                  </li>     */
  }
  function productToHtml(container, html) {
    container.appendChild(html);
  }
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  allProducts = loadProducts();
  const container = document.querySelector(".section--three:not(.section--four) .products");
  container.innerHTML = ``;
  // console.log(container);
  // console.log("allProducts", allProducts);
  for (let i of allProducts) {
    productToHtml(container, productGenerateHtml(i));
  }
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
}
function modalController(products) {
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

  modalController.modalShowProduct = (e) => {
    const product = products.find((re) => re.id == e);
    // console.log(product);
    // flickityFunc(product);
    modalController.show(modalProduct(product));
    flickityFunc(".main-carousel3");
  };

  modalController.modalShowError = () => {
    modalController.show(modalCantClick());
  };

  function modalProduct(obj) {
    // console.log(obj);

    const imgs = obj.cover.map((re) => `<img src="${re}" alt="" class="carousel-cell" />`).join("");
    // console.log(imgs);
    let birth = `<p>Ngày sinh: ${obj.birth}</p>`;
    let gender = `<p>Giới tính: ${obj.gender}</p>`;
    if (obj.type != "pet") {
      birth = `<p>Ngày sản xuất: ${obj.birth}</p>`;
      gender = `<p>Chất liệu: ${obj.gender}</p>`;
    }
    let isLiked = "";
    if (currentLiked.split(",").find((re) => re == obj.id)) {
      isLiked = "active";
    }

    const product = document.createElement("div");
    product.classList.add("modal__product");
    // flickityFunc(product)
    product.innerHTML = `
                    <div class="randomThings">
                      <div class="randomThing randomThing--1"></div>
                    </div>
                    <div class="modal__product-wrapper">
                      <div class="modal__product-content modal__product-cover">
                        <div class="main-carousel3 modal__product-coverBox">
                          ${imgs}
                        </div>
                      </div>
                      <div class="modal__product-content modal__product-infomation">
                        <div class="modal__product-info">
                          <p class="modal__product-name">${obj.name}</p>
                          <p class="modal__product-price">${obj.price + obj.currency}</p>
                          <div class="modal__product-des">
                          ${birth}
                          ${gender}
                            <p>
                              ${obj.description}
                            </p>
                          </div>
                        </div>
                        <div class="modal__product-purchase">
                          <div class="modal__product-addCart">
                            <button class="btn btn--round btn--noOutline">Thêm vào giỏ</button>
                          </div>
                          <div class="modal__product-emotion">
                            <button class="btn btn--round btn--noOutline ${isLiked}" onclick="reactionFunc(this,${obj.id})">
                              <i class="far fa-heart"></i>
                              <i class="fas fa-heart"></i>
                            </button>
                          </div>
                        </div>
                        <div class="modal__product-categories">Xếp loại: <a href="javascript:;">${obj.species}</a></div>
                      </div>
                    </div>
                    <div class="modal__product-close" onclick="modalController.hide()"></div>`;
    return product;
  }
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
function bottomBGAnimateOnScroll() {
  const backgrounds = document.querySelectorAll(".bottom_BG");
  const strength = 2;
  if (backgrounds[0]) {
    window.addEventListener("scroll", movingBackground);
    // movingBackground();
    function movingBackground() {
      for (let i of backgrounds) {
        i.style.backgroundPosition = `${window.scrollY / strength}px auto`;
      }
    }
  }
}
function flickityFunc(class_name) {
  // console.log("class_name", class_name);
  if (class_name) {
    new Flickity(class_name, {
      wrapAround: true,
      // selectedAttraction: 0.08,
      // friction: 0.2,
      // fade: true,
    });
  } else {
    let carousel1 = document.querySelector(".main-carousel");
    // Day be i dung cach
    let carousel2 = document.querySelector(".main-carousel2");
    // Xem ngay
    // let carousel3 = document.querySelector(".main-carousel3");
    var flickity = new Flickity(carousel1, {
      wrapAround: true,
      // selectedAttraction: 0.02,
      // friction: 0.08,
      // autoPlay: true,
    });
    // carousel1.addEventListener("mouseleave", () => {
    //   flickity.playPlayer();
    // });
    var flickity2 = new Flickity(carousel2, {
      wrapAround: true,
      selectedAttraction: 0.01,
      friction: 0.1,
      prevNextButtons: false,
      // pauseAutoPlayOnHover: false,
      // autoPlay: 5000,
    });
    // var flickity3 = new Flickity(carousel3, {
    //   wrapAround: true,
    //   selectedAttraction: 0.02,
    //   friction: 0.2,
    //   fade: true,
    // });

    // carousel2.addEventListener("mouseleave", () => {
    //   flickity2.playPlayer();
    // });
  }
}
function reactionFunc(e, id) {
  // const parent = e.parentElement.parentElement;
  const target = e;
  // console.log(target);
  if (target.classList.contains("active")) {
    // console.log("bo like");
    // Bo like
    let likeId = id;
    // console.log("id remove ", likeId);
    // console.log(currentLiked.split(","));
    // console.log(currentLiked.split(",").filter((re) => parseInt(re) != likeId));
    // console.log(
    //   currentLiked
    //     .split(",")
    //     .filter((re) => parseInt(re) != likeId)
    //     .join(",")
    // );
    currentLiked = currentLiked
      .split(",")
      .filter((re) => parseInt(re) != likeId)
      .join(",");
    Cookies.set("liked", currentLiked, { expires: 365, path: "" });
    target.classList.remove("active");
    document.querySelector(`*[data-my-id='${id}'] .emotion`).classList.remove("active");

    let amount = target.querySelector(".amount") || document.querySelector(`*[data-my-id='${id}'] .amount`);
    if (amount) {
      amount.innerText = parseInt(amount.innerText) - 1;
    }
  } else {
    // console.log("them like");
    // Them like
    if (!currentLiked) {
      currentLiked = id + ",";
      Cookies.set("liked", currentLiked, { expires: 365, path: "" });
    } else {
      let likeId = id;
      if (currentLiked.split(",").find((re) => re == likeId)) {
        // Do nothing
      } else {
        currentLiked = currentLiked + id + ",";
        Cookies.set("liked", currentLiked, { expires: 365, path: "" });
      }
    }
    target.classList.add("active");
    // const btnOfLi = document.querySelector(`*[data-my-id='${id}'] `);
    document.querySelector(`*[data-my-id='${id}'] .emotion`).classList.add("active");

    let amount = target.querySelector(".amount") || document.querySelector(`*[data-my-id='${id}'] .amount`);
    if (amount) {
      amount.innerText = parseInt(amount.innerText) + 1;
    }
  }
  // console.log('Cookies.get("liked")', Cookies.get("liked"));
  // console.log("currentLiked", currentLiked);
  // console.log("");
}
function isotopeFunc() {
  var grid = document.querySelector(".isotope");
  var iso = new Isotope(grid, {
    itemSelector: ".product",
    layoutMode: "fitRows",
  });

  var groupBtns = document.querySelector(".product__headers");
  groupBtns.onclick = (e) => {
    // console.log("click group");
    const btn = e.target.closest(".product__header");
    if (btn) {
      // console.log(btn.getAttribute("data-myFilter"));
      const filterType = btn.getAttribute("data-myFilter");

      if (filterType == "*") {
        iso.arrange({ filter: "*" });
      } else {
        iso.arrange({
          filter: function (ele) {
            return ele.getAttribute("data-my-species") == filterType;
          },
        });
      }
    } else {
      return;
    }
  };
}
function productsNavigation() {
  const nav = document.querySelector(".product__header-nav>.nav");
  const products = document.querySelectorAll(".product__header");
  let lastEleClicked = null;

  for (let i of products) {
    i.classList.remove("active");
    i.onclick = changeNavLeft;
    // console.log(i);
    // console.log("i.offsetLeft =", i.offsetLeft);
    // console.log("i.offsetWidth =", i.offsetWidth);
    // console.log("i.offsetWidth / 2 =", i.offsetWidth / 2);
  }
  products[0].click();
  lastEleClicked = products[0];
  // console.log(products);
  // console.log([nav]);
  function changeNavLeft() {
    if (lastEleClicked) {
      lastEleClicked.classList.remove("active");
    }
    this.classList.add("active");
    let left = this.offsetLeft;
    // let wid = window.getComputedStyle(this).width;
    let wid = this.offsetWidth + "px";

    anime({
      targets: nav,
      translateX: left,
      // width: wid,
      duration: 700,
    });

    // nav.style.left = `${left}px`;
    nav.style.width = `${wid}`;
    lastEleClicked = this;
  }
}
function setEmotion(arr) {
  const products = document.querySelectorAll(".section--three:not(.section--four) .products .product");
  for (let i in arr) {
    for (let j of products) {
      if (j.getAttribute("data-my-id") == arr[i]) {
        reactionFunc(j.querySelector(".emotion"), arr[i]);
        break;
      }
    }
  }
  // const products = document.querySelectorAll('pro')
}
function refreshWaypointFunc() {
  const delay_for_waypointJs = 450;
  let timeOut;
  window.addEventListener("resize", () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      Waypoint.refreshAll();
    }, delay_for_waypointJs);
  });
  window.addEventListener("mouseup", () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      Waypoint.refreshAll();
    }, delay_for_waypointJs);
  });
}
function checkAllAddOns() {
  let condition = typeof anime && typeof Flickity && typeof Waypoint && typeof Cookies && typeof Isotope;
  let interval = setInterval(() => {
    console.log("addon");
    if (condition) {
      console.log("addon loaded");
      clearInterval(interval);
      allAddOnsLoaded = true;
    }
  }, 50);
}
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const fullpage = document.getElementById("fullpage");
const logoScale = 1.8;
var toSided = false;
var toSidedCompletely = false;
var startAnimation = false;
var startAnimationDone = false;
var animatedAfterScroll = false;
var animeToPause = [];
let allProducts = [];
var currentLiked;

var allAddOnsLoaded = false;
checkAllAddOns();

let interval = setInterval(() => {
  console.log("interval");

  if (allAddOnsLoaded) {
    console.log("interval ok");
    clearInterval(interval);
    loadDataBase();
    flickityFunc();
    productsQuantityOnResize();
    productsNavigation();
    currentLiked = Cookies.get("liked");
    if (currentLiked) setEmotion(currentLiked.split(","));
    modalController(allProducts);
    isotopeFunc();
    refreshWaypointFunc();
    onStartAnimation();
    scrollFirstPage_and_header();
  }
}, 50);

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    loaderControl.hide();
    setTimeout(() => {
      startAnimation = true;
    }, 300);
    // }, 1000);
  }
};

// animationOnScroll là có 1 thư viện do mình tự code :> Có sử dụng 2 thư viện ngoài là Waypoint và Anime
// animationOnScroll();
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Cookies.remove("liked", { path: "" });
// console.log(Cookies.get("liked"));

// window.onkeydown = () =>
//   window.scrollTo({
//     top: 9999,
//     left: 0,
// behavior: "smooth",
// });

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

// t = document.querySelector(".try");

// window.onmousemove = (e) => {
//   console.log(e.target);
// };
// document.body.contentEditable = true;

// console.log(typeof Flickityy);
// console.log(anime);
// console.log(Flickity);
// console.log(Waypoint);
// console.log(Cookies);
// console.log(Isotope);
