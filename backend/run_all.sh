#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE onlineticketing_product_tiketin' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketin') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketin"
done

java -cp onlineticketing.product.tiketin --module-path onlineticketing.product.tiketin -m onlineticketing.product.tiketin &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait