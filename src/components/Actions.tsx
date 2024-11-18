"use client";
import { IconFileFilled } from '@tabler/icons-react';
import {Card, Textarea, TextInput, Button, FileInput, Paper, Avatar, Box} from "@mantine/core";
import DropZone from "@/components/DropZone";

const ActionsPage = () => {
    return (
        <div className="flex  gap-3 justify-center  items-center ">
            <Card shadow="sm" radius="md" className="w-full md:w-1/3">

                    <div  className="flex items-center  gap-2">
                        <Avatar src={'woman.png'}/>
                        <h2 className="text-md font-semibold mb-2">SUPPORT CHAT</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Do you have any questions or additional notes about this Claim? Write it here
                    </p>
                    <Textarea
                        placeholder="Type your message..."
                        className="w-full"
                        size="md"
                    />


            </Card>

            {/* Notes Section */}
            <Card shadow="sm" radius="md" className="w-full md:w-1/3">

                <div className="flex items-center  gap-2">
                    <IconFileFilled/>
                    <h2 className="text-md font-semibold mb-2">NOTES</h2>
                </div>
                <Textarea
                    placeholder="You can write any notes here."
                        className="w-full "
                        size="md"
                        variant={'filled'}
                        autosize
                        minRows={5}
                    />

            </Card>

            {/* Files Section */}
            <DropZone/>
        </div>
    );
};

export default ActionsPage;
