// import formidable from 'formidable';
// import fs from 'fs/promises';
// import fetch from 'node-fetch';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const handler = async (req: any, res: any) => {
//   if (req.method !== 'POST') {
//     return res.status(405).send('Method not allowed');
//   }

//   const form = new formidable.IncomingForm();
//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error parsing the file' });
//     }

//     const file = files.file;
//     const filePath = file.filepath || file.path || file.filePath;

//     try {
//       const fileBuffer = await fs.readFile(filePath);

//       const apiURL = '';
//       const apiKey = '';

//       const apiResponse = await fetch(apiURL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: fileBuffer,
//       });

//       const result = await apiResponse.json();

//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json({ error: 'Error processing the image' });
//     }
//   });
// };

// export default handler;
