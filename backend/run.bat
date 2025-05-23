echo SELECT 'CREATE DATABASE onlineticketing_product_bobogo' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'onlineticketing_product_bobogo') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/onlineticketing_product_bobogo"

java -cp onlineticketing.product.bobogo --module-path onlineticketing.product.bobogo -m onlineticketing.product.bobogo