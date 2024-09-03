function formatPhoneNumber(input) {
    let cleaned = input.value.replace(/\D/g, '');

    if (cleaned.length === 0) {
        cleaned = '8';
    } else if (cleaned[0] !== '8') {
        cleaned = '8' + cleaned;
    }

    let formatted = cleaned;

    if (cleaned.length > 1) {
        formatted = cleaned.slice(0, 1) + ' (' + cleaned.slice(1, 4);
    }
    if (cleaned.length >= 5) {
        formatted += ') ' + cleaned.slice(4, 7);
    }
    if (cleaned.length >= 8) {
        formatted += '-' + cleaned.slice(7, 9);
    }
    if (cleaned.length >= 10) {
        formatted += '-' + cleaned.slice(9, 11);
    }

    input.value = formatted;
}
const initialOutputContent = document.querySelector(".user-text-2").innerHTML;

document.querySelector("#user-inner-form").addEventListener('submit', function (event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('email').value;
    const email = document.getElementById('text').value;

    const outputParagraph = document.querySelector(".user-text-2");
    outputParagraph.innerHTML = `
        Имя: ${name}<br>
        Телефон: ${phone}<br>
        E-mail: ${email}<br>
    `;
})

document.querySelector("#user-inner-form").addEventListener('reset', function (event) {

    document.querySelector(".user-text-2").innerHTML = initialOutputContent;

    this.reset();
});