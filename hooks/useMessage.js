import { useState } from "react";
import useInterval from "./uesInterval";
import { useAxios } from "./useAxios";

export const useMessage = (channelId) => {
  const { axios } = useAxios();
  const [message, setMessage] = useState([]);
  const fetchMessages = async () => {
    const response = await axios.get("message.json");
    const data = Object.values(response.data).filter((v) => v);
    const messagesForChannel = data.filter((ms) => {
      return ms.channelId == channelId;
    });
    setMessage(messagesForChannel);
  };
  useInterval(() => {
    fetchMessages("1");
  }, 1000);
  const postMessage = async (m) => {
    m.channelId = channelId;
    try {
      const response = await axios.post("message.json", JSON.stringify({ ...m }));
      setMessage((prev) => {
        prev.push(m);
        return prev;
      });
    } catch (e) {
      console.log(e);
    }
  };
  return { message, postMessage, fetchMessages };
};
