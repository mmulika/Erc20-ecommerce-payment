const mongoose = require('mongoose');

password = encodeURI('123465');
database = encodeURI('payment');
uri = `mongodb+srv://sieuchuot156:${password}@cluster0.vwml1.mongodb.net/${database}?retryWrites=true&w=majority`;
encodedUri = encodeURI(uri);

mongoose.connect(
    encodedUri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
}