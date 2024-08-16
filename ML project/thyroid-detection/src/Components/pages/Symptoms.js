// ThyroidInfo.js
import React from 'react';
import './Symptoms.css';

const Symptoms = () => {
  const infoData = {
    hypothyroidism: {
      description:
        'Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones (T3 and T4) to meet the body’s needs.',
      causes: [
        'Autoimmune conditions such as Hashimotos thyroiditis',
        'Surgical removal of the thyroid',
        'Radiation therapy',
        'Certain medications',
        'Iodine deficiency',
      ],
      symptoms: [
        'Fatigue and weakness',
        'Weight gain',
        'Sensitivity to cold',
        'Dry skin and hair',
        'Constipation',
        'Muscle aches and stiffness',
        'Depression',
        'Menstrual irregularities',
      ],
    },
    hyperthyroidism: {
      description:
        'Hyperthyroidism is a condition where the thyroid gland produces an excess of thyroid hormones (T3 and T4).',
      symptoms: [
        'Weight loss',
        'Rapid heartbeat',
        'Anxiety',
        'Irritability',
        'Sensitivity to heat',
        'Increased sweating',
        'Tremors',
        'Difficulty sleeping',
      ],
    },
    hypothyroidTypes: [
      {
        type: 'Primary Hypothyroidism',
        description:
          'Occurs due to a problem directly within the thyroid gland itself. The thyroid gland fails to produce an adequate amount of thyroid hormones (T3 and T4), leading to a decrease in hormone levels in the blood.',
        causes: [
          'Autoimmune conditions such as Hashimoto’s thyroiditis',
          'Surgical removal of the thyroid',
          'Radiation therapy',
          'Certain medications',
          'Iodine deficiency',
        ],
      },
      {
        type: 'Secondary Hypothyroidism',
        description:
          'Arises from issues in the pituitary gland or hypothalamus, which are responsible for signaling the thyroid to produce hormones.',
        causes: ['Tumors', 'Radiation', 'Other disorders'],
      },
      {
        type: 'Compensated Hypothyroidism',
        description:
          'A state where the thyroid gland is working harder to produce enough thyroid hormones due to increased demand or mild dysfunction.',
      },
    ],
    hormoneLevels: {
      tshPregnancy: [
        { trimester: '1st', range: '0.6-3.4 mU/L' },
        { trimester: '2nd', range: '0.37-3.6 mU/L' },
        { trimester: '3rd', range: '0.38-4.0 mU/L' },
      ],
      tshChildren: { range: '0.55-5.31 mU/L' },
      tshWomen: { range: '0.5-5.0 mIU/L' },
      tshMen: { range: '0.4-4.0 mIU/L' },
      t3PregnantWomen: {
        total: { range: '60-180 ng/dL or 0.9-2.8 nmol/L' },
        free: { range: '130-450 pg/dL or 2.0-7.0 pmol/L' },
      },
      t3NonPregnantWomen: {
        total: { range: '75-195 ng/dl' },
        free: { range: '0.2-0.5 ng/dl or 2.3-4.2' },
      },
      t3Men: {
        total: { range: '71-180 ng/dL' },
        free: { range: '2.0-4.4 pg/mL' },
      },
      t4UWomen: { range: '5 to 12 microgram/dL' },
      t4UMen: { range: '1.4 to 29.2 micro g/l' },
      t4UPregnantWomen: [
        {
          trimester: '1st',
          range: '0.95-1.53 ng/dL or 84-130 nmol/L or 6.5-10.1 microgram/dL',
        },
        {
          trimester: '2nd',
          range: '0.87-1.45 ng/dL or 7.5-10.3 microgram/dL or 97-133 nmol/L',
        },
        {
          trimester: '3rd',
          range: '81-125 nmol/L or 6.3-9.7 microgram/dL',
        },
      ],
      tt4Men: { range: '0.8-1.8 ng/dL or 5-12 mcg/dL' },
      tt4Women: {
        range: '4.5-12 microgram/dL',
      },
      tt4PregnantWomen: [
        {
          trimester: '1st',
          range: '0.95-1.53 ng/dL or 84-130 nmol/L or 6.5-10.1 microgram/dL',
        },
        {
          trimester: '2nd',
          range: '0.87-1.45 ng/dL or 7.5-10.3 microgram/dL or 97-133 nmol/L',
        },
        {
          trimester: '3rd',
          range: '6.3-9.7 microgram/dL or 81-125 nmol/L',
        },
      ],
    },
  };

  return (
    <div className="thyroid-info-container">
      <h2>Thyroid</h2>
      <div className="thyroid-description">
      <p>
      The thyroid gland is a small, butterfly-shaped gland located in the front of the neck, just below the Adam's apple. Despite its size, it plays a crucial role in regulating various bodily functions by producing hormones that influence metabolism, growth, and development. 
      The two main hormones produced by the thyroid gland are thyroxine (T4) and tri-iodothyronine (T3). The thyroid gland's function is controlled by the pituitary gland, which produces thyroid-stimulating hormone (TSH). TSH stimulates the thyroid gland to release T4 and T3. 
      </p>
      <img src="symptom.jpg" alt="Thyroid Gland" className="thyroid-image" />
      </div>
      <p>
      When the levels of T4 and T3 are low, the pituitary gland releases more TSH to stimulate the thyroid gland, and when the levels are high, less TSH is released to reduce thyroid hormone production, thus maintaining a balance.
      Issues with the thyroid gland can lead to conditions like hypothyroidism and hyperthyroidism, causing an imbalance in hormone levels and subsequently affecting various bodily functions.
      </p>
      <h3>Hypothyroidism</h3>
      <p>{infoData.hypothyroidism.description}</p>
      <h4>Causes</h4>
      <ul>
        {infoData.hypothyroidism.causes.map((cause, index) => (
          <li key={index}>{cause}</li>
        ))}
      </ul>
      <h4>Symptoms</h4>
      <div className="thyroid-description">
      <ul>
        {infoData.hypothyroidism.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
      <img src="allsymptoms.jpg" alt="Thyroid Gland" className="image"/>
      </div>
      <h4>Diagnosis</h4>
      <p>
      Diagnosis is often made through blood tests that measure levels of thyroid hormones (T3 and T4) and thyroid-stimulating hormone (TSH). Treatment for hypothyroidism typically involves synthetic thyroid hormone replacement therapy (levothyroxine) to restore hormone levels to normal and alleviate symptoms. Regular monitoring and adjustments to medication doses may be necessary to ensure proper hormone levels and symptom management.
      </p>
      <h3>Hyperthyroidism</h3>
      <p>{infoData.hyperthyroidism.description}</p>
      <h4>Symptoms</h4>
      <ul>
        {infoData.hyperthyroidism.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
      <h3>Types of Hypothyroidism</h3>
      <ul>
        {infoData.hypothyroidTypes.map((type, index) => (
          <li key={index}>
            <strong>{type.type}</strong> - {type.description}
            {type.causes && (
              <ul>
                {type.causes.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <h3>Hormone Levels</h3>
      <h4>TSH Levels</h4>
      <ul>
        <li>Pregnancy: {infoData.hormoneLevels.tshPregnancy.map((item, index) => (
          <p key={index}>{item.trimester}: {item.range}</p>
        ))}</li>
        <li>Children: {infoData.hormoneLevels.tshChildren.range}</li>
        <li>Non-pregnant Women: {infoData.hormoneLevels.tshWomen.range}</li>
        <li>Men: {infoData.hormoneLevels.tshMen.range}</li>
      </ul>
      <h4>T3 Levels</h4>
      <ul>
        <li>Pregnant Women: {JSON.stringify(infoData.hormoneLevels.t3PregnantWomen)}</li>
        <li>Non-pregnant Women: {JSON.stringify(infoData.hormoneLevels.t3NonPregnantWomen)}</li>
        <li>Men: {JSON.stringify(infoData.hormoneLevels.t3Men)}</li>
      </ul>
      <h4>T4U Levels</h4>
      <ul>
        <li>Women: {infoData.hormoneLevels.t4UWomen.range}</li>
        <li>Men: {infoData.hormoneLevels.t4UMen.range}</li>
      </ul>
      <h4>TT4 or T4 Levels</h4>
      <ul>
        <li>Men: {infoData.hormoneLevels.tt4Men.range}</li>
        <li>Women: {infoData.hormoneLevels.tt4Women.range}</li>
        <li>Pregnant Women: {JSON.stringify(infoData.hormoneLevels.tt4PregnantWomen)}</li>
      </ul>
    </div>
  );
} 
export default Symptoms;

