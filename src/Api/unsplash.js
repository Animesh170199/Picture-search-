import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID sXZa7sNurbV_9kDiLJhWNsEYCeY_MP0YO7HE7CvY6gw",
  },
});
