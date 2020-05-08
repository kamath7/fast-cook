const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    recipe_title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    preparation_time:{
        type: Number,
        required:true
    },
    is_vegetarian:{
        type: Boolean,
        required: true
    },
    categories:{
        type: Array,
        required: true
    },
    photo_url:{
        type:String,
        required:true
    },
    ingredients:{
        type: Array,
        required:true
    },
    recipe:{
        type: Array,
        required:true
    },
    dateSubmitted:{
        type:Date
    }
},{
    timestamps: true
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;

/*

Recipe Title: String
Author: String
Preparation Time: Number
Is Vegetarian: Boolean
Categories: Array[String]
Photo: String
Ingredients: Array[]
Recipe: Array[]
*/