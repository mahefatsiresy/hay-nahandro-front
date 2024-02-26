const REQUEST_URI = 'http://192.168.43.88:8000'
// get recipes from server
export function getRecipes() {
  // TODO: put the url in a .env file in production
  return fetch(`${REQUEST_URI}/recipes/`).then((res) => res.json());
}

// post recipe in the server
export async function postRecipe(recipe) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };

  try {
    await fetch(`${REQUEST_URI}/recipes/`, requestOptions); // then go to Recipe List
  } catch (error) {
    console.error(error);
  }
}

// upload the image to the server
export async function uploadImage(file) {
  const url = `${REQUEST_URI}/upload-file/`;
  const formData = new FormData();
  formData.append("file", file);
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const filePath = await fetch(url, options);
    return "http://192.168.88.17" + filePath;
  } catch (e) {
    console.error(e);
  }
}
