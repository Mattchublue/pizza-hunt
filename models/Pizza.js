const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },

  size: {
    type: String,
    default: 'Large'
  },
  toppings: [],
  comments: [
    {
        type: String,
    }
  ]
},
{
    toJSON: {
        vituals: true,
        getters: true
    },
    id: false
    }
);

const Pizza = model('Pizza', PizzaSchema);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

module.exports = Pizza;