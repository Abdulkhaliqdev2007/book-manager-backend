const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },


    author: {
      type: String,
      required: [true, 'Author is required'],
      trim: true,
    },


    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Programming',
        'Fiction',
        'Science',
        'History',
        'Other'
      ],
    },


    publishedDate: {
      type: Date,
      required: [true, 'Published date is required'],

      validate: {
        validator: function(value) {
          return value <= new Date();
        },

        message: 'Published date cannot be in the future'
      }
    },


    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },

description: {
  type: String,
  trim: true,
  default: '',
},


    coverImage: {
      type: String,
      required: [true, 'Cover image is required'],
    },


    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }

  },

  {
    timestamps: true,
  }

);


module.exports = mongoose.model('Book', bookSchema);