import React,{useState,useEffect} from 'react';
import ChatBot from 'react-simple-chatbot';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState([]);

  

  const steps = [
    {
      id: 'welcome',
      message: 'Welcome to the Thyroid Symptoms Checker. Do you want to start the check?',
      trigger: 'startCheck',
    },
    {
      id: 'startCheck',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'selectGender' },
        { value: 'no', label: 'No', end: true },
      ],
    },
    {
      id: 'selectGender',
      options: [
        { value: 'male', label: 'Male', trigger: 'maleSymptoms' },
        { value: 'female', label: 'Female', trigger: 'femaleSymptoms' },
      ],
    },
    {
      id: 'maleSymptoms',
      message: 'Do you often experience a hoarse voice or discomfort in your throat?',
      trigger: 'Response',
    },
    {
      id: 'Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'generalQuestions' },
        { value: 'no', label: 'No', trigger: 'generalQuestions' },
      ],
    },
    {
      id: 'femaleSymptoms',
      message: 'Are you pregnant?',
      trigger: 'Response1',
      // Include questions specific to males
    },
    {
      id: 'Response1',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'femalesymptoms2' },
        { value: 'no', label: 'No', trigger: 'femalesymptoms2' },
      ],
    },
    {
      id: 'femalesymptoms2',
      message: 'Have you noticed any changes in the flow ',
      trigger: 'Response2',
      // Include questions specific to males
    },
    {
      id: 'Response2',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'generalQuestions' },
        { value: 'no', label: 'No', trigger: 'generalQuestions' },
      ],
    },
    {
      id: 'generalQuestions',
      message: 'Let\'s start with some general questions.',
      trigger: 'symptom1',
    },
    {
      id: 'symptom1',
      message: 'Do you often feel tired or fatigued?',
      trigger: 'symptom1Response',
    },
    {
      id: 'symptom1Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom3' },
        { value: 'no', label: 'No', trigger: 'symptom3' },
      ],
    },
    // Add more steps for other symptoms...
    {
      id: 'symptom3',
      message: 'Have you noticed any unexplained weight gain or difficulty losing weight?',
      trigger: 'symptom3Response',
    },
    {
      id: 'symptom3Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom4' },
        { value: 'no', label: 'No', trigger: 'symptom4' },
      ],
    },
    {
      id: 'symptom4',
      message: 'Have you been feeling more tired than usual lately, even after getting enough sleep?',
      trigger: 'symptom4Response',
    },
    {
      id: 'symptom4Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom5' },
        { value: 'no', label: 'No', trigger: 'symptom5' },
      ],
    },
    {
      id: 'symptom5',
      message: 'Have you been feeling more sensitive to cold temperatures than usual?',
      trigger: 'symptom5Response',
    },
    {
      id: 'symptom5Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom6' },
        { value: 'no', label: 'No', trigger: 'symptom6' },
      ],
    },
    {
      id: 'symptom6',
      message: 'Have you noticed changes in your skin, such as dryness or roughness?',
      trigger: 'symptom6Response',
    },
    {
      id: 'symptom6Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom7' },
        { value: 'no', label: 'No', trigger: 'symptom7' },
      ],
    },
    {
      id: 'symptom7',
      message: 'Have you experienced any changes in your hair, like thinning or increased brittleness?',
      trigger: 'symptom7Response',
    },
    {
      id: 'symptom7Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom8' },
        { value: 'no', label: 'No', trigger: 'symptom8' },
      ],
    },
    {
      id: 'symptom8',
      message: 'Do you have any concerns about your digestive health?',
      trigger: 'symptom8Response',
    },
    {
      id: 'symptom8Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom9' },
        { value: 'no', label: 'No', trigger: 'symptom9' },
      ],
    },
    {
      id: 'symptom9',
      message: 'Do you have any joint pain or stiffness?',
      trigger: 'symptom9Response',
    },
    {
      id: 'symptom9Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom10' },
        { value: 'no', label: 'No', trigger: 'symptom10' },
      ],
    },
    {
      id: 'symptom10',
      message: 'Have you noticed any changes in your mood, such as increased irritability or feelings of sadness?',
      trigger: 'symptom10Response',
    },
    {
      id: 'symptom10Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'symptom11' },
        { value: 'no', label: 'No', trigger: 'symptom11' },
      ],
    },
    {
      id: 'symptom11',
      message: 'Have you observed any swelling around your eyes,face, or neck?',
      trigger: 'symptom11Response',
    },
    {
      id: 'symptom11Response',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'count' },
        { value: 'no', label: 'No', trigger: 'count' },
      ],
    },

    {
      id: 'count',
      message: ({ steps }) => {
        const updatedSymptoms = Object.values(steps)
        .filter((step) => step.value === 'yes')
        .map((step) => step.id);

      console.log("After count", updatedSymptoms.length);

      if (updatedSymptoms.length >= 4) {
        return "Based on your responses, you have symptoms suggestive of thyroid issues. We recommend consulting a doctor and getting a thyroid test.";
      } else {
        return "Based on your responses, it seems you do not exhibit enough typical thyroid symptoms. Always consult a healthcare professional for advice.";
      }
      },
      trigger: 'end',
    },


      {
        id: 'end',
        message: 'Thank you for using the Thyroid Symptoms Checker.',
        end: true,
      },
];


  const iconStyle = {
    color: 'blue', // Change the color to white
    width: '75px', // Set the width of the image
    height: '75px', // Set the height of the image
    borderRadius: '45%', // To create a circular shape if needed
    backgroundColor: 'white', // Change the background color to white
    padding: '8px', // Adjust padding if needed
  };
  


  return (
    <ChatBot
      steps={steps}
      iconStyle={iconStyle}
      headerTitle="Thyroid Symptoms Checker"
      floating={true}
      disableScroll={true}
      floatingIcon={<img src="icon.jpg" style={iconStyle} alt='Icon'/>}
    />
  );
};

export default SymptomChecker;
