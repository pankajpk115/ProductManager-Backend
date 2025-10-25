import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

// Add auto-increment to 'id'
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default mongoose.model("Product", productSchema);