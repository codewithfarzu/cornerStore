import postgres from 'postgres'

const sql = postgres({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    max: 1,
    ssl: 'require',   // ← required for Supabase on Vercel
});

export default sql;