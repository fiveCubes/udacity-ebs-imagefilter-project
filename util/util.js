import fs from "fs";
import Jimp from "jimp";
import axios from "axios";


// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
 export async function filterImageFromURL(inputURL) {
  return new Promise(async (resolve, reject) => {
    try {

      // sometimes jimp's internal fetch doesn't handle https/TLS URLs well, so we are using axios to fetch the image and buffer it

      if (!inputURL || typeof inputURL !== "string") {
        reject(new Error("Invalid input URL"));
        return;
      }

      const response = await axios({
        method: "get",
        url: inputURL,
        responseType: "arraybuffer",
      });

      if (response.status !== 200) {
        reject(new Error("Failed to fetch image from URL"));
        return;
      }
      const photo = await Jimp.read(response.data);
      const outpath =
        "/tmp/filtered." + Math.floor(Math.random() * 2000) + ".jpg";
      await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(outpath, (img) => {
          resolve(outpath);
        });
    } catch (error) {
      reject(error);
    }
  });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
 export async function deleteLocalFiles(files) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
