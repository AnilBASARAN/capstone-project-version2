import mongoose from "mongoose";

// Define the cart item schema
const cartItemSchema = new mongoose.Schema({
  id: {
    type: Number, // Plant ID
    required: true,
  },
  image_src: {
    type: String,
    required: true,
  },
  plant_name: {
    type: String,
    required: true,
  },
  pot_color: {
    type: String,
    required: true,
  },
  price_per_unit: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Quantity should be at least 1
  },
});

// Define the cart schema, which is an array of cart items
const cartSchema = new mongoose.Schema(
  {
    items: [cartItemSchema], // An array of items (each item follows the cartItemSchema)
  },
  { timestamps: true }
);

// Create a model for the cart
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
