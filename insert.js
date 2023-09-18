//............lecture-32........
const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result =await db.insertMany(
        [
            { name: 'su1', Brand: 'Micromax', price: 303, category: 'Mobile' },
            { name: 'su2', Brand: 'samsung', price: 305, category: 'Mobile' }

        ]
    );
if(result.acknowledged)
{
    console.log('Inserted data');
}
    
}

insert();