/* eslint-disable import/no-anonymous-default-export */
import formidable from "formidable";
import path from "path";

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, _fields, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to upload file" });
      return;
    }

    const filePath = path.join(process.cwd(), "uploads", files.file.name);

    try {
      await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
      await fs.promises.rename(files.file.path, filePath);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload file" });
    }
  });
};
