#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE onlineticketing_product_tiketaja' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketaja') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketaja"
done

java -cp onlineticketing.product.tiketaja --module-path onlineticketing.product.tiketaja -m onlineticketing.product.tiketaja &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait