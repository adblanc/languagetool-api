import got from "got";
import {apiUrl} from "../config.json";
import getLanguage from "./langs";
import langs from "../langs.json";

export interface IParams {
	text: string;
	language: string;
	motherTongue?: string;
	preferredVariants?: string;
	enabledRules?: string;
	disabledRules?: string;
	enabledCategories?: string;
	disabledCategories?: string;
	enabledOnly?: boolean;
}

const checkText = async(options: IParams) => {
	const {text, language} = options;

	if (!text || !text.length)
		throw new Error("Text property is required.");
	if (!language || !language.length)
		throw new Error("Language property is required");
	if (!langs.find(l => l.code === language || l.longCode === language) && language !== "auto")
		throw new Error("Language property is incorrect, please check avalaible languages code.");

	let params = `text=${text}`;

	Object.keys(options).forEach(k => {
		if ((options as any)[k])
			params+= `&${k}=${(options as any)[k]}`;
	})

	const url = encodeURI(`${apiUrl}/check?${params}`);

	console.log(url);
	return await got(url).json();
}

export default checkText;
