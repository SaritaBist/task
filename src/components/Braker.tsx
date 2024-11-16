import {Accordion, Box, Divider, Table, Text} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";

const BreakerPage=()=>{
   return(
       <Box className="w-full h-full mt-3">
           <Accordion
               chevronPosition="left"
               chevron={<IconPlus className=" w-15 h-15 border border-gray-300  "  />}
               className=" ml-4    bg-gray-50"
               variant="contained"
           >
               <Accordion.Item value="engine-overheating" className="border-b">
                   <Accordion.Control className="flex  w-full items-center gap-6 p-4 rounded-md  bg-gray-100  ">
                       <span className="font-large text-lg ">Brake System Issue</span>
                       <span className="text-gray-500 font-semibold ml-5">$240.00</span>
                   </Accordion.Control>

                   <Accordion.Panel className="">
                      <p>Hello
                      </p>
                   </Accordion.Panel>
               </Accordion.Item>
           </Accordion>
       </Box>
   )
}

export default  BreakerPage