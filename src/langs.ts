import got from "got";
import {apiUrl} from "../config.json";

export interface ILang {
	name: string;
	code: string;
	longCode: string;
}

const getLanguages = async(): Promise<ILang[]> => {
	return await got(`${apiUrl}/languages`).json();
}


export default getLanguages;
