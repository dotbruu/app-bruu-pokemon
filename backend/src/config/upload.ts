import path from "path";
import crypto from "crypto";
import multer, { StorageEngine } from "multer";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
interface IUploadConfig {
  driver: "disk";
  tmpFolder: string;
  uploadsFolder: string;
  multer: {
    storage: StorageEngine;
  };
}
export default {
  driver: process.env.STORAGE_DRIVER,
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder),
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const namePath = file.originalname.replace(/\s/g, "").normalize("NFD");
        const fileHash = crypto.randomBytes(10).toString("hex");
        const fileName = `${fileHash}-${namePath}`;
        return callback(null, fileName);
      },
    }),
  },
} as IUploadConfig;
