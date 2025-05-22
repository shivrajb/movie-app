import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "07d7e0d513b69a3a050f6b734870ab72"
    },

});