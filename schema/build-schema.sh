#/bin/bash

MYSQL_PWD="${DATABASE_PASSWORD}" mariadb -u "${DATABASE_USER}" -h "${DATABASE_HOST}" "${DATABASE_NAME}" < /code/schema.sql
if [ $? -ne 0 ]; then
  echo "❌ Error building database schema."
  exit 1
fi
echo "✅ Database schema created."

MYSQL_PWD="${DATABASE_PASSWORD}" mariadb -u "${DATABASE_USER}" -h "${DATABASE_HOST}" "${DATABASE_NAME}" < /code/insert.sql
if [ $? -ne 0 ]; then
  echo "❌ Error inserting records."
  exit 1
fi
echo "✅ Records inserted successfully."

echo "🤘 Migration complete."
