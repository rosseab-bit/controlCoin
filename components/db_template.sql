CREATE TABLE IF NOT EXISTS Expenses (
	expenses_id INTEGER PRIMARY KEY,
	Farmacia REAL DEFAULT 0,
	Transporte REAL DEFAULT 0,
	Salida REAL DEFAULT 0,
	Panaderia REAL DEFAULT 0,
	Verduleria REAL DEFAULT 0,
	Supermercado REAL DEFAULT 0,
	Otros REAL DEFAULT 0,
	Efectivo REAL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Data_Chart (
	data_chart_id INTEGER PRIMARY KEY,
	Farmacia REAL DEFAULT 0,
	Transporte REAL DEFAULT 0,
	Salida REAL DEFAULT 0,
	Panaderia REAL DEFAULT 0,
	Verduleria REAL DEFAULT 0,
	Supermercado REAL DEFAULT 0,
	Otros REAL DEFAULT 0,
	Efectivo REAL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Capital (
  capital_id INTEGER PRIMARY KEY DEFAULT 1,
  capital_inicial REAL DEFAULT 0,
  capital_sobrante REAL DEFAULT 0
); 
