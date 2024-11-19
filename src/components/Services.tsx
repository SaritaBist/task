"use client";
import {Accordion, Box, Button, Divider, Paper, Table, Title} from "@mantine/core";
import { Text } from '@mantine/core'
import { IconPlus,IconMinus } from "@tabler/icons-react";
import Braker from "@/components/Braker";
import {useEffect, useState} from "react";
import axios from "axios";

import { IconCheck } from '@tabler/icons-react';

const EngineerOverHittingPage = () => {
    const [mainAccordion, setMainAccordion] = useState(null);
    const [nestedAccordion, setNestedAccordion] = useState({});
   const [partsData,setPartsData] = useState([])
    const [laborData,setLaborData]=useState(([]))

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get('api/get-services');
                setLaborData(response.data?.data[0]?.labor || [])
                setPartsData(response.data?.data[0]?.parts || [])
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()

    },[])



    const rows = partsData?.map((element) => (
        <Table.Tr key={element.partNumber} className="bg-white-100">
            <Table.Td className="px-4 py-2  font-medium">{element?.partNumber}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element?.partName}</Table.Td>
            <Table.Td className="px-4 py-2 font-medium ">{element?.quantity}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element?.warrantyMonths}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element?.warrantyMiles}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element?.costPer}</Table.Td>
            <Table.Td className="px-4 py-2 font-medium ">{element?.taxPer}</Table.Td>
        </Table.Tr>
    ));



    const rows2 = laborData.map((element,index) => (
        <Table.Tr key={index} className="bg-white-100">
            <Table.Td className="px-4 py-2 font-medium ">{element.description}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element.menu ? <IconCheck stroke={2} /> : 'NO'}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element.hours}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element.rate}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element.taxPercentage}</Table.Td>
            <Table.Td className="px-4 py-2  font-medium">{element.taxPer}</Table.Td>
        </Table.Tr>
    ));

    const handleNestedAccordion = (accordion, value) => {
        setNestedAccordion((prevState) => ({
            ...prevState,
            [accordion]: prevState[accordion] === value ? null : value,
        }));
    };

    return (
       <>
           <Box className="w-full h-full ">
               <span className="text-lg font-semibold  mb-4 ">Services</span>
               <span className="text-gray-500 font-semibold ml-5">$240.00</span>
               <Accordion
                   chevronPosition="left"
                   chevron={mainAccordion === "engine-overheating" ? <IconMinus className="min-w-6 h-8 border border-gray-300 "/> :<IconPlus className="min-w-6 h-8 border border-gray-300 "/>}
                   className="mt-2 bg-gray-50"
                   variant="contained"
                   value={mainAccordion}
                   onChange={setMainAccordion}
               >
                   <Accordion.Item value="engine-overheating" className="border-b ">
                       <Accordion.Control className="flex  w-full items-center gap-6 p-1 rounded-md  bg-gray-50 ">
                           <span className="font-medium text-md">Engine Overheating</span>
                           <span className="text-gray-500 font-semibold ml-4">$240.00</span>
                           {/*<span className="text-gray-400">Complaint, Cause, Correction</span>*/}
                       </Accordion.Control>
                       <Divider/>
                       <Accordion.Panel className="">
                           <Box className="">
                               <Accordion
                                   chevronPosition="left"
                                   chevron={nestedAccordion["cooling-system-repair"] === "cooling-system-repair" ? <IconMinus className="min-w-6 h-8 border border-gray-300 "/> :<IconPlus className="min-w-6 h-8 border border-gray-300 "/>}                                   className="mt-4  ml-2 w-full bg-white "
                                   variant="contained"
                                   value={nestedAccordion["cooling-system-repair"]}
                                   onChange={(value) => handleNestedAccordion("cooling-system-repair", value)}
                               >
                                   <Accordion.Item value="cooling-system-repair" className="border-b bg-white">
                                       <Accordion.Control className="flex  w-full bg-white items-center gap-2 p-2 ">
                                           <span className="font-medium text-md">Cooling System Repair</span>
                                       </Accordion.Control>
                                       <Accordion.Panel>
                                           <Text  size="sm" className="bg-gray-200 p-3">Parts</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-normal">PART NUMBER</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">PART NAME</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">CITY</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">WTY MD</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">WTY MILES</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">COST PER</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX PER</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows}</Table.Tbody>
                                           </Table>

                                           <Text size="md" className="bg-gray-200 p-3">Labor</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-normal">LABOR DESC</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">MENU</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">HOURS</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">RATE</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX(%)</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX PER</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows2}</Table.Tbody>
                                           </Table>
                                       </Accordion.Panel>
                                   </Accordion.Item>
                               </Accordion>


                               <Accordion
                                   chevronPosition="left"
                                   chevron={nestedAccordion["thermostat-replacement"] === "thermostat-replacement" ? <IconMinus className="min-w-6 h-8 border border-gray-300 "/> :<IconPlus className="min-w-6 h-8 border border-gray-300 "/>}
                                   className="mt-4  ml-2  w-full bg-white "
                                   variant="contained"
                                   value={nestedAccordion["thermostat-replacement"]}
                                   onChange={(value) => handleNestedAccordion("thermostat-replacement", value)}
                               >
                                   <Accordion.Item value="thermostat-replacement" className="border-b bg-white">
                                       <Accordion.Control className="flex  w-full  items-center gap-2 p-2   ">
                                           <span className="font-medium text-md">Thermostat Replacement</span>
                                       </Accordion.Control>
                                       <Accordion.Panel>
                                           <Text   size="sm" className="bg-gray-200 p-3">PARTS</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-normal">PART NUMBER</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">PART NAME</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">CITY</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">WTY MD</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">WTY MILES</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">COST PER</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX PER</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows}</Table.Tbody>
                                           </Table>

                                           <Text size="md" className="bg-gray-200 p-3">Labor</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-normal">LABOR DESC</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">MENU</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">HOURS</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">RATE</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX(%)</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-normal">TAX PER</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows2}</Table.Tbody>
                                           </Table>
                                       </Accordion.Panel>
                                   </Accordion.Item>
                               </Accordion>
                           </Box>


                       </Accordion.Panel>
                   </Accordion.Item>
               </Accordion>
               <Braker/>

           </Box>
       </>
    );
};

export default EngineerOverHittingPage;
