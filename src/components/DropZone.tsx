import { Group, Text, rem } from "@mantine/core";
import {IconFile, IconFileFilled} from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";

function DropZonePage(props: Partial<DropzoneProps>) {
    return (
        <Dropzone
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className="border-2 border-dashed border-gray-300 rounded-lg p-1 bg-white shadow-sm"
        >
            <Group position="center" className="min-h-[12rem] h-auto">
                {/* Icon at the top */}
                <IconFileFilled className="w-8 h-8 text-gray-500"/>

                {/* Label */}
                <Text size="sm" weight={500} className="mt-2 text-gray-700 uppercase">
                    Files
                </Text>


                <div className="flex flex-col items-center justify-center">
                    <Text size="lg" weight={400}>
                        Drag and drop any files related to this claim
                    </Text>
                    <Text component="h6" size="sm" className="text-blue-600 underline cursor-pointer">
                        click here to upload
                    </Text>
                </div>

            </Group>
        </Dropzone>
    );
}

export default DropZonePage;
