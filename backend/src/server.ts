import express from "express"
import { router } from "./routes/route";
const app = express();
app.use(express.json());
app.use(router)
const port = 3001 || process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})