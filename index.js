// zoopark applicationu ucun crud yazin. 

// /animals          get
// /animals/id     getById
// /animals/id     put
// /animals/id     delete
// /animals          post

import {createServer} from 'http'
import mongoose from 'mongoose'
import animalModel from './model.js'


const connectionString =`mongodb+srv://nicat:LZb3HoSu7RYNVnL8@cluster0.r2ciceu.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionString)

createServer((req,res)=>{
    res.setHeader('Content-TYPE','application/json')
    const baseUrl = req.url.split("/") 
    const collection = baseUrl[1] 
    const _id = baseUrl[2] 
    if (collection === 'animals') { 
        switch (req.method) { 
            case 'GET': 
                if (_id) { 
                    (async () => { 
                        const data = await animalModel.findOne({ _id }) 
                        res.end(JSON.stringify(data)) 
                    })() 
                } else { 
                    (async () => { 
                        const data = await animalModel.find() 
                        res.end(JSON.stringify(data)) 
                    })() 
                } 
                break; 
 
            case 'POST': 
                req.on('data', (chunk) => { 
                    (async () => { 
                        const data =await animalModel.create(JSON.parse(chunk.toString())) 
                        console.log(data)  
                    })() 
                }) 
        } 
    } else { 
        res.end('Dogru collection qeyd etmediniz ☠️') 
    }
}).listen(3000)