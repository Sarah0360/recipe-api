import express from "express";
import mongoose from "mongoose";
import recipesRouter from "./routes/recipe.js";

// Connect to Database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App step 1
const app = express();

// Apply Middlewares (must come before route; app.use)
app.use(express.json());


//Use routes
app.use(recipesRouter);

// listening for incoming request step 2
app.listen(3003, () => {
    console.log('App listening on port 3003');
});



// M3W6DMuKlVaYP5ki