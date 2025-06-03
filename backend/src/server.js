import express from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(fileUpload({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});