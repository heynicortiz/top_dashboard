const notificationBell = document.getElementById("notifications");

notificationBell.addEventListener("click", () => {
    notificationBell.classList.toggle("fa-bell");
    notificationBell.classList.toggle("fa-bell-on");
});


const profileIcon = document.getElementById("user-icon");

profileIcon.addEventListener("click", () => {
    profileIcon.classList.toggle("fas");
    profileIcon.classList.toggle("fad");
})


// clearButton.addEventListener("click", () => {
//     chgLower("hello");
//     chgUpper("");
//     operandFirst = null;
//     operandSecond = null;
//     operator = null;
//     chgLower("hello");
// });