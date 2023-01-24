import axios from "axios";

export default class PostService {
    static async getAll() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            { params: { _limit: 10 } }
          );
          return response.data;
    }
}