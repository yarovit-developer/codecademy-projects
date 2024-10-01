// Valid cards
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Invalid cards
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Arrays of all cards
const validCards = [valid1, valid2, valid3, valid4, valid5];
const invalidCards = [invalid1, invalid2, invalid3, invalid4, invalid5];

// The rest of the code remains unchanged
function validateCred(card) {
  let sum = 0;
  for (let i = card.length - 1; i >= 0; i--) {
    let digit = parseInt(card[i]);

    if ((card.length - 1 - i) % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}

function findInvalidCards(cards) {
  const invalidCards = [];
  for (let card of cards) {
    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
}

function idInvalidCardCompanies(invalidNumbers) {
  const companies = [];
  for (let card of invalidNumbers) {
    let firstDigit = card[0];
    let company = '';
    switch (firstDigit) {
      case 3:
        company = 'Amex';
        break;
      case 4:
        company = 'Visa';
        break;
      case 5:
        company = 'Mastercard';
        break;
      case 6:
        company = 'Discover';
        break;
      default:
        company = 'Company not found';
    }
    if (company !== 'Company not found' && !companies.includes(company)) {
      companies.push(company);
    }
  }
  return companies;
}

console.log("Valid cards:");
for (let card of validCards) {
  console.log(card, validateCred(card) ? 'Valid' : 'Not valid');
}

console.log("\nInvalid cards:");
for (let card of invalidCards) {
  console.log(card, validateCred(card) ? 'Valid' : 'Not valid');
}

console.log("\nCompanies, that issued invalid cards:");
const invalidCompanies = idInvalidCardCompanies(findInvalidCards(invalidCards));
console.log(invalidCompanies.length === 0 ? 'No companies found' : invalidCompanies.join(', '));
