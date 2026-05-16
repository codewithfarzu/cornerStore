import postgres from 'postgres'

const sql = postgres({
    host:                  'aws-1-ap-south-1.pooler.supabase.com',            
    port:                  5432,     
    database:              'postgres',           
    username:              'postgres.ukxureomutojxzuyftvh',            
    password:              'Asansol@12farzan',
});
export default sql;