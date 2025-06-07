export const uploadImage = async (req, res) => {
  try {
    const { image } = req.files;
    if (!image || !image.mimetype.startsWith('image/')) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }

    // Send the image back as a base64 string
    const base64 = image.data.toString('base64');
    const dataUrl = `data:${image.mimetype};base64,${base64}`;

    res.status(200).json({ 
      message: 'Image uploaded successfully',
      image: dataUrl
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
}