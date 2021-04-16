import mongoose from 'mongoose'

const guideSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    note: {
      type: String,
      required: true
    },
    portrait: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Guide = mongoose.model('Guide', guideSchema)

export default Guide
