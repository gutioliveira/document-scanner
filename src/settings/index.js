import * as RNLocalize from "react-native-localize";
import { t } from 'typy';
import { pageKeys } from "./pageKeys";

const languages = {
  'pt': require('./strings/pt'),
  'en': require('./strings/en')
};

let defaultLanguage = 'pt';

const deviceLanguage = t(RNLocalize.getLocales(), '[0].languageCode').safeString;

if ( defaultLanguage && languages[defaultLanguage] )
  defaultLanguage = deviceLanguage;

export const SETTINGS = {
  pageKeys,
  ...languages[defaultLanguage]
};
