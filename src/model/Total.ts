import mongoose, { Schema } from "mongoose";

export interface TotalsInterface {
    label: string;
    amount: string;

}

const TotalsSchema: Schema<TotalsInterface> = new Schema(
    {
        label: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        }

    },

);

const TotalsModel =
    (mongoose.models.Totals as mongoose.Model<TotalsInterface>) ||
    mongoose.model<TotalsInterface>("Totals", TotalsSchema);

export default TotalsModel;
