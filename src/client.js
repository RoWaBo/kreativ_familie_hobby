import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_TOKEN 
})

export default client