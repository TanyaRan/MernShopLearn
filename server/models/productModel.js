import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    mountain: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    daysNumber: {
      type: Number,
      required: true,
      default: 1
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0
    },
    reviews: [
      {
        ownerName: {
          type: String
        },
        rating: {
          type: Number
        },
        comment: {
          type: String
        },
        createdAt: {
          type: Date
        },
        owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      }
    ],
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
