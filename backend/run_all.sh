#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE onlineticketing_product_tukangtiket' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tukangtiket') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/onlineticketing_product_tukangtiket"
done

java -cp onlineticketing.product.tukangtiket --module-path onlineticketing.product.tukangtiket -m onlineticketing.product.tukangtiket &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait