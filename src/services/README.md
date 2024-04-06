# Files

    Quick overview of this directory

## `/api`

- `api/auth.js`: API login/register user functions
- `api/drugs.js`: API get_drugReplacements functions
- `api/history.js`: API history/favorites functions

## `/providers`

- `providers/SearchContext.js`: Global variable for search item number header
- `providers/DrugContext.js`: Global variable for drug results
- `providers/HistoryContext.js`: Global variables for history/favorited searches results

## `functions.js`

Functions used in several files

- `formatJSON()`: Formats JSON data from the API into a usable format
- `restructureApiResponse()`: Restructures the response from the API to fit our needs (i.e., moving certain fields around)
- `restructureHistoryApiResponse()` : Restructures the response from the History Context to be more easily accessible by components