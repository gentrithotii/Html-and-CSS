const userList = [];

function storeData(event) {
  event.preventDefault();

  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("fLastName").value;
  var userEmail = document.getElementById("fEmail").value;

  var object = {
    firstName,
    lastName,
    userEmail,
  };

  let userList = JSON.parse(localStorage.getItem("userList")) || [];

  userList.push(object);

  localStorage.setItem("userList", JSON.stringify(userList));

  alert("Data has been saved");
}

function getLocalStorageData() {
  let storedData = localStorage.getItem("userList");

  if (!storedData) {
    console.log("No data found in localStorage");
    return;
  }

  try {
    let parsedData = JSON.parse(storedData);
    console.log(parsedData);
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    console.log("Stored data:", storedData);
  }
}

function clearData() {
  localStorage.clear();
}
