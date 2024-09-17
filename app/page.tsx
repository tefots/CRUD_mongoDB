import Image from "next/image";
import TopicList from "./components/TopicList";

import dotenv from 'dotenv';
dotenv.config();



export default function Home() {
  return (
    <div className="">
      <TopicList />
      
    </div>
  );
}
