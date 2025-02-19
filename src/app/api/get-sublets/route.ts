import {dbConnect} from "@/db_connection/dbconnection";
import SubletModel from "@/model/Sublet";


export async function GET(request: Request) {

    try {
         const db=await dbConnect();

          const subletData=await SubletModel.find()
        console.log("jsjsjs",subletData)

        return Response.json(
            {
                success: true,
                message: "Data fetched successfully",
                data: subletData,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return Response.json({
                success:false,
                message:"Error fetching sublet data"
            },{
                status:500
            }
        )

    }
}
