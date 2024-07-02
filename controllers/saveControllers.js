import Save from "../models/save.js";
import dotenv from "dotenv";
import cheerio from "cheerio";

dotenv.config();

export const SaveFiles = async (req, res) => {
    try {
        if (!req.files || !req.files.htmlFile) {
          return res.status(400).send('No files were uploaded.');
        }
    
        const htmlFile = req.files.htmlFile;
        const htmlContent = htmlFile.data.toString('utf8');
    

        const $ = cheerio.load(htmlContent);
    

        const links = [];
        $('a').each((index, element) => {
          links.push({
            type: 'link',
            url: $(element).attr('href'),
          });
        });
    
        const images = [];
        $('img').each((index, element) => {
          images.push({
            type: 'image',
            url: $(element).attr('src'),
          });
        });
    
        const videos = [];
        $('video').each((index, element) => {

          videos.push({
            type: 'video',
            url: $(element).attr('src'),
          });
        });
    

        const allLinks = links.concat(images, videos);
        await Save.bulkCreate(allLinks);
        console.log('Links saved to database:', allLinks);

        res.send('Links saved successfully.');
      } catch (err) {
        console.error('Error saving links to database:', err);
        res.status(500).send('Failed to save links.');
      }
    };
