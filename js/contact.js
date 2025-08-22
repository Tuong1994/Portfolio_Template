const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formButton = document.querySelector(".form-button");

// Hiển thị input hợp lệ
const isValidate = (input) => {
  const formControl = input.parentElement;
  formButton.disabled = false;
  formControl.classList.remove("form-group-error");
  const errorEl = formControl.querySelector("small");
  errorEl.innerText = "";
  return true;
};

// Hiển thị input không hợp lệ
const isNotValidate = (input, message) => {
  const formControl = input.parentElement;
  formButton.disabled = true;
  formControl.classList.add("form-group-error");
  const errorEl = formControl.querySelector("small");
  errorEl.innerText = message;
  return false;
};

// Validate email
const checkEmail = (input) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value.trim() === "")
    return isNotValidate(input, "This field is required");
  if (!regex.test(input.value.trim()))
    return isNotValidate(input, "Email is not valid");
  return isValidate(input);
};

// Validate required chung
const checkRequired = (input) => {
  if (input.value.trim() === "")
    return isNotValidate(input, "This field is required");
  return isValidate(input);
};

// Helper: gắn validation realtime
const attachValidation = (input, validatorFn) => {
  input.addEventListener("input", () => validatorFn(input));
};

// Gắn realtime validate
attachValidation(name, checkRequired);
attachValidation(email, checkEmail);
attachValidation(message, checkRequired);

// Validate khi submit
export const formSubmit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameOk = checkRequired(name);
    const emailOk = checkEmail(email);
    const messageOk = checkRequired(message);

    if (nameOk && emailOk && messageOk) {
      const formData = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      console.log("submit", formData);
    } else {
      console.log("form is not valid");
    }
  });
};
