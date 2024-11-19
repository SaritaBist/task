import {dbConnect} from "@/db_connection/dbconnection";
import SubletModel from "@/model/Sublet";
import ServiceModel from "@/model/Services";


export async function GET(request: Request) {

    try {
        const db=await dbConnect();

        const ServiceData=await ServiceModel.find()
        console.log("jsjsjs",ServiceData)

        return Response.json(
            {
                success: true,
                message: "Data fetched successfully",
                data: ServiceData,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return Response.json({
                success:false,
                message:"Error fetching Service data"
            },{
                status:500
            }
        )

    }
}
