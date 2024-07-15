import express from "express";
import config from "./utils/config";
import middlewares from "./middlewares";
import routes from "./routes";
import rateLimit from "express-rate-limit";
import apicache from "apicache";

const app = express();

const port = config.app.port;
const cache = apicache.middleware("5 minutes");

app.use(middlewares);
app.use(routes);

app.get(
  "/rate-limit",
  rateLimit({ windowMs: 1 * 60 * 1000, max: 5 }),
  (req, res) => {
    res.send("Hello World!");
  }
);

app.get("/no-limit", (req, res) => {
  res.send("Hello World!");
});

app.get("/cached", cache, (req, res) => {
  const hugeData = Array.from({ length: 1000000 }).map(() => Math.random());
  res.send({
    size: `${
      Math.round(
        (Buffer.byteLength(JSON.stringify(hugeData)) / 1024 / 1024) * 1000
      ) / 1000
    } MB`,
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
