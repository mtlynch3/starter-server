const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageUrl: "https://i.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA",
		address: "141 E 25th street", 
		description: "This is a school in NYC."
		

	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		imageUrl: "https://i.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA",
		address: "280 E 30th street", 
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "hello@gmail.com",
	  imageUrl: "https://i.picsum.photos/id/690/200/200.jpg?hmac=DN6slU20ktSeMSXbM6U8BG_YHhebxEl3S70qNurkzk8",  
	  gpa: 3.3
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;