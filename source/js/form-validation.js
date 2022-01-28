let form = document.querySelector(".program-form");

if (form) {
  let inputs = form.querySelectorAll(".program-text-field__input");
  let submit = form.querySelector(".program-form__button");

  submit.addEventListener("click", function() {
    for (let input of inputs) {
      if (input.checkValidity() == false) {
        input.classList.add("program-text-field__input--error");
      } else {
        input.classList.remove("program-text-field__input--error");
      }

      input.addEventListener("input", function() {
        if (input.checkValidity()) {
          input.classList.remove("program-text-field__input--error");
        }
      })
    }
  })
}
