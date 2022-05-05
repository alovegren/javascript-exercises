// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team.ceo}`);
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// When we attempt to add properties to the `team` object on lines 22-24, the keys we supply (`ceo`, `developer` and `scrumMaster`) are evaluated as expressions, and it turns out that they are local variables referencing their own objects. Since object keys must be strings, the objects that `ceo` `developer` and `scrumMaster` evaluate to are coerced to some string representation of a generic object `'[object Object]'`. This value is overwritten on lines 23 and 24, so the object referenced by `team` ends up being `{ '[object Object]': undefined }`.

// When we then try to access the values corresponding to the keys `ceo` and `scrumMaster`, we get back `undefined` since this is the default value for non-existent object keys.

// We can fix this by using dot notation instead, or using string literals when we assign and access values to/from `team`.