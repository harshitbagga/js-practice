const account_id  = 144553
let account_email = "harshitbagga@google.com"
var account_password = "123456"
account_city = "Jaipur"

//account_id = 2 not allowed
account_email = "abc@gmail.com"
account_password="456789"
account_city = "surat"
let account_state;
console.log(account_id);
/*
Never use var because of issues in block scope and functional scope 
*/

console.table([account_email,account_id,account_password,account_city,account_state])