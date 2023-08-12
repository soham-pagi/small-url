const shortenBtn = document.getElementById("shortenBtn");
const originalUrlInput = document.getElementById("originalUrl");
const shortUrlElement = document.getElementById("shortUrl");

shortenBtn.addEventListener("click", async () => {
  const originalUrl = originalUrlInput.value;
  console.log({ originalUrl });
  if (!originalUrl) return;

  const response = await fetch("http://127.0.0.1:4000/api/make/smallUrl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalUrl }),
  });

  console.log({ response });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    shortUrlElement.innerHTML = `Short URL: <a href="${data.smallUrl}" target="_blank">${data.smallUrl}</a>`;
  } else {
    shortUrlElement.innerHTML = "Error shortening URL.";
  }
});
