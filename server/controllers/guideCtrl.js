import asyncHandler from 'express-async-handler'
import Guide from './../models/guideModel.js'

// @desc    Get all guides
// @route   GET /api/guides
// @access  Public
const getGuides = asyncHandler(async (req, res) => {
  const guides = await Guide.find({})

  res.json(guides)
})

export { getGuides }
