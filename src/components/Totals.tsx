"use client";

import { Paper, Table, Text } from "@mantine/core";

const TotalsTable = () => {
    const data = [
        { label: "Parts total", amount: "$2,465.00" },
        { label: "Labor total", amount: "$1,275.00" },
        { label: "Sublet total", amount: "$440.00" },
        { label: "Subtotal", amount: "$4,180.00", bold: true },
        { label: "Taxes", amount: "$296.25" },
        { label: "Deductible for customer", amount: "- $100.00" },
        { label: "Total", amount: "$4,376.25", bold: true },
    ];

    const rows = data.map((element, index) => (
        <Table.Tr
            key={element.label}
            className={`${
                element.bold ? "font-bold" : ""
            } ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
            <Table.Td className="">{element.label}</Table.Td>

            <Table.Td className="">
                {element.amount}
            </Table.Td>
        </Table.Tr>
    ));

    return (
      <>
          <Text className="text-lg font-semibold mb-4">Totals</Text>
          <Paper shadow="sm" p="lg" radius="md" className="w-full  mx-auto">

              <Table className="w-full border border-gray-200 rounded-lg overflow-hidden mt-2">
                  <Table.Thead className="bg-gray-100">
                      <Table.Tr>
                          <Table.Th className="px-4 py-2 text-left text-gray-600 font-semibold">
                              TOTAL
                          </Table.Th>
                          <Table.Th className="px-4 py-2 text-right text-gray-600 font-semibold">
                              REQUESTED
                          </Table.Th>
                      </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
              </Table>
          </Paper>
      </>
    );
};

export default TotalsTable;
