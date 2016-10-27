const express = require("express");
const app     = express();
const port    = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/public`));

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => console.log(`Running on port: ${port}`));
