let my_pic = document.getElementById("my_pic");
let my_btn = document.getElementById("my_btn");

function showImage() {
  if (my_btn.innerText === "Show Image") {
    my_pic.style.display = "block";
    my_btn.innerText = "Hide Image";
  } else {
    my_pic.style.display = "none";
    my_btn.innerText = "Show Image";
  }
}

// ====================================================================================================

let fullPara =
  "Hi, my name is Huzaifa. I am currently studying in Class 1st Year and learning Frontend Development at Saylani. Right now, I am focusing on JavaScrip and building my skills step by step to become a professional web developer in the future.";

let shortPara = fullPara.slice(0, 50);

document.getElementById("intro_para").innerText = shortPara;

function showMore() {
  let intro_para = document.getElementById("intro_para");
  let para_btn = document.getElementById("para_btn");

  if (para_btn.innerText === "Show More") {
    intro_para.innerText = fullPara;
    para_btn.innerText = "Show less";
  } else {
    intro_para.innerText = shortPara;
    para_btn.innerText = "Show More";
  }
}

// ====================================================================================================

let form = document.getElementById("form");
let form_btn = document.getElementById("form_btn");

form.style.display = "none";

function showForm() {
  if (form_btn.innerText === "Show Form") {
    form.style.display = "block";
    form_btn.innerText = "Hide Form";
  } else {
    form.style.display = "none";
    form_btn.innerText = "Show Form";
  }
}

function checkForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  if (name === "" || email === "" || msg === "") {
    alert("please fill all input fields");
  } else {
    alert("Your form has been submitted");
  }
}
