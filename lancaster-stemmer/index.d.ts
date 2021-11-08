/**
 * Lancaster stemming algorithm
 *
 * @param {string} value
 * @returns {string}
 */
export function lancasterStemmer(value: string): string
export type RuleSet = {
  match: string
  replacement: string
  type: number
}
