import express, { json } from 'express';
import { createConnection } from 'mysql';

const app = express();
const port = 3000;

// Establish database connection
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gems@2022',
  database: 'pathology'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Middleware to parse JSON bodies
app.use(json());

// Handle form submissions for adding pathologists
app.post('/pathologist', (req, res) => {
  const { pathologistName, type, contactNo } = req.body;
  const query = 'INSERT INTO pathologist (name, type, contact_no) VALUES (?, ?, ?)';
  db.query(query, [pathologistName, type, contactNo], (err, result) => {
    if (err) {
      console.error('Error adding pathologist:', err);
      return res.status(500).json({ error: 'Error adding pathologist' });
    }
    console.log('Pathologist added successfully');
    res.status(200).json({ message: 'Pathologist added successfully' });
  });
});

// Handle form submissions for adding patients
app.post('/patient', (req, res) => {
  const { patientName, gender, age, mobileNumber, address } = req.body;
  const query = 'INSERT INTO patient (name, gender, age, mobile_number, address) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [patientName, gender, age, mobileNumber, address], (err, result) => {
    if (err) {
      console.error('Error adding patient:', err);
      return res.status(500).json({ error: 'Error adding patient' });
    }
    console.log('Patient added successfully');
    res.status(200).json({ message: 'Patient added successfully' });
  });
});

// Handle form submissions for adding tests
app.post('/test', (req, res) => {
  const { testName, price, date, pathologistId, patientId, testResult } = req.body;
  const query = 'INSERT INTO test (test_name, price, date, pathologist_id, patient_id, test_result) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [testName, price, date, pathologistId, patientId, testResult], (err, result) => {
    if (err) {
      console.error('Error adding test:', err);
      return res.status(500).json({ error: 'Error adding test' });
    }
    console.log('Test added successfully');
    res.status(200).json({ message: 'Test added successfully' });
  });
});

// Handle form submissions for adding doctors
app.post('/doctor', (req, res) => {
  const { docName, specialist, docId, docContactNumber } = req.body;
  const query = 'INSERT INTO doctor (name, specialist, doc_id, contact_number) VALUES (?, ?, ?, ?)';
  db.query(query, [docName, specialist, docId, docContactNumber], (err, result) => {
    if (err) {
      console.error('Error adding doctor:', err);
      return res.status(500).json({ error: 'Error adding doctor' });
    }
    console.log('Doctor added successfully');
    res.status(200).json({ message: 'Doctor added successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(Server is running on port ${port});
});