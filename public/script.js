(function bmptopng() {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    if (file.type !== "image/bmp" || file.size > 5 * 1024 * 1024) {
      errorMessage.innerText = "Image must be a BMP format and less than 5 MB.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/bmptopng", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "converted.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while processing your request.";
      errorMessage.style.display = "block";
    }
  });
})();

(function jpgtopng() {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    if (file.type !== "image/jpeg" || file.size > 5 * 1024 * 1024) {
      errorMessage.innerText = "Image must be a JPG format and less than 5 MB.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/jpgtopng", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "converted.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while processing your request.";
      errorMessage.style.display = "block";
    }
  });
})();

(function pngtojpg() {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    if (file.type !== "image/png" || file.size > 5 * 1024 * 1024) {
      errorMessage.innerText = "Image must be a PNG format and less than 5 MB.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/pngtojpg", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "converted.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while processing your request.";
      errorMessage.style.display = "block";
    }
  });
})();

(function pngtopdf() {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    if (file.type !== "image/png" || file.size > 5 * 1024 * 1024) {
      errorMessage.innerText = "Image must be a PNG format and less than 5 MB.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/pngtopdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "converted.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while processing your request.";
      errorMessage.style.display = "block";
    }
  });
})();

(function webptopng() {
  const form = document.getElementById("conversion-form");
  const input = document.getElementById("image-input");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input.files.length) {
      errorMessage.innerText = "Please select an image.";
      errorMessage.style.display = "block";
      return;
    }

    const file = input.files[0];
    if (file.type !== "image/webp" || file.size > 5 * 1024 * 1024) {
      errorMessage.innerText = "Image must be a WEBP format and less than 5 MB.";
      errorMessage.style.display = "block";
      return;
    }

    errorMessage.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/webptopng", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = "converted.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        errorMessage.innerText = "An error occurred while converting the image.";
        errorMessage.style.display = "block";
      }
    } catch (error) {
      errorMessage.innerText = "An error occurred while processing your request.";
      errorMessage.style.display = "block";
    }
  });
})();
