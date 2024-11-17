import Image from "next/image";
import {Button,Text} from "@mantine/core";


import TabList from "@/components/TabList";
import Engineer from "@/components/Engine";

export default function Home() {
  return (
    <div className="grid w-[80%] grid-rows-[20px_1fr_20px]  mx-auto  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <div>
           <TabList/>
       </div>
       <Engineer/>

    </div>
  );
}
