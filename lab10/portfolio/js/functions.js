function showPopup() {
    const popup = document.getElementById("videoPopup");
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("videoPopup");
    const video = popup.querySelector("video");
    video.pause();
    popup.style.display = "none";
}

function init() {

    const popup = document.getElementById("videoPopup");
    const videoButton = document.getElementById("videoButton");
    const closeButton = document.getElementById("closePopup");

    videoButton.addEventListener("click", showPopup);
    closeButton.addEventListener("click", closePopup);
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
