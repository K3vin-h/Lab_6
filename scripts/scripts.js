<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Raj's Robot Rentals</title>
        <!-- style sheets -->
        <link rel="stylesheet" href="styles/reset.css">
        <link rel="stylesheet" href="styles/styles.css">
        <!-- web fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet">
    </head>
    <body>
        <!-- javascript -->
        <!-- <script src="scripts/scripts.js"></script> -->
        <header class = "flex">
            <img src="images/robot.jpg" alt="photo of a white plastic robot with
                a black background">
            <h1>Raj's Robot Rentals</h1>
        </header>
        <main>
            <h2>Quote Generator</h2>
            <p>We have 2 models available for booking:</p>
            <ul>
                <li>Model XYZ: $100 per day</li>
                <li>Model CPRG: $213 per day</li>
            </ul>
            <p>The cost to book <span id = "model-text">Model XYZ</span> for <span id = "duration-text">0</span> days is $<span id = "calculated-cost">0.00</span>.</p>
            <div class = "flex">
                <p id = "model-button">Switch Model</p>
                <p id = "duration-button">Change Duration</p>
            </div>
            <p>Thank you for your interest in booking a 'bot!</p>
        </main>
        <footer>
            <p>Photo by <a
                    href="https://unsplash.com/@possessedphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Possessed
                    Photography</a> on <a
                    href="https://unsplash.com/s/photos/robot-face?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </footer>
        <script src="scripts/scripts.js"></script>
    </body>
</html>
