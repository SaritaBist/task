"use client";
import {Accordion, Box, Button, Divider, Paper, Table} from "@mantine/core";
import { Text } from '@mantine/core'
import { IconPlus } from "@tabler/icons-react";
import Braker from "@/components/Braker";

const EngineerOverHittingPage = () => {
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

    return (
        <Box className="w-full h-full ">
            <Accordion
                chevronPosition="left"
                chevron={<IconPlus className=" w-15 h-15 border border-gray-300  "  />}
                className=" ml-4    bg-gray-50"
                variant="contained"
            >
                <Accordion.Item value="engine-overheating" className="border-b">
                    <Accordion.Control className="flex  w-full items-center gap-6 p-4 rounded-md  bg-gray-100  ">
                        <span className="font-large text-lg ">Engine Overheating</span>
                        <span className="text-gray-500 font-semibold ml-5">$240.00</span>
                    </Accordion.Control>
                    <Divider/>
                    <Accordion.Panel className="">
                        <Box className="">
                                <Accordion
                                    chevronPosition="left"
                                    chevron={<IconPlus className=" w-15 h-8 border  border-gray-300 " />}
                                    className="mt-4  ml-4  w-full bg-white "
                                    variant="contained"
                                >
                                    <Accordion.Item value="cooling-system-repair" className="border-b">
                                        <Accordion.Control className="flex  w-full bg-gray-100 items-center gap-2 p-4   ">
                                            <span className="font-medium text-lg">Cooling System Repair</span>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Text size="md">Parts</Text>
                                            <Table className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                                <Table.Thead className="">
                                                    <Table.Tr>
                                                        <Table.Th className="px-4 py-2  font-semibold">Element position</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Element name</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Atomic mass</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>
                                                <Table.Tbody>{rows}</Table.Tbody>
                                            </Table>

                                            <Text size="md">Labor</Text>
                                            <Table className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                                <Table.Thead className="">
                                                    <Table.Tr>
                                                        <Table.Th className="px-4 py-2  font-semibold">Element position</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Element name</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                        <Table.Th className="px-4 py-2  font-semibold">Atomic mass</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>
                                                <Table.Tbody>{rows2}</Table.Tbody>
                                            </Table>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>


                            <Accordion
                                chevronPosition="left"
                                chevron={<IconPlus className=" w-15 h-8 border  border-gray-300 " />}
                                className="mt-4  ml-4  w-full bg-white "
                                variant="contained"
                            >
                                <Accordion.Item value="cooling-system-repair" className="border-b">
                                    <Accordion.Control className="flex  w-full bg-gray-100 items-center gap-2 p-4   ">
                                        <span className="font-medium text-lg">Thermostat Replacement</span>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text size="md">Parts</Text>
                                        <Table className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                            <Table.Thead className="">
                                                <Table.Tr>
                                                    <Table.Th className="px-4 py-2  font-semibold">Element position</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Element name</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Atomic mass</Table.Th>
                                                </Table.Tr>
                                            </Table.Thead>
                                            <Table.Tbody>{rows}</Table.Tbody>
                                        </Table>

                                        <Text size="md">Labor</Text>
                                        <Table className="w-full mt-4 border-collapse border rounded-lg overflow-hidden">
                                            <Table.Thead className="">
                                                <Table.Tr>
                                                    <Table.Th className="px-4 py-2  font-semibold">Element position</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Element name</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Symbol</Table.Th>
                                                    <Table.Th className="px-4 py-2  font-semibold">Atomic mass</Table.Th>
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
            <Braker />
        </Box>
    );
};

export default EngineerOverHittingPage;
