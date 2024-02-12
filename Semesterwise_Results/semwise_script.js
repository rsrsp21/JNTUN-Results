// Function to load a JavaScript file dynamically
function loadScript(filename, callback) {
  var script = document.createElement('script');
  script.src = filename;
  script.type = 'text/javascript';
  script.onload = callback;
  document.head.appendChild(script);
}

// Function to handle the dropdown change event
function handleSemesterAndYearChange() {
  var selectedSemester = document.getElementById("semester-select");
  var selectedYear = document.getElementById("year-select").value;

  // Define a mapping of semesters to their corresponding JavaScript files and folders
  var semesterScriptMap = {
    "1-1": ["2021", "2022", "2023"],  // Available for 2021, 2022, 2023
    "1-2": ["2021", "2022"],  // Available for 2021, 2022, 2023
    "2-1": ["2021", "2022"],  // Available for 2021, 2022, 2023
    "2-2": ["2021"],  // Available for 2021, 2022, 2023
    "3-1": ["2021"],           // Available for 2021, 2022
    "3-2": ["2020"]    // Available for 2020, 2021, 2022
    // Add more semesters and their corresponding JavaScript files as needed
  };

  // Update the semester dropdown options
  updateSemesterDropdownOptions(Object.keys(semesterScriptMap));

  // Load the selected semester's JavaScript file
  var selectedScript = `../${selectedYear}_Results/script${selectedSemester}_${selectedYear}.js`;

  if (semesterScriptMap[selectedSemester.value] &&
      semesterScriptMap[selectedSemester.value].includes(selectedYear)) {
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

// Function to update semester dropdown options
function updateSemesterDropdownOptions(availableSemesters) {
  var semesterDropdown = document.getElementById("semester-select");

  // Clear existing options
  semesterDropdown.innerHTML = "";

  // Add available semesters as options
  availableSemesters.forEach(function (semester) {
    var option = document.createElement("option");
    option.value = semester;
    option.text = semester;
    semesterDropdown.add(option);
  });
}

// Add an event listener to the semester dropdown for change events
document.getElementById("semester-select").addEventListener("change", handleSemesterAndYearChange);

// Add an event listener to the year dropdown for change events
document.getElementById("year-select").addEventListener("change", handleSemesterAndYearChange);

// Initial load of the selected semester's JavaScript file based on the default selected values
handleSemesterAndYearChange();
