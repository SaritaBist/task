import {Box, Grid, Paper, Text} from "@mantine/core";

const OthersPage=()=>{
 const data=[{
  id:1,
  title:'ARRIVED',
  value:'Towed'
 },
  {
   id:2,
   title: 'COMMERCIAL USE',
   value:'No'
  },
  {
   id:3,
   title:'PHYSICAL DAMAGE',
   value:'No',

  },
  {
   id:4,
   title:'MODIFICATIONS',
   value:'OverSize wheels',

  }

 ]
 return(<>
  <Paper   radius="md" className="w-full  mt-5">
   <Text className="text-lg font-semibold mb-4">Other Details</Text>
   <Grid gutter="xl">
    {
     data.map((item)=>(
         <Grid.Col  span={3} key={item.id}    >
          <Box className="border border-gray-200 py-4 px-8 shadow rounded">
            <Text className="text-gray-500 font-semibold">{item.title}</Text>
            <Text className="">{item.value}</Text>
           </Box>

          </Grid.Col>

     ))
    }
   </Grid>

  </Paper>
</>)
}
export default  OthersPage