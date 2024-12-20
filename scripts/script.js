document.addEventListener("DOMContentLoaded", function() {
    // Зміна кольору тексту
    const textColorInput = document.getElementById("textColor");
    textColorInput.addEventListener("input", function() {
        document.body.style.color = textColorInput.value;
    });

    // Зміна розміру шрифту
    const fontSizeInput = document.getElementById("fontSize");
    fontSizeInput.addEventListener("input", function() {
        document.body.style.fontSize = fontSizeInput.value + "px";
    });

    // Зміна висоти блочного елемента
    const elementHeightInput = document.getElementById("elementHeight");
    elementHeightInput.addEventListener("input", function() {
        const container = document.getElementById("container");
        container.style.height = elementHeightInput.value + "px";
    });

    // Зміна ширини блочного елемента
    const elementWidthInput = document.getElementById("elementWidth");
    elementWidthInput.addEventListener("input", function() {
        const container = document.getElementById("container");
        container.style.width = elementWidthInput.value + "px";
    });

    // Зміна кольору фону
    const backgroundColorInput = document.getElementById("backgroundColor");
    backgroundColorInput.addEventListener("input", function() {
        document.body.style.backgroundColor = backgroundColorInput.value;
    });

    // Зміна фонового зображення
    const backgroundImageInput = document.getElementById("backgroundImage");
    backgroundImageInput.addEventListener("input", function() {
        document.body.style.backgroundImage = `url(${backgroundImageInput.value})`;
        document.body.style.backgroundSize = "cover"; // Для покриття екрану
    });

    // Додавання власного значення для ширини/висоти
    const customValueInput = document.getElementById("customValue");
    customValueInput.addEventListener("input", function() {
        const container = document.getElementById("container");
        container.style.custom = customValueInput.value;
    });
});
