var app = document.getElementById('about_header');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 60,
    deleteSpeed: 5
});

typewriter.typeString('hello, world')
    .pauseFor(2500)
    .deleteAll()
    .start();