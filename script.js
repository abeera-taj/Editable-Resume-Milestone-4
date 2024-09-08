// Function to make elements editable
function makeEditable(element) {
    element.addEventListener("click", function () {
        var input = document.createElement("input");
        input.type = "text";
        input.value = element.innerText;
        // Replace the element with the input field
        element.replaceWith(input);
        input.focus();
        // On losing focus, update the original content
        input.addEventListener("blur", function () {
            element.innerText = input.value;
            input.replaceWith(element);
        });
    });
}
// Get all editable elements
var editableElements = document.querySelectorAll(".editable");
// Make each element editable on click
editableElements.forEach(function (element) {
    makeEditable(element);
});
