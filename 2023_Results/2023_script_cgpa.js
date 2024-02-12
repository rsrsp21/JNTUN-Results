var csvData = `ID,1-1,Credits_1-1,Total Credits,CGPA,Supplementary Appearances
`;

    function parseCSV(csv) {
    var lines = csv.split('\n');
    var headers = lines[0].split(',');

    var data = [];
    for (var i = 1; i < lines.length; i++) {
        var values = lines[i].split(',');
        if (values.length === headers.length) {
            var entry = {};
            for (var j = 0; j < headers.length; j++) {
                entry[headers[j].trim()] = values[j].trim();
            }
            data.push(entry);
        }
    }

    return data;
}

function getStudentData(id, data) {
    var studentData = data.filter(function (entry) {
        return entry.ID === id;
    });

    return studentData;
}

var message = ''; // Declare the message variable outside the function

function displayResults() {
    var studentId = document.getElementById('student-id').value.trim();
    if (!studentId) {
        alert('Please enter a valid Roll Number.');
        return;
    }

    var studentData = getStudentData(studentId, parseCSV(csvData));
    if (studentData.length === 0) {
        alert('No data found for the given Roll Number.');
        return;
    }

    var idContainer = document.getElementById('id-container');
    idContainer.innerHTML = '';

    var idHeading = document.createElement('h3');
    idHeading.innerHTML = '<span style="color: black; font-weight: bold">Roll Number: </span><span style="color: red; font-weight: bold">' + studentId + '</span>';
    idContainer.appendChild(idHeading);

    var tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = '';

    var table = document.createElement('table');
    tableContainer.appendChild(table);

    var tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);

    var headerRow = document.createElement('tr');
    tableHeader.appendChild(headerRow);

    var semestersHeader = document.createElement('th');
    semestersHeader.textContent = "Semesters";
    headerRow.appendChild(semestersHeader);

    var sgpaHeader = document.createElement('th');
    sgpaHeader.textContent = "SGPA";
    headerRow.appendChild(sgpaHeader);

    var creditsHeader = document.createElement('th');
    creditsHeader.textContent = "Credits Obtained";
    headerRow.appendChild(creditsHeader);

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    var keys = Object.keys(studentData[0]);
    keys.forEach(function (key) {
        if (key !== 'ID' && key !== 'CGPA' && key !== 'Total Credits' && key !== 'Supplementary Appearances' && !key.startsWith('Credits_')) {
            var row = document.createElement('tr');
            
            // Semester label
            var labelCell = document.createElement('td');
            labelCell.textContent = key;
            labelCell.style.fontWeight = 'bold';
            row.appendChild(labelCell);

            // SGPA
            var sgpaCell = document.createElement('td');
            sgpaCell.textContent = studentData[0][key] === '' ? 'NA' : studentData[0][key];
            row.appendChild(sgpaCell);

            // Find the corresponding Credits key
            var creditsKey = 'Credits_' + key; // Construct the corresponding Credits key
            var creditsValue = studentData[0][creditsKey]; // Get the credits value

            // Credits
            var creditsCell = document.createElement('td');
            creditsCell.textContent = creditsValue;
            row.appendChild(creditsCell);

            tableBody.appendChild(row);
        }
    });

    var cgpaContainer = document.getElementById('cgpa-container');
    cgpaContainer.innerHTML = '';

    var cgpaHeading = document.createElement('h2');
    cgpaHeading.innerHTML = '<span style="color: black; font-weight: bold">CGPA : </span><span style="color: red; font-weight: bold">' + studentData[0]['CGPA'] + '</span>';
    cgpaContainer.appendChild(cgpaHeading);

    var cgpa = parseFloat(studentData[0]['CGPA']);
    var supplementaryAppearances = studentData[0]['Supplementary Appearances'];

    if (cgpa >= 7.5) {
        message = 'First Class with Distinction';
    } else if (cgpa >= 6.5) {
        message = 'First Class';
    } else if (cgpa >= 5.5) {
        message = 'Second Class';
    } else if (cgpa >= 5) {
        message = 'Pass Class';
    } else {
        message = 'Not Applicable';
    }

    var messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = '';

    if (message !== '') {
        var messageElement = document.createElement('h3');
        messageElement.textContent = message;
        messageElement.style.color = 'green';
        messageElement.style.fontWeight = 'bold';
        messageContainer.appendChild(messageElement);
    }
 // Percentage and Total Credits Container
    var percentageTotalContainer = document.getElementById('percentage-total-container');
    percentageTotalContainer.innerHTML = '';

    // Percentage
    var percentageHeading = document.createElement('h3');
    percentageHeading.style.color = 'black';
    percentageHeading.style.fontWeight = 'bold';
    percentageHeading.textContent = 'Percentage: ';

    var cgpaValue = parseFloat(studentData[0]['CGPA']);
    var percentageValue = document.createElement('span');
    percentageValue.style.color = 'red';
    percentageValue.style.fontWeight = 'bold';
    var percentage = ((cgpaValue - 0.5) * 10).toFixed(2);
    percentageValue.textContent = (percentage <= 0) ? '0' : percentage;

    percentageHeading.appendChild(percentageValue);
    percentageTotalContainer.appendChild(percentageHeading);

    // Total Credits Obtained
    var totalCreditsHeading = document.createElement('h3');
    totalCreditsHeading.style.color = 'black';
    totalCreditsHeading.style.fontWeight = 'bold';
    totalCreditsHeading.textContent = 'Total Credits Obtained: ';

    var totalCreditsValue = document.createElement('span');
    totalCreditsValue.style.color = 'red';
    totalCreditsValue.style.fontWeight = 'bold';
    totalCreditsValue.textContent = studentData[0]['Total Credits']; // Assuming this is the field name in your CSV

    totalCreditsHeading.appendChild(totalCreditsValue);
    percentageTotalContainer.appendChild(totalCreditsHeading);
 
var supplementaryAppearances = studentData[0]['Supplementary Appearances'];
var supplementaryContainer = document.getElementById('supplementary-container');
supplementaryContainer.innerHTML = '';

var supplementaryHeading = document.createElement('h3');
supplementaryHeading.style.color = 'blue';
supplementaryHeading.style.fontWeight = 'bold';
supplementaryHeading.textContent = 'Supplementary Appearances: ';

var supplementaryValue = document.createElement('span');
supplementaryValue.style.color = 'black';
supplementaryValue.style.fontWeight = 'bold';
supplementaryValue.textContent = supplementaryAppearances || 'NA';

supplementaryHeading.appendChild(supplementaryValue);
supplementaryContainer.appendChild(supplementaryHeading);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        // 13 represents the Enter key
        displayResults();
    }
}
        // Add event listener to input element
        document.getElementById('student-id').addEventListener('keyup', handleKeyPress);

        function printResults() {
            var printContents = document.querySelector('.container').innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;
            window.print();

            document.body.innerHTML = originalContents;
        }
