const vehicles = [
  {
    id: 1,
    name: "Toyota Camry",
    model: 2018,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "15.1",
    fuelType: "Gasoline",
    engine: "2.5L I4",
    mileage: 50000,
    transmission: "Automatic",
    driveType: "FWD",
    petrol_consumptionmy: 29,
    rentalPrice: 45,
    contact: "+9610000000",
  },
  {
    id: 2,
    name: "Honda Accord",
    model: 2009,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "14.8",
    fuelType: "Gasoline",
    engine: "2.4L I4",
    mileage: 45000,
    transmission: "Automatic",
    driveType: "FWD",
    petrol_consumptionmy: 24,
    rentalPrice: 30,
    contact: "+9610000001",
  },
  {
    id: 3,
    name: "Ford Mustang",
    model: 2015,
    bodyType: "Coupe",
    persons: 4,
    doors: 2,
    luggageCapacity: "13.8",
    fuelType: "Gasoline",
    engine: "2.3L Ecoboost I4",
    mileage: 40000,
    transmission: "Manual",
    driveType: "RWD",
    petrol_consumptionmy: 23,
    rentalPrice: 60,
    contact: "+9610000002",
  },
  {
    id: 4,
    name: "Chevrolet Silverado",
    model: 2022,
    bodyType: "Truck",
    persons: 6,
    doors: 4,
    luggageCapacity: "62.9",
    fuelType: "Gasoline",
    engine: "5.3L V8",
    mileage: 15000,
    transmission: "Automatic",
    driveType: "4WD",
    petrol_consumptionmy: 19,
    rentalPrice: 95,
    contact: "+9610000003",
  },
  {
    id: 5,
    name: "BMW 3 Series",
    model: 2020,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "17",
    fuelType: "Gasoline",
    engine: "2.0L I4",
    mileage: 25000,
    transmission: "Automatic",
    driveType: "RWD",
    petrol_consumptionmy: 28,
    rentalPrice: 75,
    contact: "+9610000004",
  },
  {
    id: 6,
    name: "Mercedes-Benz C-Class",
    model: 2008,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "12.6",
    fuelType: "Gasoline",
    engine: "3.0L V6",
    mileage: 30000,
    transmission: "Automatic",
    driveType: "RWD",
    petrol_consumptionmy: 20,
    rentalPrice: 55,
    contact: "+9610000005",
  },
  {
    id: 7,
    name: "Audi A4",
    model: 2017,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "12",
    fuelType: "Gasoline",
    engine: "2.0L I4",
    mileage: 32000,
    transmission: "Automatic",
    driveType: "AWD",
    petrol_consumptionmy: 27,
    rentalPrice: 50,
    contact: "+9610000006",
  },
  {
    id: 8,
    name: "Nissan Altima",
    model: 2005,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "15.8",
    fuelType: "Gasoline",
    engine: "2.5L I4",
    mileage: 48000,
    transmission: "Automatic",
    driveType: "FWD",
    petrol_consumptionmy: 24,
    rentalPrice: 35,
    contact: "+9610000007",
  },
  {
    id: 9,
    name: "Volkswagen Jetta",
    model: 2011,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "15.5",
    fuelType: "Gasoline",
    engine: "2.5L I5",
    mileage: 40000,
    transmission: "Automatic",
    driveType: "FWD",
    petrol_consumptionmy: 29,
    rentalPrice: 35,
    contact: "+9610000008",
  },
  {
    id: 10,
    name: "Subaru Outback",
    model: 2014,
    bodyType: "SUV",
    persons: 5,
    doors: 4,
    luggageCapacity: "35.5",
    fuelType: "Gasoline",
    engine: "2.5L H4",
    mileage: 35000,
    transmission: "Automatic",
    driveType: "AWD",
    petrol_consumptionmy: 26,
    rentalPrice: 45,
    contact: "+9610000009",
  },
  {
    id: 11,
    name: "BMW 3 Series",
    model: 2006,
    bodyType: "Sedan",
    persons: 5,
    doors: 4,
    luggageCapacity: "12",
    fuelType: "Gasoline",
    engine: "3.0L I6",
    mileage: 270000,
    transmission: "Automatic",
    driveType: "RWD",
    petrol_consumptionmy: 22,
    rentalPrice: 30,
    contact: "+9610000010",
  },
];

