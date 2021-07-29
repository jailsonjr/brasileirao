import json_data from "../../data/campeonato-brasileiro.json";
import Cors from 'cors';

export  default function handler(req, res) {
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  });
  let data = json_data[req.query.year] || {};
  
  res.status(200).json(data);  
}
