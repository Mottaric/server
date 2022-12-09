import mongoose, { Schema } from 'mongoose';
// import MongooseSequence from 'mongoose-sequence';
import { collection as userRef } from '@models/Update';

// Cancelo el Autoincremento
//const AutoIncrement = MongooseSequence(mongoose);

export const collection = 'requests';

const objectSchema = {
	fromOwner: { type: Schema.Types.ObjectId, ref: userRef },
	arrivedBefore24h: { type: Boolean, default: false },
	isFragile: Boolean,
	width: Number,
	height: Number,
	depth: Number,
	weight: Number,
	state: {
		type: String,
		enum: ['guardado', 'cancelado', 'cumplido'],
		default: 'guardado',
	},
	due: Date,
	fromCity: String,
	fromAddress: String,
	toCity: String,
	toAddress: String,
	toOwner: String,
	toOwnerId: String,
};

const options = { timestamps: true };

const schema = new Schema(objectSchema, options);

// **Cancelo el autoincremento **
// schema.plugin(AutoIncrement, {
//	id: 'service_counter',
//	inc_field: 'serviceNumber',
//});

export const Update = mongoose.model(collection, schema);
