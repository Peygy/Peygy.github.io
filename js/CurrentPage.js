window.onload = function() 
{
    // Получаем текущий URL страницы
    var currentPageUrl = window.location.href;

    // Получаем все ссылки в меню
    var menuLinks = document.querySelectorAll('.header__wrapper .header__wrapper-burger ul li a');

    menuLinks.forEach(function(link) 
    {
      if (currentPageUrl === link.href || currentPageUrl + "index.html" === link.href || currentPageUrl + "/index.html" === link.href) 
      {
        link.style.color = 'red';
      } 
    });
};