import SideBar from "@/components/SideBar";

export default function SideBarLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideBar />
      </div>
      {children}
    </div>
  );
}
