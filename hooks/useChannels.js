import { useAxios } from "./useAxios";

const { useState, useEffect } = require("react");

export const useChannels = () => {
  const [channel, setChannels] = useState([]);
  const { axios } = useAxios();
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("/channels.json");
      setChannels(data.data);
    };
    fetch();
  }, []);
  return { channel };
};
