const Category = require("../../database/models/Category");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function editCategory(req, res) {
  try {
    const { id, category } = trimInputs(req.body);
    // const newCategory = await new Category({ label: category }).save();
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { label: category },
      { new: true, runValidators: true }
    );
    res.send({
      category: updatedCategory.label,
      value: updatedCategory._id,
    });
  } catch (error) {
    console.log(error, "editCategory");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = editCategory;
