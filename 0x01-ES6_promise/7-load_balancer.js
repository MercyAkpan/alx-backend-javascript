export default function loadBalancer(chinaDownload, USDownload) {
  try {
    const result = Promise.race([chinaDownload, USDownload]);
    // console.log(result) // This will be 'Result from B' because promiseB resolves first
    return result;
  } catch (error) {
    console.error('An error occurred:', error);
    return error;
  }
}
