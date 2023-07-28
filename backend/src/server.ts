import "express-async-errors"
import express, {Request, Response, NextFunction} from "express"
import { routes } from "./routes/routes";
import { AppError } from "./errors/AppError";
const app = express();
app.use(express.json());
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})
const port = 3001 || process.env.PORT
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})