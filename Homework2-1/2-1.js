document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function() {
        const soundKey = this.getAttribute('data-key');
        playSound(soundKey);
    });
});

function playSound(key) {
    let audioSrc;
    switch (key) {
        case 'w':
            audioSrc = 'w.mp3'; // replace with your sound file path
            break;
        case 'a':
            audioSrc = 'a.wav'; // replace with your sound file path
            break;
        case 's':
            audioSrc = 's.wav'; // replace with your sound file path
            break;
        case 'd':
            audioSrc = 'd.wav'; // replace with your sound file path
            break;
        case 'j':
            audioSrc = 'j.wav'; // replace with your sound file path
            break;
        case 'k':
            audioSrc = 'k.wav'; // replace with your sound file path
            break;
        case 'l':
            audioSrc = 'l.wav'; // replace with your sound file path
            break;
        default:
            return;
    }
    const audio = new Audio(audioSrc);
    audio.play();
}
