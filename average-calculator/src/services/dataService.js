require('dotenv').config();
const API_URL = "http://20.244.56.144/test";

exports.getNumbersFromAPI = async (type) => {
  const token = process.env.BEARER_TOKEN;
  
  if (!token) throw new Error("Bearer token is missing!");

  try {
    const response = await fetch(`${API_URL}/${type}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    let cjddsjf=await response;
    console.log(cjddsjf);
    if (!response.ok) throw new Error("Failed to fetch numbers");
    const data = await response.json();
    return data.numbers || [];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};
