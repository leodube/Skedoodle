import axios from "axios";

export default {
  get: async () => {
    let res = await axios.get('https://skedoodle.herokuapp.com/api/idea/new');
    return res.data || [];
  },
};
