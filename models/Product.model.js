const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: String,
    description: String,
    amount: Number,
    photo: String,
    ownerId:[{
      type: Schema.Types.ObjectId,
      ref: "User"
    }],
    category:String,
    bookDates:[String],
    adquisitionYear: String,
    reviews:[{
      type: Schema.Types.ObjectId,
      ref: "Review"
    }],
    averageRating: Number,
    
});

const Product = model("Product", productSchema);

module.exports = Product;