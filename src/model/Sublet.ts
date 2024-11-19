
import mongoose,{Schema} from "mongoose"


export interface SubletInterface
{
    name:string,
    quantity:number,
    costPer:string,
    requested:string,


}
let SubletSchema:Schema<SubletInterface> = new Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:
        {
            type:Number,
            required:true,
        },
    costPer:{
        type:String,
        required:true,


    },
    requested:{
        type:String,
        required:true,
    },



})
const SubletModel =
    (mongoose.models.Sublet as mongoose.Model<SubletInterface>) ||
    mongoose.model<SubletInterface>("Sublet", SubletSchema);

export default SubletModel;