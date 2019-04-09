import { loadPreferences } from './preferences';

export function* init() {
  yield loadPreferences();
}
