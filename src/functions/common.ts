import { writeFileSync, unlinkSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

export declare namespace ICommonFn {
  export interface SaveFileOption {
    fileSaveFolderPath: string | undefined;
  }
}

export function getFileInfoFromName(filename: string) {
  const dotSplit = filename.split('.');
  if (dotSplit.length === 1) {
    return {
      onlyName: filename,
      onlyType: '',
    };
  }

  if (dotSplit.length === 2) {
    return {
      onlyName: dotSplit[0],
      onlyType: dotSplit[1],
    };
  }

  const dotSplit2 = dotSplit.filter((item, index) => index !== dotSplit.length - 1);
  return {
    onlyName: dotSplit2.join('.'),
    onlyType: dotSplit[dotSplit.length - 1],
  };
}

export async function saveFile(file: File | null | undefined | FormDataEntryValue, options: ICommonFn.SaveFileOption) {
  if (file === null) return undefined;
  if (file === undefined) return undefined;
  if (!(file instanceof Blob)) return undefined;

  if (typeof options.fileSaveFolderPath !== 'string') {
    throw new Error(`saveFile 에서 options.fileSaveFolderPath 값은 문자열이어야 합니다.`);
  }

  if (!existsSync(options.fileSaveFolderPath)) {
    mkdirSync(options.fileSaveFolderPath, { recursive: true });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const tempSplit = file.name.split('.');
  tempSplit.reverse();
  let fileExtension = '';
  if (tempSplit.length >= 2) {
    fileExtension = tempSplit[0];
  }

  const fileNameAndType = getFileInfoFromName(file.name);
  let tempSaveFileName = `${fileNameAndType.onlyName}_${generateRandomStringIncludeTimestamp(20)}`;
  if (fileNameAndType.onlyType !== '') {
    tempSaveFileName += `.${fileNameAndType.onlyType}`;
  }

  const tempPath = path.join(options.fileSaveFolderPath, tempSaveFileName);
  writeFileSync(tempPath, buffer);

  function remove() {
    unlinkSync(tempPath);
  }

  return {
    filePath: tempPath,
    fileNameAndType,
    file,
    remove,
  };
}

export function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomString(length: number) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateRandomStringIncludeTimestamp(length: number) {
  if (length < 18) {
    throw new Error(`generateRandomString 함수의 length 값은 18 이상 이어야 합니다.`);
  }

  let result = '';
  const timestamp = Date.now().toString(); // 13 length
  const strLength = length - timestamp.length;
  
  const leftStrLength = generateRandomNumber(1, strLength);
  const rightStrLength = strLength - leftStrLength;

  if (leftStrLength > 0) {
    result += generateRandomString(leftStrLength);
  }

  result += timestamp;

  if (rightStrLength > 0) {
    result += generateRandomString(rightStrLength);
  }

  return result;
}