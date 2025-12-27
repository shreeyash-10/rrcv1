import mongoose from 'mongoose';

const GalleryItemSchema = new mongoose.Schema(
  {
    title: { type: String, default: 'Gallery item', trim: true },
    alt: { type: String, default: 'Gallery item', trim: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryItem || mongoose.model('GalleryItem', GalleryItemSchema);
