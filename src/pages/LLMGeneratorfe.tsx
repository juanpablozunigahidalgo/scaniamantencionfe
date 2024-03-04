import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/RootState';
import { setAnswer } from '../actions/actions';
import './llmstyles.css'; // Import CSS file
import axios from 'axios';

const LLMGeneratorfe: React.FC = () => {
  const [phrase, setPhrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const mechanicalAdvice = useSelector((state: RootState) => state.answer);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value);
  };

  const generateAdvice = async () => {
    setIsLoading(true);
    try {
      const apiKey = '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'; // Replace with your actual OpenAI API key
      const prompt = encodeURIComponent(phrase + '\n\nReturn only a mechanical advice for maintenance from an input text (The user will specify mechanical issues from his vehicle). In case you don\'t understand the phrase or the phrase is about something else, return "Please come with a mechanical issue of your machine".');
      
      console.log('Prompt:', prompt);
  
      const response = await fetch(`https://api.openai.com/v1/chat/completions?prompt=${prompt}&max_tokens=50&model=text-davinci-003`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Response:', responseData.choices[0].text.trim());
      dispatch(setAnswer(responseData.choices[0].text.trim()));
    } catch (error) {
      console.error('Error generating advice:', error);
      dispatch(setAnswer('Please come with a mechanical issue of your machine. Either. There is a conection issue with CHAT GPT by API call.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <TextField
          className="inputField"
          variant="outlined"
          multiline
          rows={1}
          label=""
          value={phrase}
          onChange={handleInputChange}
          placeholder="Enter the mechanical problems of the truck."
        />
        <div className="distance">
          <Button variant="contained" className="custom-button" onClick={generateAdvice} disabled={!phrase || isLoading}>
            {isLoading ? 'Loading...' : 'Get Mechanical Advice'}
          </Button>
        </div>
      </div>
      {mechanicalAdvice && (
        <div className="mechanicalAdviceContainer">
          <div className="mechanicalAdvice">{mechanicalAdvice}</div>
        </div>
      )}
    </div>
  );
};

export default LLMGeneratorfe;



// Azure Version
// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../types/RootState';
// import { setAnswer } from '../actions/actions';
// import './llmstyles.css'; // Import CSS file
// import axios from 'axios';

// const LLMGeneratorfe: React.FC = () => {
//   const [phrase, setPhrase] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();
//   const mechanicalAdvice = useSelector((state: RootState) => state.answer);

//   const generateAdvice = async () => {
//     setIsLoading(true);
//     try {
//       // Remove newline character from the prompt
//       const promptValue = phrase.replace(/\n/g, ' ');
  
//       const response = await axios.post('https://isp-openai-test-swe.openai.azure.com/openai/deployments/rc-davinci-ai/completions?api-version=2023-09-15-preview', null, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer b12a2eff87ec4318919795a0f3c6d1e5', // Replace with your OpenAI API key
//           'X-Prompt': promptValue + ' Return only a mechanical advice for maintenance from an input text (The user will specify mechanical issues from his vehicle). In case you don\'t understand the phrase or the phrase is about something else, return "Please come with a mechanical issue of your machine".'
//         },
//       });
//       dispatch(setAnswer(response.data.choices[0].text.trim()));
//     } catch (error) {
//       console.error('Error generating advice:', error);
//       dispatch(setAnswer('Please come with a mechanical issue of your machine'));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhrase(e.target.value);
//     if (!e.target.value) {
//       dispatch(setAnswer(''));
//     }
//   };

//   return (
//     <div className="container">
//       <div className="inputContainer">
//         <TextField
//           className="inputField"
//           variant="outlined"
//           multiline
//           rows={1}
//           label=""
//           value={phrase}
//           onChange={handleInputChange}
//           placeholder="Enter the mechanical problems of the truck."
//         />
//         <div className="distance">
//           <Button variant="contained" className="custom-button" onClick={generateAdvice} disabled={!phrase || isLoading}>
//             Get Mechanical Advice
//           </Button>
//         </div>
//       </div>
//       {mechanicalAdvice && (
//         <div className="mechanicalAdviceContainer">
//           <div className="mechanicalAdvice">{mechanicalAdvice}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LLMGeneratorfe;