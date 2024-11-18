
"use client";

import { Paper, Table, Text } from "@mantine/core";
import {useEffect} from "react";
import axios from "axios";

const SubletsPage = () => {
    const data = [
        {
            name: "Rental Car Service (Max 5 Days)",
            quantity: 2,
            costPer: "$30.00",
            requested: "$60.00",
        },
        {
            name: "Tow Service - Towing up to 50 miles",
            quantity: 1,
            costPer: "$150.00",
            requested: "$150.00",
        },
        ]


      useEffect(()=>{
        const res= axios.get('/api/get-sublets')
          console.log("response",res)
      },[])


    const rows = data.map((element, index) => (
        <Table.Tr
            key={element.name}

        >
            <Table.Td className="">{element.name}</Table.Td>

            <Table.Td className="">
                {element.quantity}
            </Table.Td>
            <Table.Td className="">
                {element.costPer}
            </Table.Td>
            <Table.Td className="">
                {element.requested}
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Text className="text-lg font-semibold mb-4">Sublets</Text>
            <Paper shadow="sm" p="lg" radius="md" className="w-full  mx-auto">

                <Table className="w-full border border-gray-200 rounded-lg overflow-hidden mt-2">
                    <Table.Thead className="bg-gray-100">
                        <Table.Tr>
                            <Table.Th className="px-4 py-2 text-left text-gray-600 font-semibold">
                                Name of subject
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-right text-gray-600 font-semibold">
                                Quantity
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-right text-gray-600 font-semibold">
                                Cost Per
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-right text-gray-600 font-semibold">
                                Requested
                            </Table.Th>

                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </Paper>
        </>
    );
};

export default SubletsPage;
