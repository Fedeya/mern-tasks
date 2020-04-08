const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: Boolean,
    default: false
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'project'
  }
}, {
  timestamps: true
});

module.exports = model('task', TaskSchema);