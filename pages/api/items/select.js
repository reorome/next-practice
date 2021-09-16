import { pgp } from '@/db/db';

const { items: sql } = require('@/db/sql/sql'); // sql for users;

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const items = await pgp.any(sql.search, { id: 2 });
      // const items =  await pgp.any("select * from items where id = $1");

      console.log(items);
      res.status(200).json({ text: 'Hello' });
    default:
      return;
  }
}
