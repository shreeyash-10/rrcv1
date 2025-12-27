import mongoose from 'mongoose';

const NewsItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    link: { type: String, default: '#', trim: true },
    image: { type: String, required: true },
    excerpt: { type: String, default: '' },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.NewsItem || mongoose.model('NewsItem', NewsItemSchema);
