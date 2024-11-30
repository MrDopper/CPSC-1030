function confirm() {
    alert("Your Form has been submitted");
}
function hired() {
    alert("Thank you so much for this opportunity! I'm excited to contribute to the team and look forward to starting this journey with you");
}
function init() {
    document.getElementById("submitForm").addEventListener("click", confirm);
    document.getElementById("hire").addEventListener("click", hired);
}

document.addEventListener("DOMContentLoaded", init);