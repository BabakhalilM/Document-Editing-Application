import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  lastModified: { type: Date, default: Date.now },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  versionHistory: [{
    content: String,
    modifiedAt: Date,
    modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }]
});

const Document = mongoose.model('Document', documentSchema);

export default Document;