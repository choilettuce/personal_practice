
// Include os module and create its object
var os = require('os');
  
// return the endianness of system
console.log("Endianness of system: " + os.endianness());
  
// It returns hostname of system
console.log("Hostname: " + os.hostname());
  
// It return operating system name
console.log("Operating system name: " + os.type());
  
// It returns the platform of os
console.log('operating system platform: ' + os.platform());
  
// It returns the operating systems release.
console.log('OS release : ' + os.release());