import { useState } from 'react';
import { Drawer, Button, Card, Group, Text, Title } from '@mantine/core';
const AllSetDrawerPage=({opened,closed})=> {


    return (
        <div className="flex justify-center items-center h-screen">


            {/* Drawer */}
            <Drawer
                withCloseButton={false}
                opened={opened}
                onClose={closed}
                offset={10}
                padding="lg"
                size="md"
                position="right"
                className="flex flex-col"
            >
                <Text className="text-2xl font-semibold">You're all set</Text>
                <Text color="dimmed" className="mb-6">
                    Feel free to send us a message with any extra details or files
                </Text>

                {/* Icon */}
                <div className="flex justify-center mb-8">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAZlBMVEX///9isB5XrABgrxlTqgD9/vxPqQD0+fFerhPS5sdbrQfx9+35/PdIpgDt9ejk8N3X6c3f7dfM47/F37h5ukxlsS9vtUCXyHiIwWaNw22x1ZyDvltstDafzIap0JRjsCi62aqkzo0wO881AAAFEklEQVR4nO2ca5eiMAyGbculFFDwigKC//9PLug6IkNTnC287Dnzft5z9pk0TdIkslr96lfTyvV9NMKw/KTcF4fD8Zy6aJS+khuLuRSNlJdv0DRvSs+CC/YUPy6ILj3F6oXW0mWLOdkr46ynOERDPRRUjuizMS9AY7Vyb1x+Q1sIXNq9B124BYS7KxsyG2PqDL8Q6/Ow2ZgQCZotOXy7pM9DvaDZdnL4SBcQ5aIyHj7Shi0H34Yo1x0pUwzMlko92x7Mtq107sZ4AU5cl4F89bRbDmYrNdGtkbPHskUnrbs1MQTrb37uaNmcUwRlW+tDCONnLFt6UFo274bNC2mhZ3NOWLbA0YY35l2haKtAakMI80os287Tszlgu+30aQFuNyJlMX7DstWxFo05cLvp2XgJjSHuhbAb2t+uhN0cbM5yb5S/gfMCZTeeY3N96RFs4PqNspuqsHXvjWCTBbZ/eSHOVHAs21VfvjGhsC04KmcxZ4tl05eW8EYSaTdwIbKj7AYOvjtth4u1zRpo0qLeC0xWaygbUfcy4aRItlQRbEzVSLaNpoH/kAO9qGttJ7oVz6FsBcUm98jLEDIioTYZFZnt/ZxiY94OyBbt9f231uGQGdUtieKyYUNmBrck7SYPyMtAFb6NoOVlTdqNOUiHoxpwrcNlQLaAir1NhCuADhfo5zJ3ecDh8/pAGw7ZhNscaTYFHD67ezJpMRHjHC7K6CDCODClng1sdtZEovR6zvOsrFP/g7cb1Um6H6q08BB0d4eYKykVd2Ivv25H+snFYDfBbXQesu7Ok+TqmG1HHMeWemndHc5CFHHP/dMRynPKwHAkiTCwycKCwwVDpyO4yi8UXqhfdPgrG9tmrq6+ljzOtPunPvkKbMVtzNx8qrHMs2Gf1v5Frz+tstGTTqiOlZC8qge6y6YAZyvfB3QVy6RzvPSNQI20HuInG2yrDWW5Bx6vbm93ozayiaOdnOoSywFf/5cjrq//LTHYupFnq/EbGC/eHa94blhsKkOAs1qZp8aQdcfj/NJaz6+MlhYHi72HxFDNflnveFm5xErSU3afW/4Iv3vgKVMF10gebbK11fY4uibtmv+N9Td0dDRbZKQmGDWEdJvoAzkTjBps2c6p7bO1thvpd6TURDOacOytoMSneuD7/05nKeEPaTMuGuslxIR96fAf6aYd0iTMmNUpw1XTTiwT04OP0uS/oDFXklqpfPKWkrkG10iwGfqEpx/STRhGXvKzH4U74c3SiwvJ+Z/WcDNtrv7kylqtzUltP69QZhyF0IO2IcM583Wmzc2QvuHq2dja+cJHbifn/Z1KQE+0+oabuW1+++BSyGpetlX0gdtZ642MVjg62knActfoAgUyqKFH9y/DWe4/jFM07mBjzIQrIde6noZDrROOOVjY6llkrp4wHndXYLyxXg2DMx6sLIAb+n5B3wle49iagyUHFdC1kUZkixq6C7QylHbwL1Hs9CObuZ5chLTFk2DQveS7Ut1ESc3xyDdJt6QRL+JrQMP78GqP5rpr+JVtZXHEgs4Dd0Kiv0Xx1HrA66Dbv28a+JlZDP/azlP+vl/ZoX913NWudyeEwgfgl3p5YgHfUOoofd9rRW4VDuiteyLmbo8YFHZTLLqQ+6a6UzvJRaTVjjqbtzbWCi1r9wWnFpJWu3qmWOBLWq91vNDrcNcjnAi+kA8nvissuBAS/6G4YUXZoTosKzl05WPf+L/6f/UHVMI9nDYAnv4AAAAASUVORK5CYII=" // Replace with your checkmark icon
                        alt="Success checkmark"
                        className="w-100 h-100"
                    />
                </div>

                {/* Status List */}
                <div className='mt-20'>
                    <div className="text-left  space-y-4">
                        <div className="flex justify-between items-center">
                            <Text className="text-green-500">• Invoice reviewing</Text>
                            <Text>29 July</Text>
                        </div>
                        <div className="flex justify-between items-center">
                            <Text>• Payment release</Text>
                            <Text>29 July</Text>
                        </div>
                        <div className="flex justify-between items-center">
                            <Text>• Money on your account</Text>
                            <Text>30 July</Text>
                        </div>
                    </div>
                </div>


                <Group justify="flex-end" className='mt-10'>
                    <Button variant="default" className="bg-gray-200 text-black">
                        Send message
                    </Button>
                    <Button variant="filled" className="bg-black text-white" onClick={closed}>
                        Back home
                    </Button>
                </Group>
            </Drawer>
        </div>
    );
}

export default AllSetDrawerPage