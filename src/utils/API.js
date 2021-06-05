import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://developer.nrel.gov/api/solar/solar_resource/v1.json?limit=1&api_key=J89k3CiSfltbxqmSjIxUXCzbciQLAh1ZQUQhEGhT&lat=40.0771698&lon=-105.1841239");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
