# @datahandler/date-utils

A collection of handy JavaScript date utilities.

## Installation

```bash
npm install @datahandler/date-utils
```

## Usage

```javascript
import { getYears } = from '@your-username/utils';

// Example: Get an array of years
console.log(getYears(2000)); // [2000, 2001, ..., current year]

// Example: Use a callback
getYears(2000, year => {
    console.log(`<option value="${year}">${year}</option>`);
});

```
