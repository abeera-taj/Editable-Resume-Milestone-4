function makeEditable(element: HTMLElement) {
  element.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.value = element.innerText;

    element.replaceWith(input);
    input.focus();

    input.addEventListener("blur", () => {
      element.innerText = input.value;
      input.replaceWith(element);
    });
  });
}

const editableElements = document.querySelectorAll(".editable");

editableElements.forEach((element) => {
  makeEditable(element as HTMLElement);
});
