const images = [
  { src: "Texas Photo 1.jpg", caption: "Texas Capitol" },
  { src: "Texas Photo 2.jpg", caption: "The Alamo" },
  { src: "Texas Photo 3.jpg", caption: "Palo Duro Canyon" },
  { src: "Texas Photo 4.jpg", caption: "Big Bend National Park" },
  { src: "Texas Photo 5.jpg", caption: "Johnson Space Center" },
];

let currentIndex = 0;

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("texas-photos").src = images[currentIndex].src;
  document.getElementById("photo-caption").textContent =
    images[currentIndex].caption;
}

function validateEmails() {
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirm-email").value;

  if (email != confirmEmail) {
    alert("Email addresses do not match.");
    return false;
  } else {
    return true;
  }
}
