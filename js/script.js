//function login
function login() {
// Ambil nilai dari input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
// Validasi input
  if (username === "" || password === "") {
    alert("Username dan Password tidak boleh kosong");
    return;
  }

  document.getElementById("name").innerText = username;
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.remove("hidden");
  });
}

//function logout
function logout() {
  document.getElementById("name").innerText = "";
// menyembyunikan page utama dan tampilkan kembali form login// seakan mau login(manipulasi)
  document.querySelector(".login-container").classList.remove("hidden");
  document.querySelectorAll("#main-content").forEach(function (element) {
    element.classList.add("hidden");
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//autoslideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // pergantian gambar setiap 2 detik
}

// Calculator BMI
document.getElementById('bmi-form').addEventListener('submit', function(event) {
  event.preventDefault();
// Get input values
  const gender = document.querySelector('input[name="gender"]:checked');
  const weight = parseFloat(document.getElementById('weight').value);
  const age = parseInt(document.getElementById('age').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // konversi tinggi badan dari CM ke M
  
  if (!gender || isNaN(weight) || isNaN(age) || isNaN(height) || height === 0) {
      document.getElementById('result').innerText = 'Please fill out all fields with valid numbers and select your gender.';
      return;
  }
// Calculate BMI
  const bmi = weight / (height * height);
  let category = '';
// Determine BMI category
  if (bmi < 14.9) {
      category = 'Underweight';
  } else if (bmi >= 14.9 && bmi < 24.9) {
      category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 59.9) {
      category = 'Overweight';
  } else {
      category = 'Obesity';
  }
// Display result
  document.getElementById('result').innerText = `Gender: ${gender.value}\nAge: ${age} years\nYour BMI is ${bmi.toFixed(2)} (${category})`;
});

document.getElementById('reset-btn').addEventListener('click', function() {
  document.getElementById('bmi-form').reset();
  document.getElementById('result').innerText = '';
});

//declarasi buton untuk scrol ke atas
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
//function untuk agar smooth perpindahan page
document.querySelectorAll(".nav-item").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});
