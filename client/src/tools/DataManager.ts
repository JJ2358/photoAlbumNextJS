import { getJSONData } from "./Toolkit";
import { SamplesData } from "./samples.model";

export async function getSampleData() {
  // request url of Web API to retrieve JSON
  const RETRIEVE_SCRIPT:string = "http://my-api-server/portfolioData.php";
  // Use this constant below to test for an empty database table
  // const RETRIEVE_SCRIPT:string = "http://my-api-server/portfolioData_empty.php";

  // fetch the data from the web api
  const data:SamplesData = await getJSONData(RETRIEVE_SCRIPT);
  return data.samples;
}