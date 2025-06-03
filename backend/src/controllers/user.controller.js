export const uploadImage = async (req, res) => {
  try {
    const { image } = req.files;
    if (!image || !image.mimetype.startsWith('image/')) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }
    
    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
}