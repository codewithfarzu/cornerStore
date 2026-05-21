import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL ||
    'postgresql://postgres.ukxureomutojxzuyftvh:Asansol%4012farzan@aws-1-ap-south-1.pooler.supabase.com:6543/postgres';

const sql = postgres(connectionString, {
    max: 1,
    ssl: 'require',
    prepare: false,
});

export default sql;
