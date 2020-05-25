const router = require("express").Router();
let Recipe = require("../models/recipe.model");

//GET Routes
router.route("/").get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).send(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).send(`Error : ${err}`));
});

//POST Routes

router.route("/add").post((req, res) => {
  const recipe_title = req.body.recipe_title;
  const author = req.body.author;
  const preparation_time = req.body.preparation_time;
  const is_vegetarian = req.body.is_vegetarian;
  const categories = req.body.categories;
  const photo_url = req.body.photo_url;
  const ingredients = req.body.ingredients;
  const recipe = req.body.recipe;
  const dateSubmitted = Date.parse(req.body.dateSubmitted)
    ? Date.parse(req.body.dateSubmitted)
    : Date.parse(new Date());

  const newRecipe = new Recipe({
    recipe_title,
    author,
    preparation_time,
    is_vegetarian,
    categories,
    photo_url,
    ingredients,
    recipe,
    dateSubmitted
  });

  newRecipe
    .save()
    .then(() => res.json(`Recipe added`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//Updating through POST as I'm yet to figure out why I can't use PUT/PATCH

router.route("/update/:id").post((req, res) => {
  Recipe.findByIdAndUpdate(req.params.id).then(recipe => {
    recipe.recipe_title = req.body.recipe_title;
    recipe.author = req.body.author;
    recipe.preparation_time = req.body.preparation_time;
    recipe.is_vegetarian = req.body.is_vegetarian;
    recipe.categories = req.body.categories;
    recipe.photo_url = req.body.photo_url;
    recipe.ingredients = req.body.ingredients;
    recipe.recipe = req.body.recipe;
    recipe.dateSubmitted = Date.parse(req.body.dateSubmitted)
      ? Date.parse(req.body.dateSubmitted)
      : Date.parse(new Date());

    recipe
      .save()
      .then(() => res.json(`Recipe Updated!`))
      .catch(err => res.status(400).json(`Error: ${err}`));
  });
});

//DELETE ROUTE

router.route("/:id").delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => res.json({ message: "Item Deleted", recipe }))
    .catch(err => res.status(400).json(`Error: ${err}`));
});
module.exports = router;
/* 
    recipe_title,
    author,
    preparation_time,
    is_vegetarian,
    categories,
    photo_url,
    ingredients,
    recipe,
    dateSubmitted

*/
