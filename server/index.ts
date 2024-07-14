import express from "express";
import routesHandler from "./routes";
const app = express();
const PORT = 3000;

// mount routes and middleware
app.use(routesHandler(app));

app.listen(PORT, "0.0.0.0", () => {
  console.info(`App listening on ${PORT}.`);
});
