import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, default: 'RRC Editorial', trim: true },
    read: { type: String, default: '3 minute read', trim: true },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' },
    image: { type: String, required: true },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
