const notificationBell = document.getElementById("notifications");

notificationBell.addEventListener("click", () => {
    notificationBell.classList.toggle("fa-bell");
    notificationBell.classList.toggle("fas");
    notificationBell.classList.toggle("fa-bell-on");
    notificationBell.classList.toggle("far");
});


const profileIcon = document.getElementById("user-icon");

profileIcon.addEventListener("click", () => {
    profileIcon.classList.toggle("fas");
    profileIcon.classList.toggle("fad");
})

const clickableIcons = Array.from(document.querySelectorAll("i.no-select"));

clickableIcons.forEach(each => each.addEventListener("click", () => {
    each.classList.toggle("fas");
    each.classList.toggle("far");
    console.log(each.textContent);
}))


// clearButton.addEventListener("click", () => {
//     chgLower("hello");
//     chgUpper("");
//     operandFirst = null;
//     operandSecond = null;
//     operator = null;
//     chgLower("hello");
// });