import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
{
 title: { type: String, required: true },

 amount: { type: Number, required: true },

 category: {
  type: String,
  enum: ["Food","Transport","Shopping","Bills","Entertainment","Other"]
 },

 description: String,

 date: { type: Date, required: true },

 owner: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  index: true
 }

},
{ timestamps: true }
);

expenseSchema.index({ owner: 1, category: 1 });
expenseSchema.index({ owner: 1, date: -1 });

export default mongoose.model("Expense", expenseSchema);