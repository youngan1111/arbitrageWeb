const pool = require("../../../lib/db")

export default async function handler(req, res) {
  const connection = await pool.getConnection(async (conn) => conn)

  const [rows] = await connection.query(
    `SELECT perpBid1, quarterBid1, DATE_FORMAT(createdTime,'%m/%d %H:%i') createdTime FROM binancePerpQuarterPriceDiff ORDER BY createdTIme ASC;`
  )

  connection.release()
  res.status(200).json({ rows })
}
