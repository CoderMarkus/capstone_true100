import multer from "multer";
import initMiddleware from "../../lib/init-middleware";
import Cors from "cors";
import fs from "fs";

// Set up CORS
const cors = Cors({
  methods: ["GET", "POST", "OPTIONS"],
});

// Set up Multer for handling file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: "./uploads", // Set the upload directory path
    filename: function (req, file, cb) {
      // Set the file name to be the original name with the current timestamp
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.originalname + "-" + uniqueSuffix);
    },
  }),
});

// Initialize middleware
const middleware = initMiddleware(
  cors,
  upload.single("file") // Set the name of the file input field
);

// Define the upload handler function
const uploadHandler = async (req, res) => {
  await middleware(req, res);

  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Get the file path from the request object
  const filePath = req.file.path;

  // Read the file from disk
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading file" });
    }

    // Save the file to a new location on your computer
    fs.writeFile("./downloads/" + req.file.filename, data, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving file" });
      }

      // Return a success response
      res.status(200).json({ message: "File uploaded and saved" });
    });
  });
};

export default uploadHandler;
