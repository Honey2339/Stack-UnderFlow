# Stack UnderFlow

## Technologies Used

- **Next.js:** React framework for building web applications.
- **tRPC:** TypeScript-based RPC (Remote Procedure Call) framework.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **PostgreSQL (Prisma ORM):** Database management using the Prisma ORM with PostgreSQL.

## Features

- User authentication with login and signup functionality.
- Creation of questions and answers.
- Planned features include the integration of Stripe for enhanced functionality.

## Contribute

to run Stack Underflow locally follow these steps -

   1. Clone the repository ```git clone https://github.com/Honey2339/Stack-OutFlow-tRPC.git```
   
   2. Install the dependencies ```npm install```
      
   3. Rename the ```.env.example``` to ```.env```
      
   4. Now change the following and replace with your own values:
         Replace ```DATABASE_URL``` value from ```https://supabase.com/``` initialize a DB and copy the DB url and replace the existing env url
      
      5.Run database migrations using ```npx prisma migrate dev```.
   
      6.Run the development server using ```npm run dev```.
