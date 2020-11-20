CREATE TABLE WhitelistRecord (

	id int IDENTITY PRIMARY KEY,
	plate_license nvarchar(20),
	parking_restriction_name nvarchar(20) FOREIGN KEY REFERENCES ParkingRestriction(restr_name),
	plate_owner nvarchar(100) NOT NULL
);