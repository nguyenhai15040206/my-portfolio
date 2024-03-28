const nav = document.querySelector(".aside .aside-menu .nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
const arrAnimation = [""]; // chứa mảng animation để random
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove(
      "back-section",
      "animated-section-rotateCarouselLeftOut"
    );
  }
}
function addBackSection(num) {
  allSection[num].classList.add(
    "back-section",
    "animated-section-rotateCarouselLeftOut"
  );
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove(
      "active",
      "animated-section-rotateCarouselLeftIn"
    );
  }
  const target = element.getAttribute("href").split("#")[1];
  console.log(target);
  document
    .querySelector("#" + target)
    .classList.add("active", "animated-section-rotateCarouselLeftIn");
}

//
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();

  // Show menu
  const navMb = document.querySelector(".aside .menu-moblie .nav");
  if (navMb) {
    const navListMB = navMb.querySelectorAll("li");
    const totalNavListMB = navListMB.length;
    // nav moblie
    for (let i = 0; i < totalNavListMB; i++) {
      const a = navListMB[i].querySelector("a");
      console.log(a);
      a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavListMB; j++) {
          if (navListMB[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
          }
          navListMB[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
      });
    }
  }
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// send email
function SendEmail() {
  var params = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    subject: document.getElementById("txtSubject").value,
    message: document.getElementById("txtMessage").value,
  };
  emailjs
    .send("service-portfolio", "template_t31leab", params)
    .then(function (res) {
      alert("Success!!!" + res.status);
      document.getElementById("txtName").value = "";
      document.getElementById("txtEmail").value = "";
      document.getElementById("txtSubject").value = "";
      document.getElementById("txtMessage").value = "";
    })
    .catch(function (error) {
      alert(error);
    });
}
