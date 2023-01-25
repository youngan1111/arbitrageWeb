const pool = require("../../../lib/db")

export default async function handler(req, res) {
  const connection = await pool.getConnection(async (conn) => conn)

  const result = await Promise.all([
    connection.query("SELECT * FROM dydxPosition ORDER BY createdtime DESC;"),
    connection.query(
      "SELECT * FROM binancePosition ORDER BY createdtime DESC;"
    ),
  ])

  let rows = {}
  rows.dydx = result[0][0]
  rows.binance = result[1][0]

  connection.release()
  res.status(200).json(rows)
}
