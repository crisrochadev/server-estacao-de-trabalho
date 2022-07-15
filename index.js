import express from "express"
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res) =>{
    res.send("Api Esta rodando...");
});

app.listen(8080);

