import {Accordion, Box, Divider, Table, Text} from "@mantine/core";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import {useState} from "react";

const BreakerPage=()=>{
    const [accordianValue,setAccodianValue]=useState()
   return(
       <Box className="w-full  mt-3 mb-10">
           <Accordion
               chevronPosition="left"
               chevron={accordianValue === "braker system issue" ? <IconMinus className="min-w-6 h-8 border border-gray-300 "/> :<IconPlus className="min-w-6 h-8 border border-gray-300 "/>}
               className="bg-gray-50"
               variant="contained"
               value={accordianValue}
               onChange={(value) => setAccodianValue(value)}
           >
               <Accordion.Item value="braker system issue" className="border-b">
                   <Accordion.Control className="flex  w-full items-center gap-6 p-1 rounded-md  bg-gray-50  ">
                       <span className="font-medium text-md ">Brake System Issue</span>
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