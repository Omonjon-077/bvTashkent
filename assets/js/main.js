/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 300 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== TELEGRAM BOT ===============*/
let form = document.querySelector("#contact-form");
let contactName = document.querySelector("#contact-name");
let contactPhone = document.querySelector("#contact-phone");
let contactTheme = document.querySelector("#contact-theme");
let contactText = document.querySelector("#contact-text");
let toast = document.querySelector(".toast");

// FOR SEND BOT
let bot = {
    TOKEN: "6595201002:AAEhyP9yPVomWKZNO9xHzjyZOpeoNqGomO4",
    chatID: "-1001996063027",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("contact-name").value;
    let phone = document.getElementById("contact-phone").value;
    let theme = document.getElementById("contact-theme").value;
    let text = document.getElementById("contact-text").value;

    let sendMessage = `Mijoz %0A Ismi: ${name} %0A Telefon raqami: ${phone} %0A Mavzusi: ${theme} %0A Xabari: ${text}`

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendMessage}`, {
        method: "GET"
    })
        .then(success => {
            contactName.value = "";
            contactPhone.value = "";
            contactTheme.value = "";
            contactText.value = "";
            toast.classList.add("show");
            setTimeout(function(){
                toast.classList.remove("show");
            }, 5000);
        }, error => {
            alert("Ваше сообщение не было отправлено");
            contactName.value = "";
            contactPhone.value = "";
            contactTheme.value = "";
            contactText.value = "";
        })
})