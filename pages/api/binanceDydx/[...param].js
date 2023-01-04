const pool = require("../../../lib/db")

export default async function handler(req, res) {
  const { param } = req.query

  const connection = await pool.getConnection(async (conn) => conn)

  await connection.query(
    `INSERT INTO binanceDydx(binanceBid1, binanceAsk1, dydxBid1, dydxAsk1) VALUES ('${param[0]}','${param[1]}',${param[2]},'${param[3]}');`
  )

  connection.release()
  return res.status(200).json({
    success: true,
  })
}
