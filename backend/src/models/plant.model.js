import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  pot_color: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

const plantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    images: {
      type: [imageSchema], // Embedding the image schema as an array
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    botanical_name: {
      type: String,
      required: false, // Optional if not present in the object
    },
    description: {
      type: String,
      required: false, // Optional if not present in the object
    },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;
