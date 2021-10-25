const mongoose = require("mongoose");

const CartShema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: {
        type: string,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],

  createdAt: { timestamps: true },
});

module.exports = mongoose.model("Cart", CartSchema);
