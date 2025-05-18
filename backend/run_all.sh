#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE onlineticketing_product_tiketkuy' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketkuy') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketkuy"
done

java -cp onlineticketing.product.tiketkuy --module-path onlineticketing.product.tiketkuy -m onlineticketing.product.tiketkuy &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait