import SideBarLayout from "layouts/SideBarLayout";
import { createContext, useState } from "react";
export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [me, setMe] = useState({
    id: "1",
    name: "naoki",
    profile: "HelloText",
    profileImage:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSrWx5qzzn0tULlnN902A3zDlgXUUspCbaBjzceQxs-n1ubJ9cGWqbn2ft2LrKKjnZuNPYH0hJXqoNr0_YN2nE",
  });
  return (
    <SideBarLayout>
      <AppContext.Provider value={{ me }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </SideBarLayout>
  );
}
