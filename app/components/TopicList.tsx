import Link from "next/link";
import RemoveBtn from './RemoveBtn';
import {HiPencilAlt } from 'react-icons/hi';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

//function to get topics
const getTopics = async() => {
    try{
      const res =  await fetch('http://localhost:3000/api/topics', {
        cache: 'no-store',
      });

      if(!res.ok){
        throw new Error('Failed to fetch topics');
      }
      return res.json();
    }
    catch (error) {
        console.log('Error loading Topics: ', error);
    }
};

export default async function TopicList() {

    const { topics } = await getTopics();
    return (
        <>
        { topics.map((t: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; _id: any; }) => 
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div className="">
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>{t.description}</div>
                </div>

                <div  className="flex gap-2">
                    <RemoveBtn />
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24} />                    
                    </Link>
                </div>
            </div> 
        )}       
        </>
    );
}