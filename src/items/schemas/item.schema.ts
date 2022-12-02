import * as mongoose from 'mongoose';

export const MyItemSchema = new mongoose.Schema({
	name: String,
	description: String,
	qty: Number
});