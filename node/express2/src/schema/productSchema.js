import { Schema } from "mongoose";

let productSchema = Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  productImage: {
    type: String,
  },
});
// Create a virtual property 'id' that gets the value of '_id'

/* Virtual Properties: In Mongoose, virtual properties are document properties that are not stored in
 MongoDB but are computed or derived values based on the actual data in the document. They are useful
  for formatting, aggregating data, or creating aliases for existing fields. */

productSchema.virtual("id").get(function () {
  return this._id;
});

// Ensure virtual fields are serialized in JSON output and exclude _id
productSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret, options) {
    delete ret._id;
    return ret;
  },
});

export default productSchema;
