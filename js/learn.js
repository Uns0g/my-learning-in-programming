const alterPage = document.querySelector('.change-display');
const body = document.querySelector('body');
const main = document.querySelector('.page-container');

alterPage.addEventListener('click', () =>{
    if(body.style.display === 'block'){
        body.style.display = 'grid';
        main.style.borderLeft = '4px solid var(--darker)';
    }
    else{
        body.style.display = 'block';
        main.style.borderColor = 'var(--light)';
    }
})