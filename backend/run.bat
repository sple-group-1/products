echo SELECT 'CREATE DATABASE onlineticketing_product_tiketin' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketin') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketin"

java -cp onlineticketing.product.tiketin --module-path onlineticketing.product.tiketin -m onlineticketing.product.tiketin