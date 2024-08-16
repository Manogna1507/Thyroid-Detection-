import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css'; // Import CSS file

const HealthReport = () => {
    const location = useLocation();
    const prediction = location.state?.prediction;

    let message;
    let resultClass;

    if (Array.isArray(prediction) && prediction.length > 0) {
        switch (prediction[0]) {
            case 'negative':
                message = 'You have a negative thyroid condition.';
                resultClass = 'negative';
                break;
            case 'compensated hypothyroid':
                message = 'You have been diagnosed with compensated hypothyroidism. Follow-up with your doctor for monitoring and management.';
                resultClass = 'positive';
                break;
            case 'primary hypothyroid':
                message = 'You have been diagnosed with primary hypothyroidism. Please consult a healthcare professional for further evaluation and treatment.';
                resultClass = 'positive';
                break;
            case 'secondary hypothyroid':
                message = 'You have been diagnosed with secondary hypothyroidism. It is important to seek medical advice for proper management.';
                resultClass = 'positive';
                break;
            default:
                message = 'Based on the test results, there are no indications of hypothyroidism. However, it is recommended to monitor your thyroid health regularly.';
                resultClass = 'unknown';
        }
    } else {
        message = "An unexpected result was obtained. Please consult a healthcare professional for further evaluation.";
        resultClass = 'unknown';
    }

    return (
        <div className="health-report">
            <h2 className="report-title">Thyroid Health Report</h2>
            <p>Prediction Result: <span className="prediction">{prediction}</span></p>
            <p className={`report-text ${resultClass}`}>{message}</p>
        </div>
    );
};

export default HealthReport;
