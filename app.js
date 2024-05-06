const textarea = document.getElementById("textarea");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", function() {
    const valueLength = textarea.value.length;
    textarea.style.borderColor = valueLength <= 50 ? "green" : "red";
    charCount.style.color = valueLength <= 50 ? "green" : "red";
    charCount.textContent = valueLength + "/50";
});
