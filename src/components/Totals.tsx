"use client";

import { Paper, Table, Text } from "@mantine/core";
import {useEffect, useState} from "react";
import axios from "axios";

const TotalsTable = () => {

    const [data,setData]=useState([])
    const amount=data.map((e)=>e.amount)
  console.log(amount)

    const sum = amount.reduce((total, amount) => {
        // Remove dollar sign and commas, and convert to number
        const numericValue = parseFloat(amount.replace(/[$,]/g, '').replace(' ', ''));
        console.log(numericValue)
        return total + numericValue;
    }, 0);




    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get('api/get-total');
                console.log(response.data.data)
                setData(response.data.data)

            } catch (error) {
                console.error(error);
            }
        }
        fetchData()

    },[])


    const rows = data.map((element, index) => (
        <Table.Tr
            key={element.label}>
            <Table.Td className="px-4 py-2 font-medium">{element.label}</Table.Td>
            <Table.Td className="px-4 py-2 font-medium">
                {element.amount}
            </Table.Td>

        </Table.Tr>
    ));

    return (
      <>
          <Text className="text-lg font-semibold mb-4">Totals</Text>
          <Paper  p="lg" radius="md" className="w-full  mx-auto border border-gray-200">
              <Table className="w-full  rounded-lg  mt-2" horizontalSpacing="xl">
                  <Table.Thead className="">
                      <Table.Tr >
                          <Table.Th className="px-4 py-2  font-normal">
                              TOTAL
                          </Table.Th>
                          <Table.Th className="px-4 py-2  font-normal">
                              REQUESTED
                          </Table.Th>
                      </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}
                      <Table.Tr className="bg-gray-100">
                          <Table.Td className="px-4 py-2 text-lg  font-bold">Total</Table.Td>
                          <Table.Td className="px-4 py-2  text-lg font-bold">
                              {`$${sum.toFixed(2)}`}
                          </Table.Td>

                      </Table.Tr>
                  </Table.Tbody>
              </Table>
          </Paper>
      </>
    );
};

export default TotalsTable;
