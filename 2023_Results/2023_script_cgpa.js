var csvData = `ID,1-1,Credits_1-1,Total Credits,CGPA,Supplementary Appearances
23031A0101,0,14.5,0,14.5,
23031A0102,0,8.5,0,8.5,
23031A0103,0,14.5,0,14.5,
23031A0104,0,8.5,0,8.5,
23031A0105,0,5.5,0,5.5,
23031A0106,0,17.5,0,17.5,
23031A0107,0,14.5,0,14.5,
23031A0108,0,14.5,0,14.5,
23031A0109,0,8.5,0,8.5,
23031A0110,0,17.5,0,17.5,
23031A0111,0,5.5,0,5.5,
23031A0112,0,8.5,0,8.5,
23031A0113,0,14.5,0,14.5,
23031A0114,0,8.5,0,8.5,
23031A0115,0,14.5,0,14.5,
23031A0116,0,5.5,0,5.5,
23031A0117,0,11.5,0,11.5,
23031A0118,0,5.5,0,5.5,
23031A0119,0,14.5,0,14.5,
23031A0120,0,11.5,0,11.5,
23031A0121,0,11.5,0,11.5,
23031A0122,0,17.5,0,17.5,
23031A0123,0,17.5,0,17.5,
23031A0124,0,8.5,0,8.5,
23031A0125,0,4.5,0,4.5,
23031A0126,0,11.5,0,11.5,
23031A0127,0,17.5,0,17.5,
23031A0128,0,5.5,0,5.5,
23031A0129,0,14.5,0,14.5,
23031A0130,0,5.5,0,5.5,
23031A0201,6.85,19.5,6.85,19.5,
23031A0202,0,16.5,0,16.5,
23031A0203,0,13.5,0,13.5,
23031A0204,0,6.5,0,6.5,
23031A0205,8.08,19.5,8.08,19.5,
23031A0206,6.26,19.5,6.26,19.5,
23031A0207,0,16.5,0,16.5,
23031A0208,0,13.5,0,13.5,
23031A0209,0,16.5,0,16.5,
23031A0210,7.28,19.5,7.28,19.5,
23031A0211,6.44,19.5,6.44,19.5,
23031A0212,6.67,19.5,6.67,19.5,
23031A0213,7.44,19.5,7.44,19.5,
23031A0214,6.41,19.5,6.41,19.5,
23031A0215,5.72,19.5,5.72,19.5,
23031A0216,6.33,19.5,6.33,19.5,
23031A0217,0,0,0,0,
23031A0218,0,13.5,0,13.5,
23031A0219,0,9.5,0,9.5,
23031A0220,0,7.5,0,7.5,
23031A0221,0,10.5,0,10.5,
23031A0222,0,15.5,0,15.5,
23031A0223,0,16.5,0,16.5,
23031A0224,0,16.5,0,16.5,
23031A0225,7.18,19.5,7.18,19.5,
23031A0226,6.97,19.5,6.97,19.5,
23031A0227,0,9.5,0,9.5,
23031A0228,7.36,19.5,7.36,19.5,
23031A0229,5.9,19.5,5.9,19.5,
23031A0230,0,4.5,0,4.5,
23031A0231,4.77,19.5,4.77,19.5,
23031A0232,0,16.5,0,16.5,
23031A0233,6.46,19.5,6.46,19.5,
23031A0234,0,16.5,0,16.5,
23031A0235,0,16,0,16,
23031A0237,6.13,19.5,6.13,19.5,
23031A0238,0,16.5,0,16.5,
23031A0240,6.79,19.5,6.79,19.5,
23031A0241,7.21,19.5,7.21,19.5,
23031A0242,0,13.5,0,13.5,
23031A0243,7,19.5,7,19.5,
23031A0244,6.28,19.5,6.28,19.5,
23031A0245,0,13.5,0,13.5,
23031A0246,0,9.5,0,9.5,
23031A0247,0,16.5,0,16.5,
23031A0248,0,15.5,0,15.5,
23031A0301,0,14.5,0,14.5,
23031A0302,0,17.5,0,17.5,
23031A0303,6.27,20.5,6.27,20.5,
23031A0304,0,14.5,0,14.5,
23031A0305,0,5.5,0,5.5,
23031A0306,0,5.5,0,5.5,
23031A0307,0,17.5,0,17.5,
23031A0308,0,5.5,0,5.5,
23031A0309,0,8.5,0,8.5,
23031A0310,0,8.5,0,8.5,
23031A0311,0,4,0,4,
23031A0312,0,11.5,0,11.5,
23031A0313,0,8.5,0,8.5,
23031A0314,0,11.5,0,11.5,
23031A0315,0,14.5,0,14.5,
23031A0317,0,14.5,0,14.5,
23031A0318,0,11.5,0,11.5,
23031A0319,0,17.5,0,17.5,
23031A0320,0,17.5,0,17.5,
23031A0321,0,14.5,0,14.5,
23031A0322,0,17.5,0,17.5,
23031A0324,0,17.5,0,17.5,
23031A0325,0,17.5,0,17.5,
23031A0326,0,8.5,0,8.5,
23031A0327,0,14.5,0,14.5,
23031A0328,0,14.5,0,14.5,
23031A0329,0,14.5,0,14.5,
23031A0330,0,8.5,0,8.5,
23031A0331,0,17.5,0,17.5,
23031A0332,0,14.5,0,14.5,
23031A0401,0,17.5,0,17.5,
23031A0402,7.12,20.5,7.12,20.5,
23031A0403,0,11.5,0,11.5,
23031A0404,6.41,20.5,6.41,20.5,
23031A0405,0,16,0,16,
23031A0406,5.93,20.5,5.93,20.5,
23031A0407,0,19,0,19,
23031A0408,0,16,0,16,
23031A0409,0,16,0,16,
23031A0410,0,16,0,16,
23031A0411,5.34,20.5,5.34,20.5,
23031A0412,7.07,20.5,7.07,20.5,
23031A0413,0,16,0,16,
23031A0414,7.27,20.5,7.27,20.5,
23031A0415,6.24,20.5,6.24,20.5,
23031A0416,0,19,0,19,
23031A0417,0,19,0,19,
23031A0418,0,17.5,0,17.5,
23031A0419,5.93,20.5,5.93,20.5,
23031A0421,0,17.5,0,17.5,
23031A0422,0,17.5,0,17.5,
23031A0423,0,17.5,0,17.5,
23031A0424,0,13,0,13,
23031A0425,0,11.5,0,11.5,
23031A0426,0,19,0,19,
23031A0427,7.61,20.5,7.61,20.5,
23031A0428,6.8,20.5,6.8,20.5,
23031A0429,7.2,20.5,7.2,20.5,
23031A0430,0,17.5,0,17.5,
23031A0431,6.27,20.5,6.27,20.5,
23031A0432,0,19,0,19,
23031A0433,0,16,0,16,
23031A0434,7.05,20.5,7.05,20.5,
23031A0435,7.24,20.5,7.24,20.5,
23031A0437,0,17.5,0,17.5,
23031A0438,0,17.5,0,17.5,
23031A0439,0,19,0,19,
23031A0440,7.24,20.5,7.24,20.5,
23031A0441,6.56,20.5,6.56,20.5,
23031A0442,0,16,0,16,
23031A0443,0,16,0,16,
23031A0444,7.49,20.5,7.49,20.5,
23031A0445,8.22,20.5,8.22,20.5,
23031A0446,0,17.5,0,17.5,
23031A0447,0,17.5,0,17.5,
23031A0448,0,17.5,0,17.5,
23031A0449,6.22,20.5,6.22,20.5,
23031A0450,7.34,20.5,7.34,20.5,
23031A0451,0,17.5,0,17.5,
23031A0452,0,13,0,13,
23031A0453,0,17.5,0,17.5,
23031A0454,7.34,20.5,7.34,20.5,
23031A0455,0,16,0,16,
23031A0456,7.27,20.5,7.27,20.5,
23031A0457,6.51,20.5,6.51,20.5,
23031A0458,0,11.5,0,11.5,
23031A0459,7.17,20.5,7.17,20.5,
23031A0501,8.26,19.5,8.26,19.5,
23031A0502,5.69,19.5,5.69,19.5,
23031A0503,7.31,19.5,7.31,19.5,
23031A0504,2.54,19.5,2.54,19.5,
23031A0505,6.85,19.5,6.85,19.5,
23031A0506,7.13,19.5,7.13,19.5,
23031A0507,5.08,19.5,5.08,19.5,
23031A0508,0,16.5,0,16.5,
23031A0509,0,16.5,0,16.5,
23031A0510,6.41,19.5,6.41,19.5,
23031A0511,7.64,19.5,7.64,19.5,
23031A0512,6.31,19.5,6.31,19.5,
23031A0513,7.62,19.5,7.62,19.5,
23031A0514,6.23,19.5,6.23,19.5,
23031A0515,5.23,19.5,5.23,19.5,
23031A0516,7.08,19.5,7.08,19.5,
23031A0517,7.41,19.5,7.41,19.5,
23031A0518,0,18,0,18,
23031A0519,8.28,19.5,8.28,19.5,
23031A0520,0,16.5,0,16.5,
23031A0521,7.56,19.5,7.56,19.5,
23031A0522,5.77,19.5,5.77,19.5,
23031A0523,6.79,19.5,6.79,19.5,
23031A0524,6.28,19.5,6.28,19.5,
23031A0525,7.23,19.5,7.23,19.5,
23031A0526,5.28,19.5,5.28,19.5,
23031A0527,7.31,19.5,7.31,19.5,
23031A0528,0,16.5,0,16.5,
23031A0529,5.15,19.5,5.15,19.5,
23031A0530,4.15,19.5,4.15,19.5,
23031A0531,6.31,19.5,6.31,19.5,
23031A0532,4.82,19.5,4.82,19.5,
23031A0533,6.62,19.5,6.62,19.5,
23031A0534,5.79,19.5,5.79,19.5,
23031A0535,6.31,19.5,6.31,19.5,
23031A0536,0,16.5,0,16.5,
23031A0537,8.15,19.5,8.15,19.5,
23031A0538,5.23,19.5,5.23,19.5,
23031A0539,7.54,19.5,7.54,19.5,
23031A0540,0,16.5,0,16.5,
23031A0541,6.77,19.5,6.77,19.5,
23031A0542,6.77,19.5,6.77,19.5,
23031A0543,7.41,19.5,7.41,19.5,
23031A0544,7.13,19.5,7.13,19.5,
23031A0545,6.72,19.5,6.72,19.5,
23031A0546,6.23,19.5,6.23,19.5,
23031A0547,7.1,19.5,7.1,19.5,
23031A0548,3.62,19.5,3.62,19.5,
23031A0549,7.08,19.5,7.08,19.5,
23031A0550,0,18,0,18,
23031A0551,6.36,19.5,6.36,19.5,
23031A0552,6.79,19.5,6.79,19.5,
23031A0553,6.69,19.5,6.69,19.5,
23031A0554,7.72,19.5,7.72,19.5,`;

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
