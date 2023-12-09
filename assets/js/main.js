/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 300 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== Header Fixed ===============*/
if ($("#myHeader").length) {
    window.onscroll = function () {
        myFunction()
    };

    let header = document.getElementById("myHeader");
    let sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

/*=============== TELEGRAM BOT ===============*/
let form = document.querySelector("#contact-form");
let contactName = document.querySelector("#contact-name");
// let contactText = document.querySelector("#contact-text");

// FOR INPUT MASK
const contactPhone = document.getElementById('contact-phone');
const maskOptions = {
    mask: '+{998}(00)000-00-00'
};
const mask = IMask(contactPhone, maskOptions);

// FOR INPUT MASK

// FOR SEND BOT
let bot = {
    TOKEN: "6595201002:AAEhyP9yPVomWKZNO9xHzjyZOpeoNqGomO4",
    chatID: "-1001996063027",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();


    let name = document.getElementById("contact-name").value;
    let phone = document.getElementById("contact-phone").value;

    let sendMessage = `Mijoz %0A Ismi: ${name} %0A Telefon raqami: ${phone}`

    fetch(`https://api.telegram.org/bot$6595201002:AAEhyP9yPVomWKZNO9xHzjyZOpeoNqGomO4/sendMessage?chat_id=$-1001996063027&text=${sendMessage}`, {
        method: "GET"
    })
        .then(success => {
            contactName.value = "";
            contactPhone.value = "";
            // contactText.value = "";
        }, error => {
            alert("Message not send!");
            contactName.value = "";
            contactPhone.value = "";
        })
})