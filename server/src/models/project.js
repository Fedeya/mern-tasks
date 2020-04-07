const { Schema } = require('mongoose');

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('project', ProjectSchema);