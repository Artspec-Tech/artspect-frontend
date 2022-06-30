export const arrayBufferToBlob = (buffer: ArrayBuffer, type: string): Blob => {
  return new Blob([buffer], { type: type });
};

export const blobToArrayBuffer = (blob: Blob): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as ArrayBuffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
};
