const user = {
  name: "manila",
  address: "lalitpur",
};

const zip = {
  code: 555,
};

const combinedObject = { ...user, ...zip };

console.log(combinedObject);
