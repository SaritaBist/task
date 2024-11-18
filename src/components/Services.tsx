"use client";
import {Accordion, Box, Button, Divider, Paper, Table, Title} from "@mantine/core";
import { Text } from '@mantine/core'
import { IconPlus,IconMinus } from "@tabler/icons-react";
import Braker from "@/components/Braker";
import {useState} from "react";



const EngineerOverHittingPage = () => {
    const [mainAccordion, setMainAccordion] = useState(null);
    const [nestedAccordion, setNestedAccordion] = useState({});

    const parts = [
        { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
        { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
        { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },

    ];

    const rows = parts.map((element) => (
        <Table.Tr key={element.name} className="bg-white-100">
            <Table.Td className="px-4 py-2 ">{element.position}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.name}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.symbol}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.mass}</Table.Td>
        </Table.Tr>
    ));

    const labor = [
        { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
        { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
        { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },

    ];

    const rows2 = labor.map((element) => (
        <Table.Tr key={element.name} className="bg-white-100">
            <Table.Td className="px-4 py-2 ">{element.position}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.name}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.symbol}</Table.Td>
            <Table.Td className="px-4 py-2 ">{element.mass}</Table.Td>
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
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           position</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           name</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Atomic
                                                           mass</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows}</Table.Tbody>
                                           </Table>

                                           <Text size="md" className="bg-gray-200 p-3">Labor</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           position</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           name</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Atomic
                                                           mass</Table.Th>
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
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           position</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           name</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Atomic
                                                           mass</Table.Th>
                                                   </Table.Tr>
                                               </Table.Thead>
                                               <Table.Tbody>{rows}</Table.Tbody>
                                           </Table>

                                           <Text size="md" className="bg-gray-200 p-3">Labor</Text>
                                           <Table
                                               className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                               <Table.Thead className="">
                                                   <Table.Tr>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           position</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Element
                                                           name</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                       <Table.Th className="px-4 py-2  font-semibold">Atomic
                                                           mass</Table.Th>
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
