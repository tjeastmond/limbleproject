import mariadb from "mariadb";

class MariaDB {
  pool: mariadb.Pool;

  constructor() {
    this.pool = mariadb.createPool({
      host: process.env["DATABASE_HOST"],
      user: process.env["DATABASE_USER"],
      password: process.env["DATABASE_PASSWORD"],
      database: process.env["DATABASE_NAME"],
    });

    // observe the SIGINT signal to close the pool
    process.on("SIGINT", this.end);
    process.on("SIGTERM", this.end);
  }

  async end() {
    console.log("Closing MariaDB pool");
    await this.pool.end();
    console.log("MariaDB pool closed");
  }

  async conn(): Promise<mariadb.Connection> {
    return await this.pool.getConnection();
  }

  async select(query: string): Promise<any> {
    const conn = await this.conn();
    let response;

    try {
      response = await conn.query(query);
    } catch (err) {
      throw err;
    } finally {
      await conn.end();
    }

    return response;
  }
}

export default MariaDB;
