const userList = [];
document.body.onload = addElement;

async function storeData(event) {
  event.preventDefault();

  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("fLastName").value;
  var userEmail = document.getElementById("fEmail").value;
  var favoriteCodeLang = document.getElementById("fLanguages").value;

  var object = {
    firstName,
    lastName,
    userEmail,
    favoriteCodeLang,
  };

  let userList = JSON.parse(localStorage.getItem("userList")) || [];

  if (object.userEmail.trim() === "") return alert("Fill text");

  if (checkIfUserExist(object.userEmail, userList)) {
    return alert("User already exists");
  }

  await userList.push(object);

  localStorage.setItem("userList", JSON.stringify(userList));

  alert("Data has been saved");
  document.getElementById("my-Form").reset();
}

function checkIfUserExist(userEmail, userList) {
  return userList.some((test) => test.userEmail === userEmail);
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

function addElement() {
  const newDiv = document.createElement("div");

  const newContet = document.createTextNode("Hello there m8");

  newDiv.appendChild(newContet);

  const currentDiv = document.getElementById("testDiv");

  document.body.insertBefore(newDiv, currentDiv);
}
