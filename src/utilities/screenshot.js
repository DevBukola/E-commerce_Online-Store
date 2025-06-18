import html2canvas from "html2canvas";

export const takeScreenshot = (elementId, fileName, fileType) => {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  html2canvas(element)
    .then((canvas) => {
      let image = canvas.toDataURL(fileType);
      console.log("the image is", image);
      const a = document.createElement("a");
      a.href = image;
      a.download = fileName;
      a.click();
    })
    .catch((error) => {
      console.error(
        "The screenshot of your element can not be taken at the moment."
      );
    });
};
