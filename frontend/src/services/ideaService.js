import axios from "axios";

export default {
  get: async () => {
    let res = await axios.get(`/api/idea/new`);
    return res.data || [];
  },
};
