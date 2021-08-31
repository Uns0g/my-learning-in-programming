const viewer = document.querySelector('.code-viewer');
const tabs = document.querySelectorAll('.code-viewer__tab');
const scripts = document.querySelectorAll('.code-viewer__content');

viewer.addEventListener('click', function(event){
    const id = event.target.dataset.id;
    if(id){
        // remove active from other buttons and add in the one where dataid is true
        tabs.forEach(function(tab){
            tab.classList.remove('code-viewer__tab--active');
            event.target.classList.add('code-viewer__tab--active');
        })
        scripts.forEach(function(script){
            script.classList.remove('code-viewer__content--active');
        })
        const element = document.getElementById(id);
        element.classList.add('code-viewer__content--active')
    }
})