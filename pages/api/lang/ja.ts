import file from "../../../files/lang/ja.json";
export default function handler(req, res) {
  res.status(200).json(file);
}
