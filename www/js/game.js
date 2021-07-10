let canvas;
let world;
let keyboard = new Keyboard();


function loadScreen() {
    document.getElementById('gameRules').classList.remove('d-none')
}


function fullScreen() {

    canvas.requestFullscreen();
}

function closeGameMenu() {
    document.getElementById('gameExplanation').classList.add('d-none')
}

function checkforGameOver() {
    setInterval(() => {
        if (world.gameOverScreen) {
            document.getElementById('newStart').classList.remove('d-none')
        }

        if (world.win) {
            setTimeout(() => {
                window.location = 'index.html';
            }, 5000);

        }


    }, 300);
}

function tryAgainGame() {
    window.location = 'index.html';
}

function openGameExplanation() {
    document.getElementById('gameExplanation').classList.remove('d-none')
}
function startGame() {

    document.getElementById('gameRules').classList.add('d-none')
    document.getElementById('startScreen').classList.add('d-none')
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('my Character is', world.character)
    checkforGameOver();

    document.getElementById('touchControl').classList.remove('d-none')






        document.getElementById('touchUp').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.UP = true;


        })

        document.getElementById('touchUp').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.UP = false;


        })

       
        document.getElementById('touchDown').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.DOWN = true;


        })

        document.getElementById('touchDown').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.DOWN = false;


        })
    
        
        document.getElementById('touchRight').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.RIGHT = true;


        })

        document.getElementById('touchRight').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.RIGHT = false;


        })

        document.getElementById('touchLeft').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.LEFT = true;


        })

        document.getElementById('touchLeft').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.LEFT = false;


        })

        document.getElementById('touchSpecialAtack').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.SpecialAtack = true;
           


        })

        document.getElementById('touchSpecialAtack').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.SpecialAtack = false;
          


        })


        document.getElementById('touchBubble').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.D = true;
           

        })

        document.getElementById('touchBubble').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.D = false;
            world.character.throwTime = new Date().getTime();


        })




        document.getElementById('touchAtack').addEventListener('touchstart', function (e) {
            e.preventDefault();
            keyboard.SPACE = true;
     


        })

        document.getElementById('touchAtack').addEventListener('touchend', function (e) {
            e.preventDefault();
            keyboard.SPACE = false;
            world.character.throwTime = new Date().getTime();


        })


}

