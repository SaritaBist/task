import mongoose, { Schema, Document } from "mongoose";

// Interface for Parts
export interface PartInterface extends Document {
    partNumber: string;
    partName: string;
    quantity: number;
    warrantyMonths: number;
    warrantyMiles: number;
    costPer: number;
    taxPer: number;
}

// Interface for Labor
export interface LaborInterface extends Document {
    description: string;
    menu: boolean;
    hours: number;
    rate: number;
    taxPercentage: number;
    taxPer: number;
}

// Schema for Parts
const PartSchema: Schema<PartInterface> = new Schema({
    partNumber: { type: String, required: true },
    partName: { type: String, required: true },
    quantity: { type: Number, required: true },
    warrantyMonths: { type: Number, required: true },
    warrantyMiles: { type: Number, required: true },
    costPer: { type: Number, required: true },
    taxPer: { type: Number, required: true },
});

// Schema for Labor
const LaborSchema: Schema<LaborInterface> = new Schema({
    description: { type: String, required: true },
    menu: { type: Boolean, required: true },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true },
    taxPercentage: { type: Number, required: true },
    taxPer: { type: Number, required: true },
});

// Combine Parts and Labor into a single model for better management
const ServiceSchema: Schema = new Schema({
    parts: [PartSchema],
    labor: [LaborSchema],
});

// Main Invoice Model
const ServiceModel =
    mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default ServiceModel;
