"use client"
import {Box, Button, Drawer, Tabs} from "@mantine/core";
import {useState} from "react";
import Engine from "@/components/Services";
import Totals from "@/components/Totals";
import Other from "@/components/Other";
import Customers from "@/components/Customers";
import Actions from "@/components/Actions";
import Sublets from "@/components/Sublets";
import {useDisclosure} from "@mantine/hooks";
import SubmitDrawer from "@/components/SubmitDrawer";

const TabListPage=()=>{
    const [activeTab, setActiveTab] = useState('action');
    const [opened, setOpened] = useState(false);
    const handleSectionClick = (tab) => {
        setActiveTab(tab);
    };

    return(
        <div className="scrollable-container">

            <div className="sticky  z-10 top-0 flex  items-center justify-between shadow-md bg-white">
                <Tabs

                    value={activeTab}
                    onChange={(value) => setActiveTab(value)}
                    defaultValue="action" className=" p-4 tab:' h-full  '  ">
                    <Tabs.List className="sticky top-0   ">
                        <Tabs.Tab value="action" color="black"  className="text-lg font-normal text-gray-800">Action</Tabs.Tab>
                        <Tabs.Tab value="sublets" color="black" className="text-lg font-normal text-gray-800">Sublets</Tabs.Tab>
                        <Tabs.Tab value="service" color="black" className="text-lg font-normal text-gray-800">Services</Tabs.Tab>
                        <Tabs.Tab value="totals" color="black" className="text-lg font-normal text-gray-800">Totals</Tabs.Tab>
                        <Tabs.Tab value="others" color="black" className="text-lg font-normal text-gray-800">Others</Tabs.Tab>
                    </Tabs.List>

                </Tabs>
                <Button color='black' onClick={()=>setOpened(true)} className="text-lg rounded-md">Submit for payment</Button>
            </div>

            <div className="mt-5" onClick={() => handleSectionClick('action')}>
                <Actions/>
            </div>
            <div className="mt-5" onClick={() => handleSectionClick('sublets')}>
                <Sublets/>

            </div>
            <div className="mt-5" onClick={() => handleSectionClick('service')}>
                <Engine/>

            </div>
            <div onClick={() => handleSectionClick('totals')}>
                <Totals/>

            </div>
            <div onClick={() => handleSectionClick('others')}>
                <Other/>
                <Customers/>

            </div>

            <SubmitDrawer onClose={()=>setOpened(false)} opened={opened}/>
        </div>

    )


}
export default TabListPage