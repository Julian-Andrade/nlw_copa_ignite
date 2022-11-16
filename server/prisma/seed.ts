import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Julian Andrade",
      email: "julian-andrade@hotmail.com",
      avatarUrl: "https://www.github.com/julian-andrade.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Test Pool",
      code: "pool12",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-20T21:05:40.816Z", // -> new Date().toISOstring() para descobrir no console
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-22T21:05:40.816Z", // -> new Date().toISOstring() para descobrir no console
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
