import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, default: 'Video', trim: true },
    url: { type: String, required: true, trim: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);
