import axios from "axios";

export default {
  get: async () => {
    let res = await axios.get(
      "https://skedoodle-api-dun.vercel.app/api/idea/new"
    );
    return res.data || [];
  },
};
