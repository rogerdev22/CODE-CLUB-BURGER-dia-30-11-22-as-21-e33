//const app = require("./app");
import app  from "./app"
import mainRoutes from "./routes"

app.listen(5432)



app.use(mainRoutes)

