const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/indexRouter");
const productRouter = require("./routes/productsRouter");
const categoriesRouter = require("./routes/categoriesRouter");

app.use("/", indexRouter);
app.use("/products", productRouter);
app.use("/categories", categoriesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
