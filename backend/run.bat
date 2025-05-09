echo SELECT 'CREATE DATABASE onlineticketing_product_tukangtiket' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tukangtiket') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/onlineticketing_product_tukangtiket"

java -cp onlineticketing.product.tukangtiket --module-path onlineticketing.product.tukangtiket -m onlineticketing.product.tukangtiket