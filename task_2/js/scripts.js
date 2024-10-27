function updateContactInfo() {
    var select = document.getElementById('contact-select');
    var contactInfo = select.options[select.selectedIndex].value;

    document.getElementById('contact-info').textContent = contactInfo;
}