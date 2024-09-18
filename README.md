<body>
    <h1>Pong Game</h1>
    <p>Welcome to my version of the classic Pong game! This project is a recreation of the retro arcade game using modern front-end technologies. The primary purpose of this project is to practice and enhance my front-end development skills, particularly in <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>.</p>
    <h2>Game Description</h2>
    <p>Pong is a two-player game where each player controls a paddle to hit the ball and prevent it from going past their side of the screen. The objective is to score points by hitting the ball in such a way that your opponent misses it.</p>
    <h3>Features</h3>
    <ul>
        <li><strong>Responsive Design:</strong> The game area and elements adjust to the window size for optimal playability.</li>
        <li><strong>Smooth Paddle Movement:</strong> The paddles move with increasing or decreasing speed, allowing for precise control.</li>
        <li><strong>Ball Physics:</strong> The ball bounces off the paddles and walls with realistic motion, making the gameplay challenging.</li>
        <li><strong>Scoreboard:</strong> Keep track of each player's score at the top of the screen.</li>
        <li><strong>Start Prompt:</strong> The game begins when any key is pressed, adding to the interactivity.</li>
    </ul>
    <h2>Controls</h2>
    <ul>
        <li><strong>Player 1 (Left Paddle):</strong>
            <ul>
                <li>Move Up: Press <code>W</code></li>
                <li>Move Down: Press <code>S</code></li>
            </ul>
        </li>
        <li><strong>Player 2 (Right Paddle):</strong>
            <ul>
                <li>Move Up: Press <code>Arrow Up</code></li>
                <li>Move Down: Press <code>Arrow Down</code></li>
            </ul>
        </li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>HTML5:</strong> For structuring the game area, paddles, ball, and score display.</li>
        <li><strong>CSS3:</strong> For styling the game, including responsive design, paddle and ball animations, and game background. CSS transforms are used to create the 3D arcade-style appearance.</li>
        <li><strong>JavaScript:</strong> For handling game logic such as paddle movement, ball collisions, scorekeeping, and game flow (start, reset, and pause functionalities).</li>
        <li><strong>Audio Elements:</strong> Integrated sound effects for paddle hits, wall collisions, and scoring events.</li>
    </ul>
    <h2>Purpose</h2>
    <p>The main purpose of this project is to practice my skills in front-end development and explore game development concepts. By implementing the physics of paddle-ball interaction, I improved my understanding of how to manipulate the DOM, handle events, and manage game states dynamically.</p>
    <h2>How It Works</h2>
    <p>
        - The game starts as soon as you press any key.<br>
        - Players control their paddles using the keyboard, trying to keep the ball in play by hitting it back toward their opponent.<br>
        - The ball bounces off the walls and paddles, reversing its direction upon collision.<br>
        - A point is scored when the ball passes beyond a paddle and the game pauses briefly before restarting.
    </p>
    <h2>Future Improvements</h2>
    <ul>
        <li>Adding different difficulty levels (ball speed adjustments).</li>
        <li>Multiplayer mode over a network.</li>
        <li>Improved AI for single-player mode.</li>
    </ul>
    <p>Feel free to try it out by clicking on this link: https://retro-arcade-pong-game.netlify.app/ and let me know if you have any feedback or suggestions for future enhancements at my email: harris.giki@gmail.com</p>
</body>
</html>
