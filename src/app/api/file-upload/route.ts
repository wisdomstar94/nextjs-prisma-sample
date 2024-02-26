import 'dotenv/config';
import { saveFile } from "@/functions/common";

export async function POST(request: Request) {
  const formData = await request.formData();
  // console.log('@formData', formData);
  const myFile = formData.get('my-file');
  
  const fileInfo = await saveFile(myFile, {
    fileSaveFolderPath: process.env.FILE_SAVE_FOLDER_PATH,
  });
  
  console.log('@fileInfo', fileInfo);

  if (fileInfo === undefined) {
    return new Response(JSON.stringify({ msg: `파일이 없습니다.` }), {
      status: 400,
    });
  }

  return Response.json({
    timestamp: Date.now(),
  });
}