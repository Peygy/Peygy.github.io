document.addEventListener('DOMContentLoaded', function() 
{
    let blocks = document.querySelectorAll('.main__wrapper-container');

    blocks.forEach(function(block) 
    {
        const head = block.querySelector('.main__wrapper-container__head');
        const details = block.querySelector('.main__wrapper-container__details');

        head.addEventListener('click', function() 
        {
            blocks.forEach(function(otherBlock) 
            {
                const otherDetails = otherBlock.querySelector('.main__wrapper-container__details');
                if (otherDetails !== details) 
                {
                    otherBlock.style.gridColumn = 'span 1';
                    otherDetails.style.display = 'none';
                    otherDetails.style.opacity = 0;
                    otherBlock.querySelector('.main__wrapper-container__head').style.borderBottomLeftRadius = "20px";
                    otherBlock.querySelector('.main__wrapper-container__head').style.borderBottomRightRadius = "20px";
                }
            });

            if (details.style.display === 'none' || details.style.display === '') 
            {
                if (window.innerWidth > 925) 
                {
                    block.style.gridColumn = 'span 2';
                } 
                else 
                {
                    block.style.gridColumn = 'span 1';
                }

                details.style.display = 'grid';
                details.style.opacity = 1;

                head.style.borderBottomLeftRadius = "0px";
                head.style.borderBottomRightRadius = "0px";
            } 
            else 
            {
                details.style.display = 'none';
                block.style.gridColumn = 'span 1';
                details.style.opacity = 0;
                head.style.borderBottomLeftRadius = "20px";
                head.style.borderBottomRightRadius = "20px";
            }
            
            if (details.style.display === 'grid') 
            {
                const rect = block.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                window.scrollTo(0, rect.top + scrollTop - 60);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() 
{
    const summerSwitch = document.querySelector('.main__switch-summer');
    const winterSwitch = document.querySelector('.main__switch-winter');
    
    winterSwitch.style.transform = 'scale(0.9)';
    winterSwitch.style.opacity = 0.7;
    summerSwitch.style.transform = 'scale(1)';
    summerSwitch.style.opacity = 1;
    
    // Симулируем клик на summerSwitch
    summerSwitch.click();

    const summerSports = document.querySelector('#summer');
    const winterSports = document.querySelector('#winter');
    
    summerSwitch.addEventListener('click', function() 
    {
        summerSports.style.display = "grid";
        winterSports.style.display = "none";
        
        summerSwitch.style.transform = 'scale(1)';
        summerSwitch.style.opacity = 1;
        winterSwitch.style.transform = 'scale(0.9)';
        winterSwitch.style.opacity = 0.7;
    });

    winterSwitch.addEventListener('click', function() 
    {
        winterSports.style.display = "grid";
        summerSports.style.display = "none";

        winterSwitch.style.transform = 'scale(1)';
        winterSwitch.style.opacity = 1;
        summerSwitch.style.transform = 'scale(0.9)';
        summerSwitch.style.opacity = 0.7;
    });
  });