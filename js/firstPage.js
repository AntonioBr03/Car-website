  $(document).ready(function () {
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
      },
    ];
    var vehicleContainers = $(".outer-shell");
    var searchInput = $("input[type='text']");
    var categories = $(".category-list li");
    const categorydropdown = $(".category-dropdown")
    var selectedCategory = "All";

    $(".select-category-box").on("click", function () {
    $(this).toggleClass("select-category-box-clicked");
    $(this).find(".fa-caret-up").toggleClass("caret-rotate");
    $(".category-list").toggleClass("menu-open");
  });

  categories.on("click", function () {
    selectedCategory = $(this).data("category") || "All";
    $(".selected-category").text($(this).text());
    $(".category-list").removeClass("menu-open");
    $(".select-category-box").removeClass("select-category-box-clicked");
    $(".fa-caret-up").removeClass("caret-rotate");
    searchInput.val("");
    filterAndDisplayVehicles();
  });

    function displayVehicles(filteredVehicles) {
      vehicles.forEach(function (vehicle, index) {
        var isVisible = filteredVehicles.includes(vehicle);
        $(vehicleContainers[index]).css("display", isVisible ? "block" : "none");
        if (isVisible) {
          var element = $(vehicleContainers[index]).find(".vehicleInfo");
          element.html(
            "<span class='vehicleName'>" +
              vehicle.name +
              "</span>" +
              "<span class='vehicleModel'>" +
              vehicle.model +
              "</span>" +
              "<div class='seperate-info-div'>" +
              "<span class='vehiclepersons'>" +
              vehicle.persons +
              " persons" +
              "</span>" +
              "<span class='vehicleTransmission'>" +
              vehicle.transmission +
              "</span>" +
              "<span class='vehiclepetrol_consumptionmy'>" +
              vehicle.petrol_consumptionmy +
              " mpg</span>" +
              "<span class='vehicleMileage'>" +
              vehicle.mileage +
              " miles</span>" +
              "</div><br>" +
              "<span class='vehicleRentalPrice'>$" +
              vehicle.rentalPrice +
              " per day</span>"
          );
        }
      });
    }

    function filterVehiclesBySliderValues(vehiclesToFilter) {
      const priceMin = parseInt($("#priceMin").val(), 10);
      const priceMax = parseInt($("#priceMax").val(), 10);
      const modelMin = parseInt($("#modelMin").val(), 10);
      const modelMax = parseInt($("#modelMax").val(), 10);
      const consMin = parseInt($("#consMin").val(), 10);
      const consMax = parseInt($("#consMax").val(), 10);

      return vehiclesToFilter.filter((vehicle) => {
        return (
          vehicle.rentalPrice >= priceMin &&
          vehicle.rentalPrice <= priceMax &&
          vehicle.model >= modelMin &&
          vehicle.model <= modelMax &&
          vehicle.petrol_consumptionmy >= consMin &&
          vehicle.petrol_consumptionmy <= consMax
        );
      });
    }
    function filterAndDisplayVehicles() {
      var searchTerm = searchInput.val().trim().toLowerCase();
      var filteredVehicles = vehicles.filter(function (vehicle) {
        return (
          (selectedCategory === "All" || vehicle.bodyType === selectedCategory) &&
          Object.values(vehicle).some(function (value) {
            return String(value).toLowerCase().includes(searchTerm);
          })
        );
      });

      filteredVehicles = filterVehiclesBySliderValues(filteredVehicles);
      displayVehicles(filteredVehicles);
    }

  

    searchInput.on("input", filterAndDisplayVehicles);

    $(".outer-shell").click(function () {
      const boxId = $(this).data("id");
      const disableUntil = localStorage.getItem(boxId);
      if (disableUntil && Date.now() < disableUntil) {
        return;
      }
      window.location.href = `3dCars.html?id=${boxId}`;
    });

    $("#saveChanges").click(function () {
      filterAndDisplayVehicles();
      $("#exampleModal").modal("hide");
    });

    displayVehicles(vehicles);

    function updateValue(rangeInput, valueDisplay) {
      valueDisplay.text(rangeInput.val());
    }

    $(".slider").each(function () {
      updateValue($(this), $("#" + $(this).attr("id") + "Value"));
    });

    $(".slider").on("input", function () {
      updateValue($(this), $("#" + $(this).attr("id") + "Value"));
      filterAndDisplayVehicles();
    });
    $(".outer-shell").each(function () {
      const id = $(this).data('id');
      const disableUntil = localStorage.getItem(id);
      if (disableUntil && Date.now() < disableUntil) {
        $(this).css("pointer-events", "none");
        $(this).css("opacity", "0.5");
        $(this).find('.disable').show();
      } else {
        $(this).find('.disable').hide();
      }
    });
  });

