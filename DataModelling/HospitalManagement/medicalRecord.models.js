import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({},{timestamps : true})

export const Record = mongoose.model("Record", medicalRecordSchema)