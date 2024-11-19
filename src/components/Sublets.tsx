
"use client";

import { Paper, Table, Text } from "@mantine/core";
import {useEffect, useState} from "react";
import axios from "axios";

const SubletsPage = () => {

    const [subletData,setSubletData]=useState([])


    useEffect(()=>{
        const   getData = async ()=>{
            try {
                const response = await axios.get('api/get-sublets');
                console.log(response.data)
                setSubletData(response.data.data || [])
            } catch (error) {
                console.error(error);
            }
        }
        getData()

      },[])


    const rows = subletData?.map((element, index) => (
        <Table.Tr key={element.name}>
            <Table.Td className="font-semibold text-md">{element.name}</Table.Td>
            <Table.Td className="font-semibold text-md">
                {element.quantity}
            </Table.Td>
            <Table.Td className="font-semibold text-md">
                {element.costPer}
            </Table.Td>
            <Table.Td className="font-semibold text-md">
                {element.requested}
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Text className="text-lg font-semibold mb-4">Sublets</Text>
            <Paper shadow="sm" p="lg" radius="md" className="w-full  mx-auto">

                <Table className="w-full border border-gray-200 rounded-lg overflow-hidden mt-2">
                    <Table.Thead className="">
                        <Table.Tr>
                            <Table.Th className="px-4 py-2 text-lg text-gray-600 font-semibold">
                                Name of subject
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-lg text-gray-600 font-semibold">
                                QTY
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-lg text-gray-600 font-semibold">
                                Cost Per
                            </Table.Th>
                            <Table.Th className="px-4 py-2 text-lg text-gray-600 font-semibold">
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
