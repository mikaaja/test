export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const payload = req.body;
  console.log("Webhook Saweria:", payload);

  // TODO: simpan ke database / update status real-time

  res.json({ success: true });
}