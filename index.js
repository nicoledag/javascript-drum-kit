


window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);

    if(!audio)return //stop function from running all together.
    audio.currentTime = 0; //rewind to the start.
    audio.play();

    key.classList.add('playing');

    function removeTransition(e){
        // console.log(e)
        if(e.propertyName !== 'transform') return //skip if not transform
        // console.log(this);
        this.classList.remove('playing'); //this refers to the key.  can also use key.classList.remove('playing')


    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));




})  