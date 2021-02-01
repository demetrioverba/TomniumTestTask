import Data from './data.json';

const loadData = async () => {
  return new Promise(resolve => setTimeout(() => resolve(Data), 2000))
};
export default loadData;