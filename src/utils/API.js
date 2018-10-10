import axios from "axios";
const BASEURL = "https://itunes.apple.com/search?term=";

export default {
  search: function(query) {
    let foo = axios.get(BASEURL + query);
    return foo;
  }
};
