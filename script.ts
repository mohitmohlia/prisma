import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: "Apoorva",
    },
  });
  console.log(user);

  // await prisma.user.deleteMany();
  // const user = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Mohit",
  //       age: 26,
  //       email: "mohitmohlia.business@gmail.com",
  //     },
  //     {
  //       name: "Apoorva",
  //       age: 26,
  //       email: "apoorva.business@gmail.com",
  //     },
  //   ],
  // });
  // console.log(user);
}

main()
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());
