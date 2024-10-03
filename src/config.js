import { parseBuffer } from './parser';
var fs = require('fs')
const mongoose = require('mongoose');

const getEnv = () => {
    // const envFilePath = path.join(__dirname, '.env');
    const bufferEnv = fs.readFileSync("./env");
    const envObject = parseBuffer(bufferEnv);

    Object.keys((envObject || {})).map(key =>  {

        if (!process.env[key] && process.env[key] !== envObject[key]) {
            process.env[key] = envObject[key];
            
        }
        return process.env[key]
    });

    const brevo_api_key = process.env.REACT_BREVO_API_KEY;
    return brevo_api_key
}

const connectMongodb=()=>{
    
}



const getKeys=async()=>{
    await mongoose.connect('mongodb+srv://tomitsuma:Tobirama13@cluster0.rfams.mongodb.net/', {
        dbName: 'CoreOutline',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => err ? console.log(err) : 
        console.log('Connected to yourDB-name database'));
    const KeySchema = new mongoose.Schema({ name: String });
    const Key = mongoose.model('Key', KeySchema);
    const keys = await Key.findOne({});
    console.log(keys)
    return keys
}


export default getKeys
