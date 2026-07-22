document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');

    window.addEventListener('scroll', () =>{
        const scrollY = window.scrollY;
        if(scrollY > 200){
            heroTitle.classList.add('is-visible');
        }else{
            heroTitle.classList.remove('is-visible');
        }
        if(scrollY > 1500){
            heroTitle.classList.add('is-header');
        }else{
            heroTitle.classList.remove('is-header');
        }
    });
});
