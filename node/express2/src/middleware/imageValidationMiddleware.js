// Middleware to validate image dimensions after upload
const validateAndProcessImage = async (req, res, next) => {
    // const filePath = req.file.path;
    try {
        // Process the image file with sharp
        const metadata = await sharp(filePath).metadata();

        // Define maximum allowed dimensions
        const maxHeight = 500;
        const maxWidth = 500;

        if (metadata.width > maxWidth || metadata.height > maxHeight) {
            // If dimensions are not valid, delete the file
            fs.unlinkSync(filePath);
            return res
                .status(400)
                .send(
                    `Image dimensions must be less than ${maxWidth}x${maxHeight} pixels. Your image is ${metadata.width}x${metadata.height} pixels.`
                );
        }

        // Optionally, perform additional processing like resizing, compression, etc.
        // await sharp(filePath).resize(maxWidth, maxHeight).toFile(`resized-${file.filename}`);

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // In case of an error, delete the file and send an error response
        fs.unlinkSync(filePath);
        console.error("Error processing image:", error);
        res.status(500).send("Error processing image");
    }
};

export default validateAndProcessImage;
