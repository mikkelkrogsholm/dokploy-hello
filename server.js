import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from Dokploy 👋");
});

// Simpel healthcheck (rart til probes/logik)
app.get("/healthz", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});