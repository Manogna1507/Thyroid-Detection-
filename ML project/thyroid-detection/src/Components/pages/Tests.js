// Test.jsx
import React, { useState } from 'react';
import './Test.css'; 
import { useNavigate } from 'react-router-dom';

const Tests = () => {
  const [thyroidResults, setThyroidResults] = useState({
    sex: '',
    age: '',
    pregnant: false,
    tsh: '',
    t4: '',
    t3: '',
    t4u: '',
    onThyroxine: false,
    onAntithyroidMedication: false,
    thyroidSurgery: false,
    lithium: false,
    goitre: false,
    tumor: false,
    fti: '',
  });
  const [prediction, setPrediction] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setThyroidResults((prevResults) => ({ ...prevResults, [name]: val }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', thyroidResults);

      const formattedData = {
        ...thyroidResults,
        pregnant: thyroidResults.pregnant.toString(),
        onThyroxine: thyroidResults.onThyroxine.toString(),
        onAntithyroidMedication: thyroidResults.onAntithyroidMedication.toString(),
        thyroidSurgery: thyroidResults.thyroidSurgery.toString(),
        lithium: thyroidResults.lithium.toString(),
        goitre: thyroidResults.goitre.toString(),
        tumor: thyroidResults.tumor.toString(),
      };

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData),
        mode: 'cors' 
      });
      const data = await response.json();
      console.log('Prediction:', data.prediction);
      setPrediction(data.prediction);
      setMessage('Prediction received successfully!');
      navigate('/results', { state: { prediction: data.prediction } });

    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred. Please try again later.');
    }
  };
  

  return (
    <div className="thyroid-form-container tests-page">
      <h2>Enter Thyroid Test Results</h2>
      <form onSubmit={handleSubmit} className="thyroid-form">
      <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={thyroidResults.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <select
            name="sex"
            value={thyroidResults.sex}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>On Thyroxine:</label>
          <div>
            <label>
              <input
                type="radio"
                name="onThyroxine"
                value="true"
                checked={thyroidResults.onThyroxine}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="onThyroxine"
                value="false"
                checked={!thyroidResults.onThyroxine}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>On Antithyroid Medication:</label>
          <div>
            <label>
              <input
                type="radio"
                name="onAntithyroidMedication"
                value="true"
                checked={thyroidResults.onAntithyroidMedication}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="onAntithyroidMedication"
                value="false"
                checked={!thyroidResults.onAntithyroidMedication}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>        
        <div className="form-group">
          <label>Pregnant:</label>
          <input
            type="checkbox"
            name="pregnant"
            checked={thyroidResults.pregnant}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Thyroid Surgery:</label>
          <div>
            <label>
              <input
                type="radio"
                name="thyroidSurgery"
                value="true"
                checked={thyroidResults.thyroidSurgery}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="thyroidSurgery"
                value="false"
                checked={!thyroidResults.thyroidSurgery}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Lithium:</label>
          <div>
            <label>
              <input
                type="radio"
                name="lithium"
                value="true"
                checked={thyroidResults.lithium}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="lithium"
                value="false"
                checked={!thyroidResults.lithium}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Goitre:</label>
          <div>
            <label>
              <input
                type="radio"
                name="goitre"
                value="true"
                checked={thyroidResults.goitre}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="goitre"
                value="false"
                checked={!thyroidResults.goitre}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>


        <div className="form-group">
          <label>Tumor:</label>
          <div>
            <label>
              <input
                type="radio"
                name="tumor"
                value="true"
                checked={thyroidResults.tumor}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="tumor"
                value="false"
                checked={!thyroidResults.tumor}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>


        <div className="form-group">
          <label>TSH:</label>
          <input
            type="text"
            name="tsh"
            value={thyroidResults.tsh}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T4:</label>
          <input
            type="text"
            name="t4"
            value={thyroidResults.t4}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T3:</label>
          <input
            type="text"
            name="t3"
            value={thyroidResults.t3}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T4U:</label>
          <input
            type="text"
            name="t4u"
            value={thyroidResults.t4u}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>FTI:</label>
          <input
            type="text"
            name="fti"
            value={thyroidResults.fti}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" buttonStyle="btn--primary" 
        buttonSize="btn--large">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tests;
