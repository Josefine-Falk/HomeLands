/**
 * Nørdet Function til at fetche med
 * @param {*} url API Endpoint
 * @param {*} options Option Object
 * @returns Array
 */
 export async function myCostumFetch(url, options = null) { //Asynkron funktion som køre med 2 parameter url og options som er ingenting
    if(!options) { //hvis options er null så sender man en options med en method som er get 
        options = { //Hvis ikke der er andet så tager den url og laver den til get method
            method: 'GET'
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
  
    }
    catch(error) {
        console.error(error); //Hvis noget går galt fanger den fejlen og logger den ud i console
    }
  }
  
  /**
  * Funktion til at fetche API's med
  * @param {string} url API Endpoint
  * @param {string} method HTTP Request Method
  * @param {string} token Access Token String
  * @param {object} formdata Form Data Object
  */
  export async function fetch2api(url, method = 'GET', token = null, formdata = null) {
    let options = {
        method: method,
    }   
  
    if(token) {
        options.headers = {
            'Authorization' : `Baerer ${token}`
        }
    }
  
    if(formdata) {
        options.body = formdata
    }
  
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
  
    }
    catch(error) {
        console.error(error);
    }
  }
  
  /**
  * Funktion til at shuffle og slice et array med
  * @param {array} array 
  * @param {number} slices 
  */
  export const shuffleArray = (array, slices = 0) => {    
    array.sort(() => 0.5 - Math.random())
    return (slices > 0) ? 
                array.slice(0,slices) : array;
  }
  
  /**
  * Konverterer timestamp til lokal dato format
  * @param {number} stamp 
  */
  export const date2local = (stamp) => {
  
    function addZero(i) {
        return (i < 10) ? "0" + i : i;
    }
  
    const days = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    const d = new Date(stamp*1000);
    
    const dayname = days[d.getDay()];
    const hours = addZero(d.getHours());
    const minutes = addZero(d.getMinutes());
    const format = `${dayname} kl. ${hours}:${minutes}`;
    return format;
  }
  