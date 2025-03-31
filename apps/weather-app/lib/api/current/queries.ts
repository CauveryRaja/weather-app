import { Current } from "../../models/Current.types";
import { StandardQueryFn } from "../../utils/types/queries.types";

const CONFIG = require('../../../CONFIG.cjs');

export const getCurrentInfoQueryFn: StandardQueryFn<{
    location: string
}, Current> = async ({ location }) => {
  try {
    const response = await fetch(
      `http://${CONFIG.apiHost}/v1/current.json?key=${process.env['NEXT_PUBLIC_API_KEY']}&q=${location}&aqi=no`
    );
    const data = await response.json();

    return data.current;
  } catch (err) {
    console.error('error', err);
    throw new Error("Couldn't fetch Current weather info");
  }
};
