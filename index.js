const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector("#qrImage");
const qrText = document.querySelector("#qrText");


function generateQR() {
    if (!navigator.onLine) {
        alert("Please check your internet connection")
    }
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");   
    } else {
        setTimeout(() => {
            qrText.classList.add("error");
            qrText.style.borderColor = "#ff0000";
        },)
    }
    qrText.addEventListener("input", () => {
        qrText.style.borderColor = "#494eea";
    })
}