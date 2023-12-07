import { PrismaClient } from '@prisma/client'

export default async function Home() {
  const prisma = new PrismaClient()
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })

  return (
    <main>
      { allUsers.map((user) => {
        return <p>{user.name}</p>
      })}
      <p>Hoge</p>
    </main>
  )
}
