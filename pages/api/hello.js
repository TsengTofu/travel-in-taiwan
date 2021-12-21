//  TODO  Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 具體說是不知道跟 CTS 的差異在哪裡？
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
