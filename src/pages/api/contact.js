import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:9887'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const res = await axios.post(`${API_BASE_URL}/customerInquiries`, req.body, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(res.data);
      res.status(res.status).json({ message: 'Form submitted successfully' });
    } catch (err) {
      res.status(404).json({ message: 'Form not submitted successfully' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}