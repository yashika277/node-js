import axios from "axios";

export const uploadImage = async (img) => {
  let imgUrl = null;

  await axios
    .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url")
    .then(async ({ data: { uploadURL } }) => {
      /** When the server returns a URL, we construct an object with our image and send it to that URL... But when Create function like axios.put() it not work so call function and pass object... */

      //   let uploadURL = data.uploadURL;

      await axios({
        method: "PUT",
        url: uploadURL,
        headers: { "Content-Type": "multipart/form-data" },
        data: img,
      }).then(() => {
        imgUrl = uploadURL.split("?")[0];
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return imgUrl;
};
