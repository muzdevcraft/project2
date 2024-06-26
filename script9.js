// Program 9

const patient1 = {

  firstName: "ABC",
  lastName: "DEF",
  age: 30,
  gender: "Male",
  diagnosis: "Hypertension",
  medications: ["Medicine A", "Medicine B"],
  admitDate: "2023-06-01",
  dischargeDate: "2023-06-15",
  roomNumber: "B301",
  attendingPhysician: "WXY",
  insuranceProvider: "XYZ Insurance",

  contactInfo: {
    phone: "123-456-7890",
    email: "abc.def@example.com",
    
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  }
};

console.log(patient1.firstName); // ABC
console.log(patient1.lastName);  // DEF
console.log(patient1.age);       // 30
console.log(patient1.diagnosis); // Hypertension
console.log(patient1.medications); // ["Medicine A", "Medicine B"]
console.log(patient1.admitDate); // 2023-06-01
console.log(patient1.dischargeDate); // 2023-06-15
console.log(patient1.roomNumber); // B301
console.log(patient1.attendingPhysician); // WXY
console.log(patient1.insuranceProvider); // XYZ Insurance
console.log(patient1.contactInfo.phone); // 123-456-7890
console.log(patient1.contactInfo.email); // abc.def@example.com
console.log(patient1.contactInfo.address.street); // 123 Main St
console.log(patient1.contactInfo.address.city); // Anytown
console.log(patient1.contactInfo.address.state); // CA
console.log(patient1.contactInfo.address.zip); // 12345
