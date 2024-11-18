import React from "react";
import InfoRow from "./InfoRow";
import {Avatar, Text} from "@mantine/core";

const CustomerCard = () => {
    const customerData = {
        name: "Devon Lane",
        status: "Active",
        details: [
            { title: "Contract", value: "EADV25020916" },
            { title: "Deductible", value: "$100" },
            { title: "Total Claims", value: "1" },
            { title: "Term", value: "60 mo. / 100,000 mi." },
            { title: "Vehicle", value: "2022 DODGE Ram Pickup" },
            { title: "VIN", value: "3D7LT5AG141419811" },
        ],
    };

    return (
        <>
            <Text className="text-lg font-semibold mt-2">Customers</Text>
            <div
                className="flex flex-col md:mt-8 md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-md  ">

                <div className="flex-shrink-0 mb-6 md:mb-0 text-center md:mr-12">
                    <Avatar src="woman.png" alt="it's me"  />
                    <p className="text-md font-semibold mt-2">{customerData.name}</p>
                    <span
                        className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mt-1">
                    {customerData.status}
                </span>
                </div>

                {/* Text Section */}
                <div className="flex-grow w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* First Column */}
                        <div className="flex flex-col space-y-2">
                            {customerData.details.slice(0, 2).map((detail, index) => (
                                <InfoRow key={index} title={detail.title} value={detail.value}/>
                            ))}
                        </div>
                        {/* Second Column */}
                        <div className="flex flex-col space-y-2">
                            {customerData.details.slice(2, 4).map((detail, index) => (
                                <InfoRow key={index} title={detail.title} value={detail.value}/>
                            ))}
                        </div>
                        {/* Third Column */}
                        <div className="flex flex-col space-y-2">
                            {customerData.details.slice(4).map((detail, index) => (
                                <InfoRow key={index} title={detail.title} value={detail.value}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerCard;
