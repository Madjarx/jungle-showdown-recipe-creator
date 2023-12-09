require('dotenv').config();
const APIWrapper = require('./Wrapper')



/** ENV variables */
const apiUrl = process.env.AIBG_URL;
const port = process.env.AIBG_PORT;
const username = process.env.AIBG_USERNAME;
const password = process.env.AIBG_PASSWORD;



/**
 * Main function definition
 */
async function main() {
    const url = `${apiUrl}:${port}`;
    const wrapper = new APIWrapper(url);
    const token = await wrapper.login(username, password);
    console.log(token);
};




/**
 * Execute the main function
 */
main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    }
);