import axios from 'axios';

// Function to send emotion
const sendRequest = async (reqString) => {
  try {
    const res = await axios.post('http://10.0.2.2:8000//api/Tourism', { reqString });
    return res.data.response;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for the caller to handle, if needed
  }
};

export { sendRequest }; // Export the function for external use
