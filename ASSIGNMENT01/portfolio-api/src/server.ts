import app from "./app";

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`✅ Portfolio API is running on port ${PORT}`);
  console.log(`📚 Available endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/profile`);
  console.log(`   GET  http://localhost:${PORT}/api/about`);
  console.log(`   GET  http://localhost:${PORT}/api/projects`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
});