import express from "express"
import nunjucks from "nunjucks"

const app = express()

app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", { title: "Hem", message: "Välkommen till startsidan!" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})