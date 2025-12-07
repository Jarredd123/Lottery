// Map years to their respective image filenames
const lotteryImages = {
  2010: "images/2010 Powerball Lottery Numbers.JPEG",
  2011: "images/2011 Powerball Lottery Numbers.JPEG",
  2012: "images/2012 Powerball Lottery Numbers.JPEG",
  2013: "images/2013 Powerball Lottery Numbers.JPEG",
  2014: "images/2014 Powerball Lottery Numbers.JPEG",
  2015: "images/2015 Powerball Lottery Numbers.JPEG",
  2016: "images/2016 Powerball Lottery Numbers.JPEG",
  2017: "images/2017 Powerball Lottery Numbers.JPEG",
  2018: "images/2018 Powerball Lottery Numbers.JPEG",
  2019: "images/2019 Powerball Lottery Numbers.JPEG",
  2020: "images/2020 Powerball Lottery Numbers.JPEG",
  2021: "images/2021 Powerball Lottery Numbers.JPEG",
  2022: "images/2022 Powerball Lottery Numbers.JPEG",
  2023: "images/2023 Powerball Lottery Numbers.JPEG",
  2024: "images/2024 Powerball Lottery Numbers.JPEG",
  2025: "images/2025 Powerball Lottery Numbers.JPEG"
};

// Function to swap the image
function swapImage(event) {
  const selectedYear = event.target.value;
  const lotteryImg = document.getElementById("Lottery");

  if (lotteryImages[selectedYear]) {
    lotteryImg.src = lotteryImages[selectedYear];
  } else {
    lotteryImg.src = "";
  }
}

// Add event listeners to all dropdowns
document.getElementById("yeardropdown1").addEventListener("change", swapImage);
document.getElementById("yeardropdown2").addEventListener("change", swapImage);
document.getElementById("yeardropdown3").addEventListener("change", swapImage);
