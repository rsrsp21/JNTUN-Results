var csvData = `ID,1-1,Credits_1-1,Total Credits,CGPA,Supplementary Appearances
24031A0101,0,8.5,8.5,0,
24031A0102,0,4,4,0,
24031A0103,0,17.5,17.5,0,
24031A0104,5.78,20.5,20.5,5.78,
24031A0105,6.71,20.5,20.5,6.71,
24031A0106,6.63,20.5,20.5,6.63,
24031A0108,0,11.5,11.5,0,
24031A0109,0,5.5,5.5,0,
24031A0110,0,17.5,17.5,0,
24031A0111,0,17.5,17.5,0,
24031A0112,7.49,20.5,20.5,7.49,
24031A0113,0,5.5,5.5,0,
24031A0115,0,8.5,8.5,0,
24031A0116,0,17.5,17.5,0,
24031A0117,0,17.5,17.5,0,
24031A0118,0,11.5,11.5,0,
24031A0119,0,17.5,17.5,0,
24031A0120,0,8.5,8.5,0,
24031A0121,0,17.5,17.5,0,
24031A0122,0,5.5,5.5,0,
24031A0123,0,19,19,0,
24031A0125,0,4,4,0,
24031A0126,0,11.5,11.5,0,
24031A0128,0,17.5,17.5,0,
24031A0129,0,17.5,17.5,0,
24031A0130,0,17.5,17.5,0,
24031A0131,0,14.5,14.5,0,
24031A0132,0,17.5,17.5,0,
24031A0133,0,17.5,17.5,0,
24031A0134,0,8.5,8.5,0,
24031A0135,0,14.5,14.5,0,
24031A0136,7.32,20.5,20.5,7.32,
24031A0137,6.49,20.5,20.5,6.49,
24031A0201,0,16.5,16.5,0,
24031A0202,0,7.5,7.5,0,
24031A0203,7.1,19.5,19.5,7.1,
24031A0204,0,13.5,13.5,0,
24031A0205,0,16.5,16.5,0,
24031A0206,0,13.5,13.5,0,
24031A0207,6.92,19.5,19.5,6.92,
24031A0208,0,16.5,16.5,0,
24031A0209,6.56,19.5,19.5,6.56,
24031A0210,0,13.5,13.5,0,
24031A0211,0,10.5,10.5,0,
24031A0212,0,4.5,4.5,0,
24031A0213,6.36,19.5,19.5,6.36,
24031A0214,0,13.5,13.5,0,
24031A0215,6.79,19.5,19.5,6.79,
24031A0216,6.44,19.5,19.5,6.44,
24031A0217,0,3.5,3.5,0,
24031A0218,0,13.5,13.5,0,
24031A0219,6.46,19.5,19.5,6.46,
24031A0220,7.44,19.5,19.5,7.44,
24031A0221,0,16.5,16.5,0,
24031A0222,7.23,19.5,19.5,7.23,
24031A0223,7.97,19.5,19.5,7.97,
24031A0224,0,16.5,16.5,0,
24031A0225,0,15.5,15.5,0,
24031A0226,0,16.5,16.5,0,
24031A0227,0,16.5,16.5,0,
24031A0228,6.41,19.5,19.5,6.41,
24031A0229,7.74,19.5,19.5,7.74,
24031A0230,7.59,19.5,19.5,7.59,
24031A0231,6.95,19.5,19.5,6.95,
24031A0232,0,10.5,10.5,0,
24031A0234,5.9,19.5,19.5,5.9,
24031A0235,0,16.5,16.5,0,
24031A0236,7.82,19.5,19.5,7.82,
24031A0237,0,11.5,11.5,0,
24031A0239,6.77,19.5,19.5,6.77,
24031A0240,7.54,19.5,19.5,7.54,
24031A0241,8.05,19.5,19.5,8.05,
24031A0242,0,16.5,16.5,0,
24031A0243,0,16.5,16.5,0,
24031A0244,0,13.5,13.5,0,
24031A0245,7.62,19.5,19.5,7.62,
24031A0246,0,18,18,0,
24031A0247,0,16.5,16.5,0,
24031A0248,0,13.5,13.5,0,
24031A0249,0,10.5,10.5,0,
24031A0250,7.95,19.5,19.5,7.95,
24031A0251,0,11.5,11.5,0,
24031A0252,6.82,19.5,19.5,6.82,
24031A0254,0,10.5,10.5,0,
24031A0255,0,16.5,16.5,0,
24031A0256,6.85,19.5,19.5,6.85,
24031A0302,7.07,20.5,20.5,7.07,
24031A0303,0,8.5,8.5,0,
24031A0304,6.93,20.5,20.5,6.93,
24031A0305,0,17.5,17.5,0,
24031A0306,0,17.5,17.5,0,
24031A0307,6.34,20.5,20.5,6.34,
24031A0308,0,11.5,11.5,0,
24031A0309,0,8.5,8.5,0,
24031A0310,0,14.5,14.5,0,
24031A0311,7.9,20.5,20.5,7.9,
24031A0312,6.73,20.5,20.5,6.73,
24031A0313,0,11.5,11.5,0,
24031A0314,0,14.5,14.5,0,
24031A0315,6.34,20.5,20.5,6.34,
24031A0316,0,17.5,17.5,0,
24031A0317,0,5.5,5.5,0,
24031A0318,0,14.5,14.5,0,
24031A0319,0,14.5,14.5,0,
24031A0320,0,11.5,11.5,0,
24031A0321,0,17.5,17.5,0,
24031A0322,0,17.5,17.5,0,
24031A0323,0,8.5,8.5,0,
24031A0324,6.39,20.5,20.5,6.39,
24031A0325,0,17.5,17.5,0,
24031A0326,0,8.5,8.5,0,
24031A0327,0,8.5,8.5,0,
24031A0328,0,14.5,14.5,0,
24031A0329,0,5.5,5.5,0,
24031A0330,0,17.5,17.5,0,
24031A0331,0,14.5,14.5,0,
24031A0332,6.07,20.5,20.5,6.07,
24031A0334,6.59,20.5,20.5,6.59,
24031A0335,5.44,20.5,20.5,5.44,
24031A0336,0,17.5,17.5,0,
24031A0337,0,17.5,17.5,0,
24031A0338,0,14.5,14.5,0,
24031A0341,5.88,20.5,20.5,5.88,
24031A0342,0,11.5,11.5,0,
24031A0343,0,5.5,5.5,0,
24031A0344,0,5.5,5.5,0,
24031A0345,6.41,20.5,20.5,6.41,
24031A0346,7.17,20.5,20.5,7.17,
24031A0347,6.1,20.5,20.5,6.1,
24031A0401,0,14.5,14.5,0,
24031A0402,7.39,20.5,20.5,7.39,
24031A0403,0,14.5,14.5,0,
24031A0404,7.02,20.5,20.5,7.02,
24031A0405,8.66,20.5,20.5,8.66,
24031A0406,0,17.5,17.5,0,
24031A0407,0,17.5,17.5,0,
24031A0408,7.41,20.5,20.5,7.41,
24031A0409,7.34,20.5,20.5,7.34,
24031A0410,0,17.5,17.5,0,
24031A0411,8.39,20.5,20.5,8.39,
24031A0412,8.22,20.5,20.5,8.22,
24031A0413,7.93,20.5,20.5,7.93,
24031A0414,0,17.5,17.5,0,
24031A0415,7.05,20.5,20.5,7.05,
24031A0416,8.41,20.5,20.5,8.41,
24031A0417,0,14.5,14.5,0,
24031A0418,7.29,20.5,20.5,7.29,
24031A0419,8.54,20.5,20.5,8.54,
24031A0420,7.88,20.5,20.5,7.88,
24031A0421,8.1,20.5,20.5,8.1,
24031A0422,0,16,16,0,
24031A0423,0,11.5,11.5,0,
24031A0424,0,7,7,0,
24031A0425,0,17.5,17.5,0,
24031A0426,7.39,20.5,20.5,7.39,
24031A0427,0,17.5,17.5,0,
24031A0428,6.93,20.5,20.5,6.93,
24031A0429,8.02,20.5,20.5,8.02,
24031A0430,0,11.5,11.5,0,
24031A0431,0,17.5,17.5,0,
24031A0432,7.71,20.5,20.5,7.71,
24031A0433,0,17.5,17.5,0,
24031A0434,8.54,20.5,20.5,8.54,
24031A0435,0,17.5,17.5,0,
24031A0436,0,5.5,5.5,0,
24031A0437,0,17.5,17.5,0,
24031A0438,9.22,20.5,20.5,9.22,
24031A0439,7.17,20.5,20.5,7.17,
24031A0440,6.98,20.5,20.5,6.98,
24031A0441,9.29,20.5,20.5,9.29,
24031A0442,7.05,20.5,20.5,7.05,
24031A0443,0,17.5,17.5,0,
24031A0444,0,14.5,14.5,0,
24031A0445,7.9,20.5,20.5,7.9,
24031A0446,8.22,20.5,20.5,8.22,
24031A0447,7.37,20.5,20.5,7.37,
24031A0448,6.85,20.5,20.5,6.85,
24031A0449,8.93,20.5,20.5,8.93,
24031A0450,0,17.5,17.5,0,
24031A0451,0,17.5,17.5,0,
24031A0452,0,17.5,17.5,0,
24031A0453,0,17.5,17.5,0,
24031A0454,8,20.5,20.5,8,
24031A0455,0,8.5,8.5,0,
24031A0456,7.15,20.5,20.5,7.15,
24031A0457,8.8,20.5,20.5,8.8,
24031A0458,0,17.5,17.5,0,
24031A0459,7.29,20.5,20.5,7.29,
24031A0501,6.44,19.5,19.5,6.44,
24031A0502,0,13.5,13.5,0,
24031A0503,0,12.5,12.5,0,
24031A0504,7.77,19.5,19.5,7.77,
24031A0505,7.31,19.5,19.5,7.31,
24031A0506,0,16.5,16.5,0,
24031A0507,0,16.5,16.5,0,
24031A0508,7.46,19.5,19.5,7.46,
24031A0509,7.69,19.5,19.5,7.69,
24031A0510,7.87,19.5,19.5,7.87,
24031A0511,0,16.5,16.5,0,
24031A0512,7.49,19.5,19.5,7.49,
24031A0513,8.33,19.5,19.5,8.33,
24031A0514,7.79,19.5,19.5,7.79,
24031A0515,8.49,19.5,19.5,8.49,
24031A0517,7.59,19.5,19.5,7.59,
24031A0518,7.97,19.5,19.5,7.97,
24031A0519,0,16.5,16.5,0,
24031A0520,0,16.5,16.5,0,
24031A0521,8.87,19.5,19.5,8.87,
24031A0522,7.36,19.5,19.5,7.36,
24031A0523,7.23,19.5,19.5,7.23,
24031A0524,0,16.5,16.5,0,
24031A0525,0,16.5,16.5,0,
24031A0526,7.87,19.5,19.5,7.87,
24031A0527,0,16.5,16.5,0,
24031A0528,0,16.5,16.5,0,
24031A0529,0,0.5,0.5,0,
24031A0530,0,0.5,0.5,0,
24031A0531,7.85,19.5,19.5,7.85,
24031A0534,0,16.5,16.5,0,
24031A0535,8,19.5,19.5,8,
24031A0536,8,19.5,19.5,8,
24031A0537,7.28,19.5,19.5,7.28,
24031A0538,0,13.5,13.5,0,
24031A0539,8.05,19.5,19.5,8.05,
24031A0540,8.05,19.5,19.5,8.05,
24031A0541,7.77,19.5,19.5,7.77,
24031A0542,0,16.5,16.5,0,
24031A0543,0,10.5,10.5,0,
24031A0544,8.36,19.5,19.5,8.36,
24031A0545,0,16.5,16.5,0,
24031A0546,0,16.5,16.5,0,
24031A0547,8.56,19.5,19.5,8.56,
24031A0548,0,16.5,16.5,0,
24031A0549,9.05,19.5,19.5,9.05,
24031A0550,8.38,19.5,19.5,8.38,
24031A0551,6.97,19.5,19.5,6.97,
24031A0552,7.95,19.5,19.5,7.95,
24031A0553,7.23,19.5,19.5,7.23,
24031A0554,7.95,19.5,19.5,7.95,`;

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
