import pg from "pg";
export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
export async function q<T = any>(text: string, params: any[] = []): Promise<T[]> {
  return (await pool.query(text, params)).rows as T[];
}
