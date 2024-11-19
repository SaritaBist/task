"use client";

import {Drawer, Button, Text, FileInput, Checkbox, Box, Group, Badge, Select} from "@mantine/core";
import { useState } from "react";
import {IconFile, IconFileFilled} from "@tabler/icons-react";
import {Dropzone, IMAGE_MIME_TYPE} from "@mantine/dropzone";
import AllSetDrawer from "@/components/AllSetDrawer";

const PaymentDrawer = ({opened,onClose}) => {

    const [files, setFiles] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("Wire Transfer (Ending in 9536)");
    const [allInvoicesProvided, setAllInvoicesProvided] = useState(false);
    const [openAllSetDrawer,setOpenAllSetDrawer]=useState(false);
  const handleSubmit=()=>{
      onClose()
      setOpenAllSetDrawer(true)
  }
    return (
        <div>


            {/* Drawer */}
            <Drawer
                withCloseButton={false}
                opened={opened}
                onClose={onClose}
                offset={10}
                size="lg"
                position="right"

            >
                {/* Drawer Content */}
                <Box className="space-y-6">
                    <Text className="text-2xl font-semibold">Submit for payment</Text>
                    <Text>You need to upload invoice ,and confirm payment method</Text>
                    {/* Invoice Total */}
                    <Box className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                        <div>
                            <Text className="text-lg font-bold ">$300.55</Text>
                        </div>
                        <Text className="text-sm text-gray-500">Invoice total</Text>
                    </Box>

                    {/* Upload Invoice */}
                    <Box>
                        <Text className="font-medium">Upload Invoice</Text>
                        <Dropzone
                            onDrop={(files) => console.log("accepted files", files)}
                            onReject={(files) => console.log("rejected files", files)}
                            maxSize={5 * 1024 ** 2}
                            accept={IMAGE_MIME_TYPE}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-1 bg-white shadow-sm"
                        >
                            <div  className="flex flex-col items-center justify-center">
                                <IconFileFilled className="w-8 h-8 text-gray-500"/>

                                <div className="flex flex-col items-center justify-center">
                                    <Text size="lg" weight={400}>
                                        Drag and drop any files related to this claim
                                    </Text>
                                    <Text component="h6" size="sm" className="text-blue-600 underline cursor-pointer">
                                        click here to upload
                                    </Text>
                                </div>

                            </div>
                        </Dropzone>

                    </Box>

                    {/* Files Section */}
                    <Box>
                        <Text className="font-medium mb-2">Select Invoice from Files</Text>
                        <div className="flex  gap-4">
                            {["Invoice 07-24-1.docx", "Claim details.docx", "Endurance Numbers.pdf"].map(
                                (file, index) => (
                                    <Box
                                        key={index}
                                        className={`p-3 border rounded-md ${
                                            files.includes(file) ? "border-black" : "border-gray-300"
                                        }`}
                                        onClick={() => setFiles((prev) => [...prev, file])}
                                    >
                                        <IconFile/>
                                        <Text size="md">{file}</Text>
                                    </Box>
                                )
                            )}
                        </div >
                    </Box>

                    {/* Payment Method */}
                    <Box>
                        <Group justify="space-between">
                            <Text className="font-medium">Payment method</Text>
                            <Button variant="subtle" size="xs" onClick={() => alert("Edit payment method")}>
                                Edit
                            </Button>
                        </Group>
                        <Box className="p-3   mt-1">
                            <Select
                                data={['Wire Transfer', 'Angular', 'Vue', 'Svelte']}
                                defaultValue="Wire Transfer"
                                allowDeselect={false}
                            />
                        </Box>
                    </Box>

                    {/* Checkbox */}
                    <Checkbox
                        label="All related invoices are provided"
                        checked={true}

                    />

                    {/* Footer Buttons */}
                    <Box className="flex  gap-3 justify-end items-center mt-6">
                        <Button variant="default" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button color="black"  onClick={handleSubmit}>
                            Submit for payment
                        </Button>
                    </Box>
                </Box>
            </Drawer>
            <AllSetDrawer closed={()=>setOpenAllSetDrawer(false)} opened={openAllSetDrawer}/>
        </div>
    );
};

export default PaymentDrawer;
