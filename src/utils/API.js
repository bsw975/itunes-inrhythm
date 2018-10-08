import axios from "axios";
const BASEURL = "https://itunes.apple.com/search?term=";

export default {
  search: function(query) {
    console.log(BASEURL + query);
    let foo = axios.get(BASEURL + query);
    console.log(foo);
    return foo;
  }
};
