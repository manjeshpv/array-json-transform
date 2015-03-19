/**
 * Created by ManjeshV on 3/19/2015.
 */
var aj = require('./')

// Server
clientExpectedJSON = [{name:"Manjesh V"},{name:"Manoj"},{name:"Murali"},{name:"Nikkitha"},{name:"Sanjay"}]
console.log('Transfer bytes in server',(clientExpectedJSON.toString()).length)
responseOverHTTP = aj.json2array(clientExpectedJSON);

console.log('responseOverHTTP',responseOverHTTP);
console.log('Transfer bytes in network',(responseOverHTTP.toString()).length)
console.log("Bandwidth Converved",((responseOverHTTP.toString()).length/(clientExpectedJSON.toString()).length)*100 + "%")

// client
clientExpectedJSON = aj.array2json(responseOverHTTP);
console.log("clientExpectedJSON",clientExpectedJSON)
console.log('Transfer bytes in client',(clientExpectedJSON.toString()).length)