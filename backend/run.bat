echo SELECT 'CREATE DATABASE onlineticketing_product_tiketkuy' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_tiketkuy') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/onlineticketing_product_tiketkuy"

java -cp onlineticketing.product.tiketkuy --module-path onlineticketing.product.tiketkuy -m onlineticketing.product.tiketkuy