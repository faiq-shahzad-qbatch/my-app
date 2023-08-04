const uploadForm = document.getElementById("uploadForm");
const fileInput = document.getElementById("fileInput");
const responseDiv = document.getElementById("responseDiv");

uploadForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  try {
    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    responseDiv.textContent = response.data;
  } catch (error) {
    responseDiv.textContent = error;
  }
});
