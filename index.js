const btnUpload = document.querySelector(".btn-upload");
const fileInput = document.getElementById("file-input");
const fileName = document.querySelector(".file-name");

btnUpload.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function () {
  console.log(fileInput.value);
  fileName.innerHTML = fileInput.value
    ? fileInput.value.split("\\").pop().split("/").pop()
    : "No file chosen";
});

const fileUnitContainer = document.querySelectorAll(".file-unit__container");
const fileUploadContainer = document.querySelectorAll(
  ".file-upload__container"
);
const btnNext = document.querySelector(".btn-next");
let number = 0;

btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < fileUnitContainer.length; i++) {
    if (!fileUnitContainer[i].classList.contains("active")) {
      fileUnitContainer[i].classList.add("active");
      fileUploadContainer[i - 1].classList.remove("active");
      fileUploadContainer[i].classList.add("active");
      i++;
      break;
    }
  }
});