const imageURLs = {
  1: ["./img/b1/3_front_toyotaCamry.jpg", "./img/b1/2_side_toyotaCamry.jpg", "./img/b1/1_rear_toyotaCamry.jpg"],
  2: ["./img/b2/1_front_hondaAccord2009.jpg", "./img/b2/2_rear_hondaAccord2009.jpg", "./img/b2/3_side_hondaAccord2009.jpg"],
  3: ["./img/b3/2_rear_fordMustang2015.jpg", "./img/b3/3_side_fordMustang2015.jpg", "./img/b3/1_front_fordMustang2015.jpg"],
  4: ["./img/b4/1_front_chevroletSilverado2022.jpg","./img/b4/OIP.jpg","./img/b4/3_rear_chevroletSilverado2022.jpg"],
  5: ["./img/b5/1_front_bmw3series2020.jpg","./img/b5/2_side_bmw3series2020.jpg","./img/b5/3_rear_bmw3series2020.jpg"],
  6: ["./img/b6/1_front_mercedesC2008.jpg", "./img/b6/2_side_mercedesC2008.jpg", "./img/b6/3_rear_mercedesC2008.jpg"],
  7: ["./img/b7/1_front_audiA42017.jpg","./img/b7/2_side_audiA42017.jpg","./img/b7/3_rear_audiA42017.jpg"],
  8: ["./img/b8/1_front_nissanAltima2005.jpg", "./img/b8/2_side_nissanAltima2005.jpg", "./img/b8/3_rear_nissanAltima2005.jpg"],
  9: ["./img/b9/1_front_vJetta2011.jpg", "./img/b9/2_side_vJetta2011.jpg", "./img/b9/3_rear_vJetta2011.jpg"],
  10: ["./img/b10/1_front_subaruOutback2014.jpg", "./img/b10/2_side_subaruOutback2014.jpg", "./img/b10/3_rear_subaruOutback2014.jpg"],
  11: ["./img/b11/1_front_bmwe90_2006.jpg", "./img/b11/2_side_bmwe90_2006.jpg","./img/b11/3_rear_bmwe90_2006.jpg"],
};

$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const boxId = urlParams.get("id");
  const phoneNumberElement = $("#phone");

  if (boxId in imageURLs) {
    const images = imageURLs[boxId];
    const carouselInner = $(".carousel-inner");
    carouselInner.empty();

    images.forEach((imageUrl, index) => {
      const carouselItem = $("<div>").addClass("carousel-item");
      if (index === 0) {
        carouselItem.addClass("active");
      }
      const img = $("<img>").addClass("d-block w-100").attr("src", imageUrl);
      carouselItem.append(img);
      carouselInner.append(carouselItem);
    });
  }

  const vehicle = vehicles.find((v) => v.id === parseInt(boxId, 10));

  if (vehicle) {
    $("#h1").text(vehicle.name);
    $("#desc").html(`
            Model: ${vehicle.model}<br><br>
            Body Type: ${vehicle.bodyType}<br><br>
            Persons: ${vehicle.persons}<br><br>
            Doors: ${vehicle.doors}<br><br>
            Luggage Capacity: ${vehicle.luggageCapacity}<br><br>
            Fuel Type: ${vehicle.fuelType}<br><br>
            Engine: ${vehicle.engine}<br><br>
            Transmission: ${vehicle.transmission}<br><br>
            Drive Type: ${vehicle.driveType}<br><br>
            Petrol Consumption: ${vehicle.petrol_consumptionmy} mpg<br><br>
            Mileage: ${vehicle.mileage} miles<br><br>
            Price: <strong>${vehicle.rentalPrice}/day</strong><br><br>
            If you are interested in renting, please contact this number:
        `);
    phoneNumberElement.text(vehicle.contact);
    $("#phone").attr("href", "tel:" + vehicle.contact);
  } else {
    $("#content").text("No content available");
  }
});
$(document).ready(function(){
  var register = $("#register");

  register.on('click', function(){
      const id = new URLSearchParams(window.location.search).get('id');
      const disableUntil = Date.now() + 20000; // Current timestamp + 20 seconds
      localStorage.setItem(id, disableUntil);
      window.location.href = `firstPage.html`;
  });
});
