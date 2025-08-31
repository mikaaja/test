import { useState } from "react";

export default function Home() {
  const [nominal, setNominal] = useState("");
  const [pesan, setPesan] = useState("");
  const [qris, setQris] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api-qris", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nominal, pesan }),
    });
    const data = await res.json();
    setQris(data.qrisUrl);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Donasi via QRIS</h1>
      {!qris ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="number"
            placeholder="Nominal"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            required
          />
          <textarea
            placeholder="Pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />
          <button type="submit">Buat QRIS</button>
        </form>
      ) : (
        <div>
          <h3>Scan QRIS</h3>
          <img src={qris} alt="QRIS" width="250" />
          <p>Setelah bayar, tunggu notifikasi dari webhook Saweria.</p>
        </div>
      )}
    </div>
  );
}