#!/bin/bash
source ~/.zshrc  

cleanup() {
    pkill -P $$
    rm java.log
    exit 1
}

trap cleanup SIGINT

java -cp onlineticketing.product.tiketin --module-path onlineticketing.product.tiketin -m onlineticketing.product.tiketin 2>&1 | tee java.log &
JAVA_PID=$!
TEE_PID=$(pgrep -n tee)
tail -f java.log --pid=$TEE_PID | while read -r LINE; do
    if [[ "$LINE" == *"== CREATING OBJECTS AND BINDING ENDPOINTS =="* ]]; then
        break
    fi
done

echo "SELECT 'CREATE DATABASE onlineticketing_product_tiketin' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketin') \gexec" | psql "postgresql://postgres:postgres@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketin"
done

wait