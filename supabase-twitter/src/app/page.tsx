import Feed from "@/components/Feed/Feed";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import { useState } from "react";

type Views = "Home" | "Explore" | "Hoge" | "Moge" | "Huga" | "Piyo";

export default function Home() {
  // const [currentView, setCurrentView] = useState<Views>("Home");
  return (
    <div className="flex justify-between w-screen">
      <Sidebar />
      <Feed />
      <div className="right-space bg-slate-800 h-screen min-w-64"></div>
    </div>
  );
}
