<div align="center">
  <h1 align="center">Carbonable Homepage</h1>
  <p align="center">
    <a href="https://discord.gg/zUy9UvB7cd">
        <img src="https://img.shields.io/badge/Discord-6666FF?style=for-the-badge&logo=discord&logoColor=white">
    </a>
    <a href="https://twitter.com/intent/follow?screen_name=Carbonable_io">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>       
  </p>
  <h3 align="center">Carbonable homepage written in React with Remix</h3>
</div>

## Usage

### Set up the project

#### 📦 Install the requirements

- [Flyctl](https://fly.io/docs/hands-on/install-flyctl/)

```bash
fly auth signup
```

### env

```bash
DATABASE_URL="postgresql://postgres:@localhost:5432/carbonable_home?schema=public"

DAPP_URL=https://testnet.carbonable.io

SESSION_EXPIRATION_IN_SECONDS=""
SESSIONS_SECRETS=""
HASH_SECRET=""
ENABLE_EMAIL_VERIFICATION=true/false

MAILJS_PUBLIC_KEY=""
MAILJS_PRIVATE_KEY=""
MAILJS_SERVICE_ID=""
MAILJS_TEMPLATE_ID=""
```

### 🎉 Install

```bash
npm install
```

### ⛏️ Run for dev

```bash
npm run dev
```

### 💾 Database

#### Dev

##### Installation
Install [Postgres](https://www.postgresql.org/download/)

Start Postgres

Create a database named carbonable_dapp

##### Connection

Connection with pgAdmin: localhost:5432 postgres/[password]

##### Build database
```bash
# Push database schema locally
npx prisma db push

# Seed database
npx ts-node prisma/seed.ts

# Create migration file
npx prisma migrate dev --name [name of the migration]
```

If your database gets messed up, you can always delete the prisma/dev.db file and run npx prisma db push again. 
Remember to also restart your dev server with npm run dev.

#### Distant database

##### Connection

```bash
flyctl proxy 15432:5432 dev-carbonable-db.internal
```

Connection with pgAdmin: localhost:543154322 postgres/[password]
