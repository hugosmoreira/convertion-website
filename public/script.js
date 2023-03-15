document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  if (!form || !input || !errorMessage) {
    return;
  }

  input.addEventListener("change", () => {
    const selectedFile = document.getElementById("selected-file");
    if (input.files.length) {
      selectedFile.textContent = `Selected file: ${input.files[0].name}`;
    } else {
      selectedFile.textContent = "";
    }
  });

  const conversionType = form.dataset.conversion;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    let apiUrl = "";
    let outputFileName = "";

    switch (conversionType) {
      case "jpgtopng":
      if (file.type !== "image/jpeg" || file.size > 5 * 1024 * 1024) {
        errorMessage.innerText = "Image must be a JPG format and less than 5 MB.";
        errorMessage.style.display = "block";
        return;
      }
      apiUrl = "/api/jpgtopng";
      outputFileName = "converted.png";
      break;
      case "pngtojpg":
        if (file.type !== "image/png" || file.size > 5 * 1024 * 1024) {
          errorMessage.innerText = "Image must be a PNG format and less than 5 MB.";
          errorMessage.style.display = "block";
          return;
        }
        apiUrl = "/api/pngtojpg";
        outputFileName = "converted.jpg";
        break;

      case "pngtopdf":
        if (file.type !== "image/png" || file.size > 5 * 1024 * 1024) {
          errorMessage.innerText = "Image must be a PNG format and less than 5 MB.";
          errorMessage.style.display = "block";
          return;
        }
        apiUrl = "/api/pngtopdf";
        outputFileName = "converted.pdf";
        break;
      case "webptopng":
        if (file.type !== "image/webp" || file.size > 5 * 1024 * 1024) {
          errorMessage.innerText = "Image must be a WEBP format and less than 5 MB.";
          errorMessage.style.display = "block";
          return;
        }
        apiUrl = "/api/webptopng";
        outputFileName = "converted.png";
        break;
      default:
        errorMessage.innerText = "Invalid conversion type.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = outputFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while connecting to the server.";
      errorMessage.style.display = "block";
    }
  });
});
