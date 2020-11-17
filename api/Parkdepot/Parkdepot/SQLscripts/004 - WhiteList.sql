CREATE TABLE WhitelistRecord (

	plate_license nvarchar(20) PRIMARY KEY,
	parking_restriction_name nvarchar(20) FOREIGN KEY REFERENCES ParkingRestriction(restr_name),
	plate_owner nvarchar(100) NOT NULL
);