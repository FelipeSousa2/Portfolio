import { createClient } from "next-sanity";

const client = createClient({
  projectId: "2muezidq",
  dataset: "production",
  apiVersion: "2023-08-22",
  useCdn: false,
  token: "skXnqRtZrmcBopSGmF1i1Ph6DSsSKykG0w0pYdFqcoU46ZbT1Darf5Z7vSqwb5WJDP67qWUgUZj0CpVEd8QlMGdig9uTbajToYnF8DQR2SwtssJU4eRJKjfVHFmzytRsFMtJ4bjXDxdDoMaYDuDDNbcHCsdheasO0p9PdPq9pzxQ9n8rlEMz",
});

export default client;
