const convertByteArrayToBlobUrl = (charCodeArray, mimeType = "image/png") => {
  try {
    const base64String = new TextDecoder().decode(new Uint8Array(charCodeArray));
    const binaryString = atob(base64String); // decode base64 ke binary string
    const byteNumbers = Array.from(binaryString, char => char.charCodeAt(0));
    const uint8Array = new Uint8Array(byteNumbers);

    const validMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    const safeMimeType = validMimeTypes.includes(mimeType) ? mimeType : "image/png";

    const blob = new Blob([uint8Array], { type: safeMimeType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Gagal konversi base64 image:", error);
    return null;
  }
};

export default convertByteArrayToBlobUrl;
