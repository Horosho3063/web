document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu');
    const menuG = document.querySelector('.menu_group');
    const menuOverlay = document.querySelector('.menu-overlay');

    // Обработчик для кнопки меню
    menuButton.addEventListener('click', function(event) {
    // Устанавливаем фиксированный цвет фона
    menuG.style.backgroundColor = '#a19985';

    // Переключаем видимость для menu-overlay
    menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';

    event.stopPropagation(); // Предотвращаем всплытие события
});

    // Обработчик для всего документа
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuG.contains(event.target); // Проверяем, был ли клик внутри меню
        if (!isClickInsideMenu) {
            // Если клик был сделан вне меню, закрываем его
            menuOverlay.style.display = 'none';
            menuG.style.backgroundColor = ''; // Возвращаем стандартный цвет фона для меню
        }
    });
});

function validateForm() {
    var nameInput = document.querySelector('.name');
    var phoneInput = document.querySelector('.phone');
    var mailInput = document.querySelector('.mail');
    var messageTextarea = document.querySelector('.text__area textarea');

    var name = nameInput.value.trim();
    var phone = phoneInput.value.trim();
    var mail = mailInput.value.trim();
    var message = messageTextarea.value.trim();

    // Проверка имени на русские и английские буквы
    var namePattern = /^[а-яА-Яa-zA-Z]+$/;
    if (!namePattern.test(name)) {
        alert('Пожалуйста, введите корректное имя.');
        return false;
    }

    // Проверка номера телефона
    var phonePattern = /^[89]\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return false;
    }

    // Проверка адреса электронной почты
    var mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailPattern.test(mail)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return false;
    }

    // Если все проверки пройдены, можно отправить форму
    alert('Форма отправлена успешно!');
    
    // Очищаем поля формы
    nameInput.value = '';
    phoneInput.value = '';
    mailInput.value = '';
    messageTextarea.value = '';


    

    return true;
}
