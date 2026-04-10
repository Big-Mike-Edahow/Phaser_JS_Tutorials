// main.js

function main() {
    const config = {
        type: Phaser.AUTO,
        width: 640,
        height: 460,
        parent: "game-canvas",
        scene: {
            preload: preload,
            create: create,
        },
        title: "Loading Screen",
        version: "1.0",
    };

    const game = new Phaser.Game(config);
}

main();
