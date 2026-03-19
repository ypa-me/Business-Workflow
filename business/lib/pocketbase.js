import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
console.log('PB URL:', process.env.NEXT_PUBLIC_POCKETBASE_URL)
export default pb;