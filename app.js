const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const confirmField = document.querySelector("#confirm");
const nameField = document.querySelector("#name");
const phoneField = document.querySelector("#phone");
const genderField = document.querySelector("#gender");
const userAccount = document.querySelector(".user-account");
const userProfile = document.querySelector(".user-profile");
const thankYou = document.querySelector(".thank-you");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const submitBtn = document.querySelector(".submit");

emailField.valid = false;
passwordField.valid = false;
confirmField.valid = false;

emailField.onblur = function () {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        this.classList.remove("error");
        this.valid = true;
    } else {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Enter a valid email";
        this.valid = false;
    }
};

passwordField.onblur = function () {
    if (this.value.trim().length < 6) {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Password min length is 6";
        this.valid = false;
    } else {
        this.classList.remove("error");
        this.valid = true;
    }
};

confirmField.onblur = function () {
    if (this.value.trim().length !== password.value.trim().length) {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Password must match";
        this.valid = false;
    } else {
        this.classList.remove("error");
        this.valid = true;
    }
};

nameField.onblur = function () {
    if (/\d+/g.test(this.value.trim()) || this.value.trim() === "") {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Enter a valid name";
        this.valid = false;
    } else {
        this.classList.remove("error");
        this.valid = true;
    }
};

phoneField.onblur = function () {
    if (
        !/\d+/g.test(this.value.trim()) ||
        this.value.trim() === "" ||
        this.value.trim().length < 9
    ) {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Enter a valid phone number";
        this.valid = false;
    } else {
        this.classList.remove("error");
        this.valid = true;
    }
};

genderField.onblur = function () {
    if (this.value.trim() === "") {
        this.classList.add("error");
        getSiblings(this)[1].textContent = "Select gender";
        this.valid = false;
    } else {
        this.classList.remove("error");
        this.valid = true;
    }
};

nextBtn.onclick = function () {
    if (emailField.valid && passwordField.valid && confirmField.valid) {
        this.classList.add("hide");
        submitBtn.classList.remove("hide");
        prevBtn.classList.remove("disabled");

        userAccount.style.opacity = "0";
        userAccount.classList.add("hide");

        userProfile.style.opacity = "1";
        userProfile.classList.remove("hide");
        userProfile.classList.add("slideRight");
    }
};

prevBtn.onclick = function () {
    submitBtn.classList.add("hide");
    nextBtn.classList.remove("hide");

    userProfile.style.opacity = "0";
    userProfile.classList.add("hide");

    userAccount.style.opacity = "1";
    userAccount.classList.remove("hide");
    userAccount.classList.add("slideLeft");
};

submitBtn.onclick = function (e) {
    e.preventDefault();
    if (nameField.valid && phoneField.valid && genderField.valid) {
        userProfile.classList.add("hide");
        thankYou.classList.remove("hide");

        document.querySelector(
            ".thank-you h3",
        ).innerHTML = `Thank You ${nameField.value} for registering with us.`;

        document.querySelector(
            ".thank-you p",
        ).innerHTML = `We have sent a confirmation mail to ${emailField.value}`;

        prevBtn.classList.add("hide");
        submitBtn.classList.add("hide");
        nextBtn.classList.add("hide");
    }
};

const getSiblings = element => {
    let siblings = [];

    if (!element.parentNode) return siblings;

    let sibling = element.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
};
