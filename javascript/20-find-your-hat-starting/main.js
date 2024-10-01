const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.height = field.length;
        this.width = field[0].length;
        this.locationX = 0;
        this.locationY = 0;
    }

    // Method to print the current state of the field
    print() {
        for (let row of this.field) {
            console.log(row.join(''));
        }
    }

    // Static method to generate a random field
    static generateField(height, width, percentage) {
        const field = [];
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                const prob = Math.random();
                if (prob < percentage) {
                    row.push(hole); // Hole
                } else {
                    row.push(fieldCharacter); // Field character
                }
            }
            field.push(row);
        }

        // Place hat (^) in a random position
        const hatX = Math.floor(Math.random() * width);
        const hatY = Math.floor(Math.random() * height);
        field[hatY][hatX] = hat;

        // Ensure starting position does not have a hole or hat
        if (field[0][0] === hole || field[0][0] === hat) {
            field[0][0] = fieldCharacter;
        }

        return field;
    }

    // Method to move the player
    move(direction) {
        // Copy current player's coordinates
        let newX = this.locationX;
        let newY = this.locationY;

        // Update coordinates based on direction
        switch (direction) {
            case 'u': // Up
                newY -= 1;
                break;
            case 'd': // Down
                newY += 1;
                break;
            case 'l': // Left
                newX -= 1;
                break;
            case 'r': // Right
                newX += 1;
                break;
            default:
                console.log('Invalid move');
                return false;
        }

        // Check if new coordinates are out of bounds
        if (newX < 0 || newY < 0 || newX >= this.width || newY >= this.height) {
            console.log('Game Over! You went out of bounds.');
            return false;
        }

        // Check the tile the player moves to
        const nextTile = this.field[newY][newX];
        if (nextTile === hole) {
            console.log('Game Over! You fell into a hole.');
            return false;
        } else if (nextTile === hat) {
            console.log('Congratulations! You found your hat!');
            return false;
        }

        // Update the field and player's location
        this.field[this.locationY][this.locationX] = fieldCharacter;
        this.locationX = newX;
        this.locationY = newY;
        this.field[this.locationY][this.locationX] = pathCharacter;

        return true;
    }
}

// Function to start the game
function startGame() {
    const height = 5;
    const width = 5;
    const percentageHoles = 0.2;
    const generatedField = Field.generateField(height, width, percentageHoles);
    const myField = new Field(generatedField);

    let playing = true;
    myField.print();

    while (playing) {
        const direction = prompt('Enter your move (u, d, l, r): ');
        playing = myField.move(direction);
        myField.print();
    }
}

// Start the game
startGame();