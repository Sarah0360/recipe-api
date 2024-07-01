import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipesRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";


// Connect to Database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App step 1
const app = express();

expressOasGenerator.handleResponses(app, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply Middlewares (must come before route; app.use)
app.use(express.json());


//Use routes
app.use(recipesRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// listening for incoming request step 2
const port = process.env.PORT || 3003;
app.listen(3003, () => {
    console.log('App listening on port 3003');
    console.log(`App listening on port ${port}`);
});



