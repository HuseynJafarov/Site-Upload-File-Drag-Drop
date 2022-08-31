// let LgForm = document.getElementById("login-form");

// LgForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let userName = document.querySelector("#exampleInputEmail1").value;
//   if (userName.trim() == "") {
//     console.log("bosh buraxmayin");
//     return;
//   }

//   createUser(userName);
// });

// function createUser(usrName){
// console.log(usrName);
// }

// let dragElems = document.querySelector(".item");
// let dropElem = document.querySelector(".drop-area");

// dragElems.ondragstart = () => {
//   console.log("drag start");
// };

// dragElems.ondragend = () => {
//   console.log("drag end");
// };

// dragElems.ondrag = () => {
//   console.log("drag continue");
// };

let uploadIcon = document.querySelector(".upload-icon");
let table = document.querySelector(".table");
let uploadBtn = document.getElementById("upload-btn");

uploadIcon.addEventListener("click", function () {
  uploadBtn.click();
});

uploadBtn.addEventListener("change", function (e) {
  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.onloadend = (event) => {
      let base64 = event.currentTarget.result;

      table.lastElementChild.innerHTML += `<tr>
            <td>${file.size / 1024} Kb</td>
            <td>${file.name}</td>
            <td><img src="${base64}" width="100px" height="100px" alt=""></td>
          </tr>`;
    };

    reader.readAsDataURL(file);
  }
});

uploadBtn.addEventListener("change", handleImage, false);
function handleImage(e) {
  let reader = new FileReader();
  reader.onload = function (event) {
    $("#blah").attr("src", event.target.result);
  };
  reader.readAsDataURL(e.target.files[0]);
}
