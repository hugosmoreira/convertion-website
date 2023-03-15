const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const sizeOf = require('image-size');




const app = express();
const upload = multer({ storage: multer.memoryStorage() });


app.use(express.static("public"));


app.post("/api/pngtojpg", upload.single("image"), async (req, res) => {
  console.log("Received file:", req.file);

  try {
    const inputBuffer = fs.readFileSync("path/to/input.png");
    const outputBuffer = await sharp(inputBuffer)
      .toFormat("jpeg")
      .toBuffer();

    fs.writeFileSync("path/to/output.jpg", outputBuffer);
    console.log("PNG to JPG conversion successful!");
  } catch (error) {
    console.error("Error converting PNG to JPG:", error);
  }
});

app.post('/api/pngtopdf', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: 'No image provided.' });
    }

    if (req.file.mimetype !== 'image/png') {
      return res.status(400).send({ error: 'File is not a PNG image.' });
    }

    const dimensions = sizeOf(req.file.buffer);

    const pdfDoc = new PDFDocument({ size: [dimensions.width, dimensions.height] });
    pdfDoc.image(req.file.buffer, 0, 0, { fit: [dimensions.width, dimensions.height] });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
    pdfDoc.pipe(res);
    pdfDoc.end();
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Image conversion failed.' });
  }
});

app.post('/api/webptopng', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: 'No image provided.' });
    }

    if (req.file.mimetype !== 'image/webp') {
      return res.status(400).send({ error: 'File is not a WebP image.' });
    }

    const pngBuffer = await sharp(req.file.buffer).toFormat('png').toBuffer();

    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.png');
    res.send(pngBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Image conversion failed.' });
  }
});

app.post('/api/bmptopng', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: 'No image provided.' });
    }

    if (req.file.mimetype !== 'image/bmp') {
      return res.status(400).send({ error: 'File is not a BMP image.' });
    }

    const pngBuffer = await sharp(req.file.buffer).toFormat('png').toBuffer();
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.png');
    res.send(pngBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Image conversion failed.' });
  }
});


app.post('/api/jpgtopng', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: 'No image provided.' });
    }

    if (req.file.mimetype !== 'image/jpeg') {
      return res.status(400).send({ error: 'File is not a JPEG image.' });
    }

    const pngBuffer = await sharp(req.file.buffer).toFormat('png').toBuffer();
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.png');
    res.send(pngBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Image conversion failed.' });
  }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/jpgtopng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/jpgtopng.html'));
});

app.get('/pngtojpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pngtojpg.html'));
});

app.get('/webptopng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/webptopng.html'));
});

app.get('/bmptopng', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/bmptopng.html'));
});

app.get('/pngtopdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/pngtopdf.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
