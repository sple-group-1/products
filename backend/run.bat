echo SELECT 'CREATE DATABASE onlineticketing_product_tiketaja' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketaja') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketaja"

java -cp onlineticketing.product.tiketaja --module-path onlineticketing.product.tiketaja -m onlineticketing.product.tiketaja