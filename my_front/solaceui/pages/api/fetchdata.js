// nextjs-frontend/pages/api/fetchData.js
export default async function handler(req, res) {
  const response = await fetch('http://localhost:5000/');
  const data = await response.json();
  res.status(200).json(data);
}
