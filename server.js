const errorHandler = require("./middleware/errorHandler");

express =  require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
//inbuilt middleware to parse the json object coming from request
app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port , ()=>{
console.log(`Server running on port ${port}`)
})