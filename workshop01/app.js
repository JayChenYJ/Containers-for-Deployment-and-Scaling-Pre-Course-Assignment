const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

const quotes = [
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "There are 10 kinds of people. Those who know binary and those who don't.",
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
    "It's not that I'm so smart, it's just that I stay with problems longer.",
    "It is pitch dark. You are likely to be eaten by a grue."
];

app.get('/', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Landing Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 40px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    max-width: 900px;
                    width: 100%;
                }
                img {
                    max-width: 200px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                }
                .quote {
                    font-size: 2em;
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                }
                .repo-link {
                    font-size: 1.2em;
                    text-align: center;
                }
                .repo-link a {
                    text-decoration: none;
                    color: #007BFF;
                }
                .repo-link a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <!-- Display an image -->
                <img src="/images/placeholder.jpg" alt="Placeholder Image">

                <!-- Dynamic Quote -->
                <div class="quote">${randomQuote}</div>

                <!-- Link to repository -->
                <div class="repo-link">
                    <a href="https://github.com/JayChenYJ/Containers-for-Deployment-and-Scaling-Pre-Course-Assignment" target="_blank">View my Repository</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});