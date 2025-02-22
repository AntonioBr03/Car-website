const vehicles = [
    {
      id: 1,
      name: "Toyota Camry",
      maker: "Toyota",
      model: 2018,
      petrol_consumption: 30,
      price: 250,
      miles: 50000,
      imageUrl: "img/b1/camry.webp",
    },
    {
      id: 2,
      name: "Honda Accord",
      maker: "Honda",
      model: 2009,
      petrol_consumption: 25,
      price: 270,
      miles: 45000,
      imageUrl: "img/b2/honda2009F.jpeg",
    },
    {
      id: 3,
      name: "Ford Mustang",
      maker: "Ford",
      model: 2015,
      petrol_consumption: 20,
      price: 350,
      miles: 40000,
      imageUrl: "img/b3/mustang.jpeg",
    },
    {
      id: 4,
      name: "Chevrolet Silverado",
      maker: "Chevrolet",
      model: 2012,
      petrol_consumption: 18,
      price: 400,
      miles: 60000,
      imageUrl: "img/b4/silverado.webp",
    },
    {
      id: 5,
      name: "BMW 3 Series",
      maker: "BMW",
      model: 2020,
      petrol_consumption: 28,
      price: 400,
      miles: 35000,
      imageUrl: "img/b5/bmw3.jpg",
    },
    {
      id: 6,
      name: "Rolls Royce Ghost",
      maker: "Rolls Royce",
      model: 2023,
      petrol_consumption: 16,
      price: 700,
      miles: 3000,
      imageUrl: "img/b6/rollsroyce",
    },
    {
      id: 7,
      name: "Mercedes-Benz C-Class",
      maker: "Mercedes-Benz",
      model: 2008,
      petrol_consumption: 26,
      price: 450,
      miles: 30000,
      imageUrl: "img/b7/benz",
    },
    {
      id: 8,
      name: "Audi A4",
      maker: "Audi",
      model: 2017,
      petrol_consumption: 24,
      price: 420,
      miles: 32000,
      imageUrl: "img/b8/a4",
    },
    {
      id: 9,
      name: "Nissan Altima",
      maker: "Nissan",
      model: 2005,
      petrol_consumption: 27,
      price: 280,
      miles: 48000,
      imageUrl: "img/b9/altima",
    },
    {
      id: 10,
      name: "Volkswagen Jetta",
      maker: "Volkswagen",
      model: 2011,
      petrol_consumption: 29,
      price: 300,
      miles: 40000,
      imageUrl: "img/b10/jetta",
    },
    {
      id: 11,
      name: "Subaru Outback",
      maker: "Subaru",
      model: 2014,
      petrol_consumption: 26,
      price: 320,
      miles: 35000,
      imageUrl: "img/b11/outback",
    },
  ];
  
  $(document).ready(function() {
    vehicles.forEach(function(vehicle) {
        $(".carSelect").append(`<option value="${vehicle.name}">${vehicle.name}</option>`);
    });

    $(".button").click(function() {
        var car1 = $("#carSelect1").val();
        var car2 = $("#carSelect2").val();

        if (car1 && car2) {
            var selectedCar1 = vehicles.find(function(vehicle) {
                return vehicle.name === car1;
            });

            var selectedCar2 = vehicles.find(function(vehicle) {
                return vehicle.name === car2;
            });

            $(".listRow").eq(0).text("Model: " + (selectedCar1.year > selectedCar2.year ? car1 + " (" + selectedCar1.model + ")" : car2 + " (" + selectedCar2.model + ")") + " is newer");
$(".listRow").eq(1).text("Mileage: " + (selectedCar1.petrol_consumption > selectedCar2.petrol_consumption ? car2 + " (" + selectedCar2.petrol_consumption + " mpg)" : car1 + " (" + selectedCar1.petrol_consumption + "mpg)") + " is more fuel efficient");
$(".listRow").eq(2).text("Odometer: " + (selectedCar1.miles > selectedCar2.miles ? car1 + " (" + selectedCar1.miles + " miles)" : car2 + " (" + selectedCar2.miles + " miles) ") + " is driven more miles");
$(".listRow").eq(3).text("Price: " + (selectedCar1.price < selectedCar2.price ? car1 + " (" + selectedCar1.price + "$)" : car2 + " (" + selectedCar2.price + "$)") + " is lower on price");

            
        }
    });

    $(".buttonAdd").click(function() {
        var selectedCar = $(this).siblings(".carSelect").val(); 
        var cmpImg = $(this).siblings(".cmp-img").find(".inner");     if (selectedCar) {
            var selectedVehicle = vehicles.find(function(vehicle) {
                return vehicle.name === selectedCar;
            });
    
            if (selectedVehicle && selectedVehicle.imageUrl) {
                cmpImg.empty();
                cmpImg.css("background-image", `url(${selectedVehicle.imageUrl})`);
                cmpImg.css("background-size", "cover");
                cmpImg.css("background-position", "center"); 
                cmpImg.css("background-repeat", "no-repeat");
            } else {
                cmpImg.html(`<p class="label">Selected car</p>`);
            }
        }
    });
});