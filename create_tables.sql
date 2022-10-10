--Tabela de categorias

CREATE TABLE categories(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE
  );

--Tabela dde produtos
CREATE TABLE products(
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(200) NOT NULL,
  price DECIMAL(8,2) NOT NULL,
  category_id INTEGER,
  FOREIGN KEY(category_id) REFERENCES categories(id));