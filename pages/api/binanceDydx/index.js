const pool = require("../../../lib/db")

export default async function handler(req, res) {
  const connection = await pool.getConnection(async (conn) => conn)

  const [rows] = await connection.query(
    // 10분마다
    `select binanceBid1, dydxBid1, DATE_FORMAT(createdTime,'%m/%d %H:%i') createdTime from binanceDydxPrice where DATE_FORMAT(createdTime,'%i') like '%0' order by createdtime asc`

    // 1분마다
    // `SELECT binanceBid1, dydxBid1, DATE_FORMAT(createdTime,'%m/%d %H:%i') createdTime FROM binanceDydxPrice ORDER BY createdTIme ASC;`
  )

  connection.release()
  res.status(200).json({ rows })
}
