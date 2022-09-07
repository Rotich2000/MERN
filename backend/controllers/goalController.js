// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    // Error handler
    throw new Error("Please add a text field...");
  }
  res.status(200).json({ message: `${req.body.text}` });
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc DELETE goals
// @route DELETE /api/goal/:id
// @access Private
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};