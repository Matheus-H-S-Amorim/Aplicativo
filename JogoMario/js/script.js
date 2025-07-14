window.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    
    console.log("✅ JavaScript carregado com sucesso!");

    const jump = ()  => {
        mario.classList.add('jump');
        setTimeout(() =>{
                mario.classList.remove('jump');
            }, 500);

    }
    document.addEventListener('keydown', jump );





    const loop = setInterval(() => {
        const pipe = document.querySelector('.pipe');
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log(marioPosition);


        if (pipePosition <= 65 && marioPosition < 80) {  
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            }
        },10);






});