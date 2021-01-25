
body = document.body;
let player = document.getElementById('player');
var player_x = 0;
var player_y = 0;
var lastMoveAction_x = 'stop';
var lastMoveAction_y = 'stop';
var intervalMove = null;

document.addEventListener('click', function (e) {
    console.log(`x:${e.screenX}, y:${e.screenY}`);
});

document.addEventListener('keydown', function (e) {
    console.log(`keydown:${e.key}`);
    if (e.key == 'w' || e.key == 'ArrowUp') {
        lastMoveAction_y = 'up';

    } else if (e.key == 's' || e.key == 'ArrowDown') {
        lastMoveAction_y = 'down';

    } else if (e.key == 'd' || e.key == 'ArrowRight') {
        lastMoveAction_x = 'right';

    } else if (e.key == 'a' || e.key == 'ArrowLeft') {
        lastMoveAction_x = 'left';

    }

    if (lastMoveAction_y === 'stop' && lastMoveAction_x === 'stop') {
        stopMoveCharacter();
    } else {
        startMoveCharacter();
    }
});

document.addEventListener('keyup', function (e) {
    // console.log(`keyupa:${e.key}`);
    if (e.key == 'w' || e.key == 'ArrowUp') {
        lastMoveAction_y = 'stop';

    } else if (e.key == 's' || e.key == 'ArrowDown') {
        lastMoveAction_y = 'stop';

    } else if (e.key == 'd' || e.key == 'ArrowRight') {
        lastMoveAction_x = 'stop';

    } else if (e.key == 'a' || e.key == 'ArrowLeft') {
        lastMoveAction_x = 'stop';

    } else {

    }

    if (lastMoveAction_y === 'stop' && lastMoveAction_x === 'stop') {
        stopMoveCharacter();
    }
});



function moveCharacter(x, y) {
    let moveSpeed = 1;

    if (y === 'up') {
        player_y = player_y -= 1;
    } else if (y === 'down') {
        player_y = player_y += 1;
    }

    if (x === 'left') {
        player_x = player_x -= 1;
    } else if (x === 'right') {
        player_x = player_x += 1;
    }

    if (player_x <= 0) {
        player_x = 0
    }
    if (player_y <= 0) {
        player_y = 0
    }

    if (player_x >= 800 - 32) {
        player_x = 800 - 32
    }
    if (player_y >= 600 - 48) {
        player_y = 600 - 48
    }

    player.style.left = player_x + 'px';
    player.style.top = player_y + 'px';
}

function startMoveCharacter() {

    if (intervalMove == null) {
        intervalMove = setInterval(moveCharacterLoop, 1);
    }

}

function stopMoveCharacter() {
    clearInterval(intervalMove);
    intervalMove = null;
}



// setInterval(gameLoop, 1);

function moveCharacterLoop() {
    moveCharacter(lastMoveAction_x, lastMoveAction_y);
}