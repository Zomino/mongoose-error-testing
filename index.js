import express from 'express';
import mongoose from 'mongoose';

const schema = new mongoose.Schema();
const model = mongoose.model('Model', schema);

const app = express();

setImmediate(() => {
    // This line triggers an OverwriteModelError
    // import('./test1.js');

    // This line does not trigger an OverwriteModelError
    // import('./test2.js');
});

app.listen(3000, () => {
    console.log('App listening on http://localhost:3000');
});

export default app;
