const express=require('express');
const app=express();
const PORT=8000;
const {graphqlHTTP}=require('express-graphql');

const schema=require('./schema')

app.use(express.json())

app.use('./graphql',
    graphqlHTTP(
       { schema,
        graphql:true}
    ))

app.listen(PORT,()=>{
    console.log('listen ${PORT}');
})