import {dbConnect} from "@/db_connection/dbconnection";


export async function GET(request: Request) {
    const db=await dbConnect();


    try {
        // Connect to the MongoDB database


        // Fetch data from the 'services' collection
        const tasks = await db.collection('task').find({}).toArray();

        // Send the data back as a JSON response
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ message: 'Error fetching data from MongoDB' });
    }
}
