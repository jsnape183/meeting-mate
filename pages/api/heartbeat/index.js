import clientPromise from "../../../lib/db/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const isConnected = await client
      .db()
      .collection("heartbeat")
      .find({})
      .limit(1)
      .toArray();

    res.status(200).json({ dbStatus: isConnected[0].response });
  } catch (e) {
    console.error(e);
    res.status(200).json({ dbStatus: false });
  }
}
