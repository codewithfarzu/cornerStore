import postgres from 'postgres'

const sql = postgres({
    host:                  'process.env.DB_aws-1-ap-south-1.pooler.supabase.com',            
    port:                   Number(process.env.DB_5432),     
    database:              'process.env.DB_postgres',           
    username:              'process.env.DB_postgres.ukxureomutojxzuyftvh',            
    password:              'process.env.DB_Asansol@12farzan',
    max:                    1, //limit connections per serverless function
});
export default sql;