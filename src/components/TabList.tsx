"use client"
import {Tabs} from "@mantine/core";

const TabListPage=()=>{
    return(
        <Tabs defaultValue="action" className="mb-0">
            <Tabs.List>
                <Tabs.Tab value="action">Action</Tabs.Tab>
                <Tabs.Tab value="sublets">Sublets</Tabs.Tab>
                <Tabs.Tab value="service">Services</Tabs.Tab>
                <Tabs.Tab value="totals">Totals</Tabs.Tab>
                <Tabs.Tab value="others">Others</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    )


}
export  default TabListPage