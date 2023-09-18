const dbConnect = require('./mongodb');

const updateData =async () => {
    let data = await dbConnect();
    let result =data.updateMany(
        { name: 'max pro 5' }, {
            $set:{name:'max pro 5', price:330}
        }
    )
}

updateData();