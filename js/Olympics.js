const olympic = document.querySelectorAll(".olympic");

// Обходим все заголовки и добавляем для каждого слушатель события
olympic.forEach(olympic => {
    const header = olympic.querySelector(".olympic__header");

    // Находим соответствующее описание для текущего заголовка
    const description = olympic.querySelector(".olympic__description");

    // Слушаем событие клика на текущем заголовке
    header.addEventListener("click", () => {
        // Если описание скрыто, показываем его
        if (description.style.maxHeight === "0px" || description.style.maxHeight === "") 
        {
            description.style.maxHeight = description.scrollHeight + "px";
        } 
        else 
        {
            // Иначе скрываем
            
            // Ожидаем некоторое время перед прокруткой, чтобы дать браузеру скрыть элемент description
            setTimeout(() => {
                const x = header.getBoundingClientRect().left + window.scrollX;
                const y = header.getBoundingClientRect().top + window.scrollY;
                window.scrollTo(x, y);
            }, 300); // Задержка в 300 миллисекунд (может потребоваться настройка)
            description.style.maxHeight = "0";
        }
    });
});