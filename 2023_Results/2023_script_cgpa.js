var csvData = `ID,1-1,Credits_1-1,1-2,Credits_1-2,Total Credits,CGPA,Supplementary Appearances
23031A0101,5.98,20.5,6.69,19.5,40.0,6.33,*
23031A0102,0.0,8.5,0.0,13.5,22.0,0.0,*
23031A0103,0.0,14.5,0.0,15.5,30.0,0.0,*
23031A0104,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0105,0.0,5.5,0.0,5.5,11.0,0.0,*
23031A0106,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0107,0.0,14.5,0.0,16.5,31.0,0.0,*
23031A0108,0.0,17.5,7.97,19.5,37.0,0.0,*
23031A0109,0.0,14.5,0.0,13.5,28.0,0.0,*
23031A0110,7.1,20.5,7.31,19.5,40.0,7.2,*
23031A0111,0.0,5.5,0.0,7.5,13.0,0.0,*
23031A0112,0.0,11.5,0.0,10.5,22.0,0.0,*
23031A0113,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0114,0.0,8.5,0.0,16.5,25.0,0.0,*
23031A0115,0.0,14.5,0.0,10.5,25.0,0.0,*
23031A0116,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0117,0.0,17.5,0.0,12.5,30.0,0.0,*
23031A0118,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0119,0.0,14.5,,,14.5,0.0,*
23031A0120,0.0,17.5,6.74,19.5,37.0,0.0,*
23031A0121,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0122,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0123,0.0,17.5,6.36,19.5,37.0,0.0,*
23031A0124,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0125,0.0,5.5,0.0,4.5,10.0,0.0,*
23031A0126,0.0,11.5,0.0,9.5,21.0,0.0,*
23031A0127,7.17,20.5,6.51,19.5,40.0,6.85,*
23031A0128,0.0,8.5,0.0,13.5,22.0,0.0,*
23031A0129,0.0,14.5,6.64,19.5,34.0,0.0,*
23031A0130,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0201,6.85,19.5,0.0,10.0,29.5,0.0,
23031A0202,0.0,16.5,0.0,0.0,16.5,0.0,*
23031A0203,0.0,13.5,0.0,11.5,25.0,0.0,*
23031A0204,0.0,6.5,0.0,4.0,10.5,0.0,*
23031A0205,8.08,19.5,6.85,20.5,40.0,7.45,
23031A0206,6.77,19.5,6.2,20.5,40.0,6.48,
23031A0207,6.23,19.5,0.0,13.0,32.5,0.0,*
23031A0208,0.0,13.5,0.0,4.0,17.5,0.0,*
23031A0209,0.0,16.5,0.0,4.0,20.5,0.0,*
23031A0210,8.05,19.5,7.54,20.5,40.0,7.79,
23031A0211,8.49,19.5,8.39,20.5,40.0,8.44,
23031A0212,6.67,19.5,0.0,14.5,34.0,0.0,
23031A0213,7.44,19.5,7.07,20.5,40.0,7.25,
23031A0214,7.18,19.5,6.71,20.5,40.0,6.94,
23031A0215,7.0,19.5,0.0,14.5,34.0,0.0,
23031A0216,6.33,19.5,0.0,17.5,37.0,0.0,
23031A0217,0.0,7.5,0.0,8.5,16.0,0.0,*
23031A0218,0.0,13.5,0.0,4.0,17.5,0.0,
23031A0219,0.0,9.5,0.0,5.5,15.0,0.0,*
23031A0220,0.0,13.5,0.0,17.5,31.0,0.0,*
23031A0221,0.0,10.5,0.0,5.5,16.0,0.0,*
23031A0222,0.0,16.5,0.0,11.5,28.0,0.0,*
23031A0223,0.0,16.5,0.0,13.0,29.5,0.0,*
23031A0224,7.85,19.5,0.0,13.0,32.5,0.0,*
23031A0225,7.18,19.5,0.0,14.5,34.0,0.0,
23031A0226,7.49,19.5,6.98,20.5,40.0,7.23,
23031A0227,0.0,9.5,0.0,8.5,18.0,0.0,
23031A0228,7.36,19.5,0.0,17.5,37.0,0.0,
23031A0229,7.18,19.5,0.0,14.5,34.0,0.0,
23031A0230,0.0,10.5,0.0,7.0,17.5,0.0,*
23031A0231,8.62,19.5,7.27,20.5,40.0,7.93,
23031A0232,0.0,16.5,0.0,10.0,26.5,0.0,*
23031A0233,6.46,19.5,0.0,17.5,37.0,0.0,
23031A0234,0.0,16.5,0.0,17.5,34.0,0.0,*
23031A0235,6.69,19.5,6.59,20.5,40.0,6.64,*
23031A0237,6.64,19.5,0.0,16.0,35.5,0.0,
23031A0238,0.0,16.5,0.0,4.0,20.5,0.0,*
23031A0240,7.31,19.5,0.0,17.5,37.0,0.0,
23031A0241,7.21,19.5,7.0,20.5,40.0,7.1,
23031A0242,0.0,13.5,0.0,8.5,22.0,0.0,*
23031A0243,7.51,19.5,7.39,20.5,40.0,7.45,
23031A0244,6.28,19.5,0.0,14.5,34.0,0.0,
23031A0245,0.0,13.5,0.0,8.5,22.0,0.0,*
23031A0246,0.0,9.5,0.0,14.5,24.0,0.0,*
23031A0247,0.0,16.5,0.0,17.5,34.0,0.0,*
23031A0248,0.0,15.5,6.71,20.5,36.0,0.0,*
23031A0301,0.0,17.5,6.64,19.5,37.0,0.0,*
23031A0302,0.0,17.5,,,17.5,0.0,*
23031A0303,7.0,20.5,0.0,16.5,37.0,0.0,
23031A0304,0.0,14.5,0.0,10.5,25.0,0.0,*
23031A0305,0.0,5.5,0.0,10.5,16.0,0.0,*
23031A0306,0.0,5.5,0.0,9.5,15.0,0.0,*
23031A0307,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0308,0.0,5.5,0.0,16.5,22.0,0.0,*
23031A0309,0.0,8.5,0.0,13.5,22.0,0.0,*
23031A0310,0.0,14.5,0.0,10.5,25.0,0.0,*
23031A0311,0.0,4.0,,,4.0,0.0,
23031A0312,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0313,0.0,8.5,0.0,6.5,15.0,0.0,*
23031A0314,0.0,11.5,0.0,13.5,25.0,0.0,*
23031A0315,0.0,14.5,0.0,13.5,28.0,0.0,*
23031A0317,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0318,0.0,11.5,0.0,10.5,22.0,0.0,*
23031A0319,6.02,20.5,6.67,19.5,40.0,6.34,*
23031A0320,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0321,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0322,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0324,6.68,20.5,0.0,16.5,37.0,0.0,*
23031A0325,0.0,17.5,6.95,19.5,37.0,0.0,*
23031A0326,0.0,8.5,0.0,10.5,19.0,0.0,*
23031A0327,0.0,17.5,0.0,7.5,25.0,0.0,*
23031A0328,6.22,20.5,0.0,16.5,37.0,0.0,*
23031A0329,0.0,14.5,0.0,13.5,28.0,0.0,*
23031A0330,0.0,8.5,0.0,7.5,16.0,0.0,*
23031A0331,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0332,0.0,14.5,0.0,10.5,25.0,0.0,*
23031A0401,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0402,7.12,20.5,7.44,19.5,40.0,7.28,
23031A0403,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0404,6.41,20.5,7.74,19.5,40.0,7.06,
23031A0405,7.29,20.5,0.0,16.5,37.0,0.0,*
23031A0406,7.15,20.5,8.0,19.5,40.0,7.56,
23031A0407,6.93,20.5,7.46,19.5,40.0,7.19,*
23031A0408,6.59,20.5,6.44,19.5,40.0,6.52,*
23031A0409,7.0,20.5,0.0,16.5,37.0,0.0,*
23031A0410,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0411,8.02,20.5,8.77,19.5,40.0,8.39,
23031A0412,7.07,20.5,7.03,19.5,40.0,7.05,
23031A0413,0.0,17.5,0.0,13.5,31.0,0.0,*
23031A0414,7.27,20.5,0.0,16.5,37.0,0.0,
23031A0415,8.44,20.5,8.79,19.5,40.0,8.61,
23031A0416,7.88,20.5,8.21,19.5,40.0,8.04,*
23031A0417,0.0,19.0,,,19.0,0.0,
23031A0418,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0419,6.41,20.5,0.0,16.5,37.0,0.0,
23031A0421,6.41,20.5,6.64,19.5,40.0,6.52,*
23031A0422,6.49,20.5,6.9,19.5,40.0,6.69,*
23031A0423,6.63,20.5,7.79,19.5,40.0,7.2,*
23031A0424,0.0,14.5,0.0,16.5,31.0,0.0,*
23031A0425,0.0,11.5,0.0,13.5,25.0,0.0,*
23031A0426,7.41,20.5,7.74,19.5,40.0,7.57,*
23031A0427,7.61,20.5,,,20.5,,
23031A0428,6.8,20.5,7.33,19.5,40.0,7.06,
23031A0429,7.68,20.5,7.85,19.5,40.0,7.76,
23031A0430,0.0,17.5,7.0,19.5,37.0,0.0,*
23031A0431,6.27,20.5,0.0,16.5,37.0,0.0,
23031A0432,6.41,20.5,6.31,19.5,40.0,6.36,*
23031A0433,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0434,7.54,20.5,7.85,19.5,40.0,7.69,
23031A0435,7.24,20.5,8.44,19.5,40.0,7.83,
23031A0437,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0438,0.0,17.5,7.38,19.5,37.0,0.0,*
23031A0439,7.68,20.5,7.44,19.5,40.0,7.56,*
23031A0440,7.73,20.5,8.0,19.5,40.0,7.86,
23031A0441,6.56,20.5,6.67,19.5,40.0,6.61,
23031A0442,7.12,20.5,7.54,19.5,40.0,7.32,*
23031A0443,7.15,20.5,6.82,19.5,40.0,6.99,*
23031A0444,7.98,20.5,8.77,19.5,40.0,8.37,
23031A0445,8.22,20.5,7.67,19.5,40.0,7.95,
23031A0446,6.73,20.5,7.18,19.5,40.0,6.95,*
23031A0447,8.46,20.5,7.97,19.5,40.0,8.22,*
23031A0448,7.0,20.5,7.38,19.5,40.0,7.19,*
23031A0449,6.22,20.5,7.36,19.5,40.0,6.78,
23031A0450,7.83,20.5,7.64,19.5,40.0,7.74,
23031A0451,0.0,17.5,6.49,19.5,37.0,0.0,*
23031A0452,0.0,17.5,7.92,19.5,37.0,0.0,*
23031A0453,6.41,20.5,0.0,16.5,37.0,0.0,*
23031A0454,7.34,20.5,7.82,19.5,40.0,7.57,
23031A0455,0.0,17.5,0.0,16.5,34.0,0.0,*
23031A0456,7.27,20.5,9.0,19.5,40.0,8.11,
23031A0457,8.46,20.5,8.97,19.5,40.0,8.71,
23031A0458,0.0,11.5,0.0,10.5,22.0,0.0,*
23031A0459,7.17,20.5,6.51,19.5,40.0,6.85,
23031A0501,8.26,19.5,7.71,20.5,40.0,7.98,
23031A0502,7.74,19.5,7.9,20.5,40.0,7.82,
23031A0503,8.85,19.5,0.0,17.5,37.0,0.0,
23031A0504,9.21,19.5,9.54,20.5,40.0,9.38,
23031A0505,7.62,19.5,7.9,20.5,40.0,7.76,
23031A0506,7.13,19.5,0.0,17.5,37.0,0.0,
23031A0507,7.9,19.5,0.0,17.5,37.0,0.0,
23031A0508,7.64,19.5,7.41,20.5,40.0,7.52,*
23031A0509,0.0,16.5,0.0,14.5,31.0,0.0,*
23031A0510,6.41,19.5,6.98,20.5,40.0,6.7,
23031A0511,7.64,19.5,0.0,14.5,34.0,0.0,
23031A0512,7.08,19.5,7.51,20.5,40.0,7.3,
23031A0513,7.62,19.5,0.0,17.5,37.0,0.0,
23031A0514,7.77,19.5,8.0,20.5,40.0,7.89,
23031A0515,8.56,19.5,8.15,20.5,40.0,8.35,
23031A0516,8.36,19.5,8.39,20.5,40.0,8.38,
23031A0517,8.18,19.5,0.0,17.5,37.0,0.0,
23031A0518,7.44,19.5,7.46,20.5,40.0,7.45,*
23031A0519,8.79,19.5,8.46,20.5,40.0,8.62,
23031A0520,7.31,19.5,0.0,11.5,31.0,0.0,*
23031A0521,7.56,19.5,7.51,20.5,40.0,7.53,
23031A0522,8.33,19.5,8.12,20.5,40.0,8.22,
23031A0523,6.79,19.5,0.0,14.5,34.0,0.0,
23031A0524,8.85,19.5,9.0,20.5,40.0,8.93,
23031A0525,8.51,19.5,7.76,20.5,40.0,8.13,
23031A0526,8.62,19.5,8.32,20.5,40.0,8.47,
23031A0527,7.31,19.5,7.49,20.5,40.0,7.4,
23031A0528,0.0,16.5,,,16.5,0.0,
23031A0529,8.74,19.5,8.34,20.5,40.0,8.54,
23031A0530,8.77,19.5,8.68,20.5,40.0,8.72,
23031A0531,8.62,19.5,8.59,20.5,40.0,8.6,
23031A0532,8.92,19.5,8.56,20.5,40.0,8.74,
23031A0533,7.38,19.5,0.0,14.5,34.0,0.0,
23031A0534,8.1,19.5,8.34,20.5,40.0,8.22,
23031A0535,7.08,19.5,6.83,20.5,40.0,6.95,
23031A0536,7.05,19.5,6.51,20.5,40.0,6.77,*
23031A0537,8.67,19.5,9.2,20.5,40.0,8.94,
23031A0538,8.05,19.5,8.41,20.5,40.0,8.23,
23031A0539,7.54,19.5,8.12,20.5,40.0,7.84,
23031A0540,7.72,19.5,7.02,20.5,40.0,7.36,*
23031A0541,8.82,19.5,8.68,20.5,40.0,8.75,
23031A0542,6.77,19.5,,,19.5,,
23031A0543,8.95,19.5,8.12,20.5,40.0,8.52,
23031A0544,8.41,19.5,8.05,20.5,40.0,8.23,
23031A0545,8.0,19.5,7.95,20.5,40.0,7.97,
23031A0546,8.28,19.5,0.0,17.5,37.0,0.0,
23031A0547,7.1,19.5,0.0,17.5,37.0,0.0,
23031A0548,9.26,19.5,8.39,20.5,40.0,8.81,
23031A0549,8.36,19.5,8.56,20.5,40.0,8.46,
23031A0550,7.49,19.5,0.0,14.5,34.0,0.0,*
23031A0551,6.87,19.5,7.17,20.5,40.0,7.02,
23031A0552,7.31,19.5,7.02,20.5,40.0,7.16,
23031A0553,9.26,19.5,8.59,20.5,40.0,8.92,
23031A0554,7.72,19.5,7.73,20.5,40.0,7.73,`;

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
