// Function to load a JavaScript file dynamically
function loadScript(filename, callback) {
  var script = document.createElement('script');
  script.src = filename;
  script.type = 'text/javascript';
  script.onload = callback;
  document.head.appendChild(script);
}

// Function to update semester dropdown options
function updateSemesterDropdownOptions(availableSemesters) {
  var semesterDropdown = document.getElementById("semester-select");

  // Clear existing options
  semesterDropdown.innerHTML = "";

  // Add available semesters as options
  availableSemesters.forEach(function (semester) {
    var option = document.createElement("option");
    option.value = semester;

    // Customize the displayed text based on your requirements
    if (semester === "sem-1") {
      option.text = "1-1";
    } else if (semester === "sem-2") {
      option.text = "1-2";
    } else if (semester === "sem-3") {
      option.text = "2-1";
    } else if (semester === "sem-4") {
      option.text = "2-2";
    } else if (semester === "sem-5") {
      option.text = "3-1";
    } else if (semester === "sem-6") {
      option.text = "3-2";
    } else {
      option.text = semester.toUpperCase();
    }

    semesterDropdown.add(option);
  });
}

// Function to handle the dropdown change event
function handleSemesterAndYearChange() {
  var selectedSemester = document.getElementById("semester-select");
  var selectedYear = document.getElementById("year-select").value;

  // Define a mapping of semesters to their corresponding JavaScript files and folders
  var semesterScriptMap = {
    "sem-1": ["2021", "2022"],  // Available for 2021 and 2022
    "sem-2": ["2021", "2022"],  // Available for 2021 and 2022
    "sem-3": ["2021", "2022"],  // Available for 2021 and 2022
    "sem-4": ["2021"],           // Available only for 2021
    "sem-5": ["2021"],           // Available only for 2021
    "sem-6": ["2020"]            // Available only for 2020
    // Add more semesters and their corresponding JavaScript files as needed
  };

  // Filter semesters based on the selected year
  var availableSemesters = Object.keys(semesterScriptMap).filter(function (semester) {
    return semesterScriptMap[semester].includes(selectedYear);
  });

  // Update the semester dropdown options
  updateSemesterDropdownOptions(availableSemesters);

  // Load the selected semester's JavaScript file
  var selectedScript = `../${selectedYear}_Results/script${selectedSemester}_${selectedYear}.js`;

  if (availableSemesters.includes(selectedSemester.value)) {
    // Load the selected JavaScript file
    loadScript(selectedScript, function () {
      // JavaScript file loaded, you can trigger any functions or code here
    });
  } else {
    // No JavaScript file found for the selected semester
    console.error("No result found for the selected semester or year.");
    // You can display an alert, log to console, or take any other appropriate action.
  }
}

// Add an event listener to the semester dropdown for change events
document.getElementById("semester-select").addEventListener("change", handleSemesterAndYearChange);

// Add an event listener to the year dropdown for change events
document.getElementById("year-select").addEventListener("change", handleSemesterAndYearChange);

// Initial load of the selected semester's JavaScript file based on the default selected values
handleSemesterAndYearChange();
