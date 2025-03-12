import config from "../utils/config.js";
import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const remoteUpload = multer({
  storage: multerSaveFilesOrg({
    apiAccessToken: config.SAVEFILESORG_API_KEY,
    relativePath: "/library-api/*",
  }),
});
