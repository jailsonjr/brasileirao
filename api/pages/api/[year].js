import json_data from "../../data/campeonato-brasileiro.json";

export default function handler(req, res) {
  let data = json_data[req.query.year] || {};
  res.status(200).json(data);  
}
