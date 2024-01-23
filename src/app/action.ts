// 20231211183511
// https://restcountries.com/v3.1/all

'use server';

const fetchCountries = async () =>{
     try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        // console.log(data[0]);
        return data;
     } catch (error) {
        console.log(error);
     }
}

export default fetchCountries;