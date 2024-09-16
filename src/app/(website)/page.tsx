import { db } from '@/lib/db';

export default async function Home() {
  const users = await db.user.findMany();
  return (
    <div className="h-[2000px] pt-20">
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
