import express from "express";
import recipesRouter from "./routes/recipes.js";


// Create Express App step 1
const app = express();

//Define routes step 3
app.get('/', (req, res) => {
    res.json('Welcome Home!');
});

app.post('/login', (req, res) => {
    res.json('Login Successful')
});

app.put('/update', (req, res) => {
    res.json('Happy')
});

//Use routes
app.use(recipesRouter);

// listening for incoming request step 2
app.listen(3000, () => {
    console.log('App listening on port 3000');
});