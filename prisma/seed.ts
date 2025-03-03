import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

// export const initialTickets = [
//     {
//         id: "1",
//         title: "Ticket 1",
//         content: "This is the first ticket",
//         status: "DONE" as const
//     },
//     {
//         id: "2",
//         title: "Ticket 2",
//         content: "This is the second ticket",
//         status: "OPEN" as const
//     }
// ]

// const seed = async () => {
//     const t0 = performance.now();
//     await prisma.ticket.deleteMany();

//     await prisma.ticket.createMany({
//         data: initialTickets
//     })

//     const t1 = performance.now();
//     console.log(`DB Seed: Finished (${t1 - t0}ms)`)
// }

// seed();