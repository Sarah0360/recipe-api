import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import recipesRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";


// Connect to Database
await mongoose.connect(process.env.MONGO_URL);

// Create Express App step 1
const app = express();

expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
});

// Apply Middlewares (must come before route; app.use)
app.use(cors());
app.use(express.json());
// app.use(express.static('uploads'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
// aids in creating a url for images for acessability.


//Use routes
app.use(userRouter);
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



