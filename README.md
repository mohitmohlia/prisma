# prisma logs

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate

Update the database schema with migrations

Usage

$ prisma migrate [command] [options]

Commands for development

         dev   Create a migration from changes in Prisma schema, apply it to the database
               trigger generators (e.g. Prisma Client)
       reset   Reset your database and apply all migrations, all data will be lost

Commands for production/staging

      deploy   Apply pending migrations to the database
      status   Check the status of your database migrations
     resolve   Resolve issues with database migrations, i.e. baseline, failed migration, hotfix

Command for any stage

        diff   Compare the database schema from two arbitrary sources

Options

-h, --help Display this help message
--schema Custom path to your Prisma schema

Examples

Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
$ prisma migrate dev

Reset your database and apply all migrations
$ prisma migrate reset

Apply pending migrations to the database in production/staging
$ prisma migrate deploy

Check the status of migrations in the production/staging database
$ prisma migrate status

Specify a schema
$ prisma migrate status --schema=./schema.prisma

Compare the database schema from two databases and render the diff as a SQL script
$ prisma migrate diff \
 --from-url "$DATABASE_URL" \
 --to-url "postgresql://login:password@localhost:5432/db" \
 --script

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

Error:
⚠️ We found changes that cannot be executed:

• Step 0 Added the required column `age` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

✔ Enter a name for the new migration: … age column added
Applying migration `20230219151315_age_column_added`

The following migration(s) have been created and applied from new schema changes:

migrations/
└─ 20230219151315_age_column_added/
└─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client in 35ms

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

Error:
⚠️ We found changes that cannot be executed:

• Step 1 Added the required column `email` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

⚠️ Warnings for the current datasource:

• A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
• A unique constraint covering the columns `[age,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

✔ Are you sure you want create and apply this migration? … yes
✔ Enter a name for the new migration: … post category userPreference Role added
Applying migration `20230219154757_post_category_user_preference_role_added`

The following migration(s) have been created and applied from new schema changes:

migrations/
└─ 20230219154757_post_category_user_preference_role_added/
└─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client in 55ms

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

✔ Enter a name for the new migration: … column name chaneg
Applying migration `20230219155019_column_name_chaneg`

The following migration(s) have been created and applied from new schema changes:

migrations/
└─ 20230219155019_column_name_chaneg/
└─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client in 57ms

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client in 52ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

Error:
⚠️ We found changes that cannot be executed:

• Step 2 Added the required column `userPreferenceId` to the `User` table without a default value. There are 1 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

Error:
⚠️ We found changes that cannot be executed:

• Step 2 Added the required column `userPreferenceId` to the `User` table without a default value. There are 1 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.

mohitmohlia@Mohits-MacBook-Pro prisma % npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "test", schema "public" at "localhost:7488"

⚠️ Warnings for the current datasource:

• You are about to drop the column `userId` on the `UserPreference` table, which still contains 1 non-null values.
• A unique constraint covering the columns `[userPreferenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

✔ Are you sure you want create and apply this migration? … yes
✔ Enter a name for the new migration: … userPreference swap
Applying migration `20230219160437_user_preference_swap`

The following migration(s) have been created and applied from new schema changes:

migrations/
└─ 20230219160437_user_preference_swap/
└─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.10.1 | library) to ./node_modules/@prisma/client in 56ms

mohitmohlia@Mohits-MacBook-Pro prisma %
