CREATE TABLE WhiteList (

	plate_license nvarchar(20) PRIMARY KEY,
	parking_restriction_name nvarchar(20) FOREIGN KEY REFERENCES ParkingRestriction(restr_name)
);