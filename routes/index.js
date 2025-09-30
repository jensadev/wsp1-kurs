import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", { title: "Hem", message: "Välkommen till startsidan!" })
})

router.get("/about", (req, res) => {
    res.render("about.njk", { title: "Om" })
})

router.get("/greeting", (req, res) => {
    const name = req.query.name || ""
    res.render("greeting.njk", { name })
})

export default router