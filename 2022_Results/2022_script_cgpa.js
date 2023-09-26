var csvData = `ID,1-1,CGPA,Supplementary Appearances
22031A0101,0,0,
22031A0102,0,0,
22031A0104,0,0,
22031A0105,0,0,
22031A0106,0,0,
22031A0107,5.92,5.92,
22031A0108,0,0,
22031A0109,0,0,
22031A0110,0,0,
22031A0112,0,0,
22031A0113,0,0,
22031A0114,0,0,
22031A0115,0,0,
22031A0116,0,0,
22031A0117,0,0,
22031A0201,6.31,6.31,
22031A0202,0,0,
22031A0203,0,0,
22031A0204,0,0,
22031A0205,0,0,
22031A0206,5.77,5.77,
22031A0207,0,0,
22031A0208,0,0,
22031A0209,0,0,
22031A0210,0,0,
22031A0211,0,0,
22031A0212,5.92,5.92,
22031A0213,6.08,6.08,
22031A0214,6.69,6.69,
22031A0215,0,0,
22031A0216,0,0,
22031A0217,6.92,6.92,
22031A0218,8,8,
22031A0219,0,0,
22031A0220,7.08,7.08,
22031A0221,0,0,
22031A0222,0,0,
22031A0223,0,0,
22031A0224,0,0,
22031A0225,7.62,7.62,
22031A0226,7.31,7.31,
22031A0227,0,0,
22031A0228,6.15,6.15,
22031A0229,0,0,
22031A0301,6.77,6.77,
22031A0302,0,0,
22031A0303,0,0,
22031A0304,0,0,
22031A0305,0,0,
22031A0306,0,0,
22031A0307,7.77,7.77,
22031A0308,0,0,
22031A0309,0,0,
22031A0310,0,0,
22031A0311,0,0,
22031A0312,0,0,
22031A0313,6.54,6.54,
22031A0401,0,0,
22031A0402,0,0,
22031A0403,0,0,
22031A0404,0,0,
22031A0405,0,0,
22031A0406,8.08,8.08,
22031A0407,0,0,
22031A0408,8.15,8.15,
22031A0409,6.23,6.23,
22031A0410,7.77,7.77,
22031A0411,0,0,
22031A0412,6.92,6.92,
22031A0413,0,0,
22031A0415,0,0,
22031A0416,7.38,7.38,
22031A0417,0,0,
22031A0418,0,0,
22031A0419,0,0,
22031A0420,7.38,7.38,
22031A0421,7.54,7.54,
22031A0422,0,0,
22031A0423,0,0,
22031A0424,0,0,
22031A0425,0,0,
22031A0426,0,0,
22031A0427,0,0,
22031A0428,6.62,6.62,
22031A0429,0,0,
22031A0430,6.08,6.08,
22031A0431,0,0,
22031A0432,0,0,
22031A0433,6.46,6.46,
22031A0434,0,0,
22031A0435,0,0,
22031A0436,0,0,
22031A0437,7.23,7.23,
22031A0438,7.08,7.08,
22031A0439,0,0,
22031A0440,0,0,
22031A0441,0,0,
22031A0442,0,0,
22031A0443,0,0,
22031A0444,7.69,7.69,
22031A0445,7.54,7.54,
22031A0446,7.92,7.92,
22031A0447,6.77,6.77,
22031A0448,0,0,
22031A0449,0,0,
22031A0450,7.31,7.31,
22031A0451,0,0,
22031A0452,5.69,5.69,
22031A0453,7.92,7.92,
22031A0454,0,0,
22031A0455,6.46,6.46,
22031A0456,0,0,
22031A0457,7.08,7.08,
22031A0458,0,0,
22031A0460,0,0,
22031A0501,0,0,
22031A0502,7.23,7.23,
22031A0503,6.62,6.62,
22031A0504,8.15,8.15,
22031A0505,7.85,7.85,
22031A0506,9.08,9.08,
22031A0507,7.77,7.77,
22031A0508,0,0,
22031A0509,7.08,7.08,
22031A0510,7.92,7.92,
22031A0511,0,0,
22031A0512,0,0,
22031A0513,8.38,8.38,
22031A0514,0,0,
22031A0515,0,0,
22031A0516,0,0,
22031A0517,8.08,8.08,
22031A0518,7.62,7.62,
22031A0519,0,0,
22031A0520,7.46,7.46,
22031A0521,7.85,7.85,
22031A0522,0,0,
22031A0523,0,0,
22031A0524,8.31,8.31,
22031A0525,7.15,7.15,
22031A0526,0,0,
22031A0527,8.62,8.62,
22031A0528,7.77,7.77,
22031A0529,7.85,7.85,
22031A0530,7.92,7.92,
22031A0531,7.46,7.46,
22031A0532,7.15,7.15,
22031A0533,0,0,
22031A0534,8.15,8.15,
22031A0535,8.31,8.31,
22031A0536,8.54,8.54,
22031A0537,8.23,8.23,
22031A0538,7.46,7.46,
22031A0539,8.23,8.23,
22031A0540,0,0,
22031A0541,0,0,
22031A0542,0,0,
22031A0543,8.15,8.15,
22031A0544,7.85,7.85,
22031A0545,7.15,7.15,
22031A0546,8.92,8.92,
22031A0547,9,9,
22031A0548,8.69,8.69,
22031A0549,0,0,
22031A0550,0,0,
22031A0551,7.69,7.69,
22031A0552,7.62,7.62,
22031A0553,7.46,7.46,
22031A0554,8.15,8.15,
22031A0555,0,0,
22031A0556,0,0,
22031A0557,0,0,
22031A0558,0,0,`;

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

var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

  var keys = Object.keys(studentData[0]);
  keys.forEach(function (key) {
    if (key !== 'ID' && key !== 'CGPA') {
      var row = document.createElement('tr');
      var labelCell = document.createElement('td');
      labelCell.textContent = key;
      labelCell.style.fontWeight = 'bold';
      row.appendChild(labelCell);

      var valueCell = document.createElement('td');
      var value = studentData[0][key] === '' ? 'NA' : studentData[0][key];
      if (key === 'Supplementary Appearances') {
        labelCell.style.color = 'blue';
        valueCell.style.fontWeight = 'bold';
        valueCell.style.color = 'black';
      }
      valueCell.textContent = value;
      row.appendChild(valueCell);

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

  if (cgpa >= 7.75 && (supplementaryAppearances === 'NA' || supplementaryAppearances === '')) {
    message = 'First Class with Distinction';
  } else if (cgpa >= 6.75) {
    message = 'First Class';
  } else if (cgpa >= 5.75) {
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
