import Image from "next/image";
import TopicList from "./components/TopicList";

import dotenv from 'dotenv';
dotenv.config();



export default function Home() {
  return (
    <div className="bg-slate-400">
      <TopicList />
      
    </div>
  );
}
