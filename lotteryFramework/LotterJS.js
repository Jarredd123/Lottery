function swapImage() {
  if (document.getElementById("yeardropdown1").value === "") {
    document.getElementById("Lottery").src = "";
    return; 
  }

  if (document.getElementById("yeardropdown1").value == 2010) {
    document.getElementById("Lottery").src = "2010 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown1").value == 2011) {
    document.getElementById("Lottery").src = "2011 Powerball Lottery Numbers.JPEG";
  }
	if (document.getElementById("yeardropdown1").value == 2012) {
    document.getElementById("Lottery").src = "2012 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown1").value == 2013) {
    document.getElementById("Lottery").src = "2013 Powerball Lottery Numbers.JPEG";
  }
	if (document.getElementById("yeardropdown1").value == 2014) {
    document.getElementById("Lottery").src = "2014 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown1").value == 2015) {
    document.getElementById("Lottery").src = "2015 Powerball Lottery Numbers.JPEG";
  }
	if (document.getElementById("yeardropdown2").value == 2016) {
    document.getElementById("Lottery").src = "2016 Powerball Lottery Numbers.JPEG";
  }
}


 document.getElementById("yeardropdown1").addEventListener("click", swapImage);
function swapImage2() {

  if (document.getElementById("yeardropdown2").value === "") {
    document.getElementById("Lottery").src = "";
    return; 
  }

  if (document.getElementById("yeardropdown2").value == 2016) {
    document.getElementById("Lottery").src = "2016 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown2").value == 2017) {
    document.getElementById("Lottery").src = "2017 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown2").value == 2018) {
    document.getElementById("Lottery").src = "2018 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown2").value == 2019) {
    document.getElementById("Lottery").src = "2019 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown2").value == 2020) {
    document.getElementById("Lottery").src = "2020 Powerball Lottery Numbers.JPEG";
  }
}

document.getElementById("yeardropdown2").addEventListener("click", swapImage2);
function swapImage3() {

  if (document.getElementById("yeardropdown3").value === "") {
    document.getElementById("Lottery").src = "";
    return; 
  }

  if (document.getElementById("yeardropdown3").value == 2021) {
    document.getElementById("Lottery").src = "2021 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown3").value == 2022) {
    document.getElementById("Lottery").src = "2022 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown3").value == 2023) {
    document.getElementById("Lottery").src = "2023 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown3").value == 2024) {
    document.getElementById("Lottery").src = "2024 Powerball Lottery Numbers.JPEG";
  }

  if (document.getElementById("yeardropdown3").value == 2025) {
    document.getElementById("Lottery").src = "2025 Powerball Lottery Numbers.JPEG";
  }
}

document.getElementById("yeardropdown3").addEventListener("click", swapImage3);


document.getElementById("green1").addEventListener("click", function () {
    window.location.href = "home.html"; 
});

document.getElementById("boldgreen").addEventListener("click", function () {
    window.location.href = "data.html";
});

document.getElementById("green2").addEventListener("click", function () {
    window.location.href = "description.html";
});


document.getElementById("green3").addEventListener("click", function () {
    window.location.href = "about.html";
});



