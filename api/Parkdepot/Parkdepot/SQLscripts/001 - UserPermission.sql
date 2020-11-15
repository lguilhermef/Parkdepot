CREATE TABLE UserPermission (

	perm_name nvarchar(5) PRIMARY KEY,
	perm_description nvarchar(100),
	perm_level int NOT NULL
);