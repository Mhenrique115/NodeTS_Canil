import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use(mainRoutes);

app.use((req, res) => {
    res.status(404).render('Not Found 404');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port https://localhost:${process.env.PORT}/`);
});
