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
  
  export const FetchDelete = async (url, options = null, key) => {

    if (!options) {
        options = {
            method: 'DELETE',
            headers: {
                'Authorization': `Baerer ${key}`
            }
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;

    }
    catch (error) {
        console.error(error);
    }
}
