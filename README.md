# Online Shopping Mall

A full-featured online shopping mall built with Next.js, Tailwind CSS, TypeScript, Prisma, and PostgreSQL.

## Features

- User authentication and authorization
- Product browsing and searching
- Shopping cart functionality
- Order management
- Product reviews
- Admin dashboard (WIP)

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL 15
- **ORM**: Prisma
- **Authentication**: NextAuth.js (planned)
- **Containerization**: Docker (for PostgreSQL)

## Project Structure

The project follows Feature-Sliced Design (FSD) architecture:

- **entities**: Business entities (User, Product, etc.)
- **features**: User features (authentication, product filtering, etc.)
- **widgets**: Composite UI blocks (product cards, navigation, etc.)
- **pages**: Application pages
- **shared**: Shared code, utilities, UI kit, libs, etc.

## Getting Started

### Prerequisites

- Node.js 16+
- Docker and Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/shop"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Start the PostgreSQL database using Docker:
   ```bash
   docker-compose up -d
   ```

5. Run Prisma migrations and generate Prisma client:
   ```bash
   npm run db:push
   npm run db:generate
   ```

6. Seed the database with sample data:
   ```bash
   npm run db:seed
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Database Management

- Generate Prisma client: `npm run db:generate`
- Push schema changes to the database: `npm run db:push`
- Open Prisma Studio (database GUI): `npm run db:studio`
- Seed the database: `npm run db:seed`

## License

This project is licensed under the MIT License.
