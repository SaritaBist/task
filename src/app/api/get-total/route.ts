import {dbConnect} from "@/db_connection/dbconnection";
import TotalsModel from "@/model/Total";


export async function GET(request: Request) {

    try {
        await dbConnect();

        const data=await TotalsModel.find()
        console.log("jsjsjs",data)

        return Response.json(
            {
                success: true,
                message: "Data fetched successfully",
                data: data,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return Response.json({
                success:false,
                message:"Error fetching total data"
            },{
                status:500
            }
        )

    }
}
