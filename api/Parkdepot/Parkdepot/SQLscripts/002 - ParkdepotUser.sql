CREATE TABLE ParkdepotUser (

	email nvarchar (100) PRIMARY KEY,
	pass nvarchar (max) NOT NULL,
	username nvarchar (50) NOT NULL,
	permission nvarchar (5) FOREIGN KEY REFERENCES UserPermission(perm_name)
);