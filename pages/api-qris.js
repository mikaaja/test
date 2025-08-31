export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { nominal, pesan } = req.body;

  // Dummy QRIS (gunakan generator QR gratis)
  const qrisUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Donasi%20${nominal}%20-%20${encodeURIComponent(pesan)}`;

  res.status(200).json({ qrisUrl });
}