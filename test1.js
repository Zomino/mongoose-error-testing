import mongoose from 'mongoose';

const schema = new mongoose.Schema();
const model = mongoose.model('Model', schema);

export default model;
