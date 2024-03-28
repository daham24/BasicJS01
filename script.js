document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "block";
  if (document.getElementById("namePopup").style.display !== "block") {
    document.getElementById("namePopup").style.display = "block";
  }
});

document.querySelectorAll(".close-button").forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "none";
  });
});

document
  .getElementById("nameNextButton")
  .addEventListener("click", function () {
    var name = document.getElementById("nameInput").value;
    document.getElementById("namePopup").style.display = "none";
    document.getElementById("addressPopup").style.display = "block";
    document.getElementById("userInfo").innerHTML = "<p>Name: " + name + "</p>";
  });

document
  .getElementById("nameSkipButton")
  .addEventListener("click", function () {
    document.getElementById("namePopup").style.display = "none";
    document.getElementById("addressPopup").style.display = "block";
  });

document
  .getElementById("addressNextButton")
  .addEventListener("click", function () {
    var address = document.getElementById("addressInput").value;
    document.getElementById("addressPopup").style.display = "none";
    document.getElementById("phonePopup").style.display = "block";
    document.getElementById("userInfo").innerHTML +=
      "<p>Address: " + address + "</p>";
  });

document
  .getElementById("addressSkipButton")
  .addEventListener("click", function () {
    document.getElementById("addressPopup").style.display = "none";
    document.getElementById("phonePopup").style.display = "block";
  });

document
  .getElementById("phoneNextButton")
  .addEventListener("click", function () {
    var phoneNumber = document.getElementById("phoneInput").value;
    document.getElementById("phonePopup").style.display = "none";
    document.getElementById("countryPopup").style.display = "block";
    document.getElementById("userInfo").innerHTML +=
      "<p>Phone Number: " + phoneNumber + "</p>";
  });

document
  .getElementById("phoneSkipButton")
  .addEventListener("click", function () {
    document.getElementById("phonePopup").style.display = "none";
    document.getElementById("countryPopup").style.display = "block";
  });

document
  .getElementById("countryNextButton")
  .addEventListener("click", function () {
    var country = document.getElementById("countryInput").value;
    document.getElementById("countryPopup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("userInfo").innerHTML +=
      "<p>Country: " + country + "</p>";
    document.getElementById("popupContainer").style.display = "none";
    // document.getElementById("startButton").style.display = "none";
  });

document
  .getElementById("countrySkipButton")
  .addEventListener("click", function () {
    document.getElementById("countryPopup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.getElementById("popupContainer").style.display = "none";
  });
