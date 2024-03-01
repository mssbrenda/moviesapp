import axios from "axios";

const API_URL = "https://65aed7e21dfbae409a759d74.mockapi.io/Movies";
const ID_URL = "https://65aed7e21dfbae409a759d74.mockapi.io/Movies/{id}";

const Service = {
  getAllMovies: async () => {
    try {
      console.log("getting movies");
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Failed to fetch resource"
      );
    }
  },

  createMovie: async (movieData) => {
    try {
      const response = await axios.post(API_URL, movieData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to create movie");
    }
  },

  createReview: async (id, reviewData) => {
    try {
      console.log("creating review at:", id);

      const response = await axios.post(`${API_URL}/${id}/reviews:`, reviewData={
        id: id.id,
        content: ''

      });
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        //the request was made but no response
        console.log(error.request);
      } else {
        console.log("error", error.message);
      }
    }
  },

  deleteMovie: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to delete movie");
    }
  },

  updateMovie: async (id, movieData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, movieData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update movie");
    }
  },

  getReviewsByMovieId: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}/reviews`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch reviews");
      console.log(error);
    }
  },

  getMovieById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie details");
    }
  },

  submitRating: async (id, rating) => {
    try {
      const response = await axios.post(`${API_URL}/${id}/ratings`, rating);
      return response.data;
    } catch (error) {
      throw new Error("Failed to submit rating");
    }
  },
};

export default Service;
