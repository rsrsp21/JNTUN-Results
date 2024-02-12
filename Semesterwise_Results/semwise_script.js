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
  var selectedSemester = document.getElementById("semester-select").value;
  var selectedYear = document.getElementById("year-select").value;

  // Define a mapping of semesters to their corresponding JavaScript files and folders
  var semesterScriptMap = {
    "sem-1": `../${selectedYear}_Results/script1_1_${selectedYear}.js`,
    "sem-2": `../${selectedYear}_Results/script1_2_${selectedYear}.js`,
    "sem-3": `../${selectedYear}_Results/script2_1_${selectedYear}.js`,
    "sem-4": `../${selectedYear}_Results/script2_2_${selectedYear}.js`,
    "sem-6": `../${selectedYear}_Results/script3_2_${selectedYear}.js`
    // Add more semesters and their corresponding JavaScript files as needed
  };

  // Load the selected semester's JavaScript file
  var selectedScript = semesterScriptMap[selectedSemester];

  if (selectedScript) {
    // Load the selected JavaScript file
    loadScript(selectedScript, function () {
      // JavaScript file loaded, you can trigger any functions or code here
    });
  } else {
    // No JavaScript file found for the selected semester
    console.error("No result found for the selected semester.");
    // You can display an alert, log to console, or take any other appropriate action.
  }
}

// Add an event listener to the semester dropdown for change events
document.getElementById("semester-select").addEventListener("change", handleSemesterAndYearChange);

// Add an event listener to the year dropdown for change events
document.getElementById("year-select").addEventListener("change", handleSemesterAndYearChange);

// Initial load of the selected semester's JavaScript file based on the default selected values
handleSemesterAndYearChange();
