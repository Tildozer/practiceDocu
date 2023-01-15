### node ###

tildozer@Anthonys-iMac express-lesson % node
Welcome to Node.js v16.17.1.
Type ".help" for more information.
> const { encodeData, decodeData } = require("./jwt")
undefined
> encodeData('original message')
'eyJhbGciOiJIUzI1NiJ9.b3JpZ2luYWwgbWVzc2FnZQ.N9sSYkC91LgPwPf8iX5OpLpGJ4J1MrkeuQKq7UTIp18'
> decodeData('eyJhbGciOiJIUzI1NiJ9.b3JpZ2luYWwgbWVzc2FnZQ.N9sSYkC91LgPwPf8iX5OpLpGJ4J1MrkeuQKq7UTIp18')
'original message'
> encodeData({useername: 'matt', password: 'also matt' })
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vlcm5hbWUiOiJtYXR0IiwicGFzc3dvcmQiOiJhbHNvIG1hdHQiLCJpYXQiOjE2NzM4MTY2Nzd9.lgkFqUj0VCgHCSUW1wc8LZql9VHIhzyx7L5qhng6euo'
> decodeData('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vlcm5hbWUiOiJtYXR0IiwicGFzc3dvcmQiOiJhbHNvIG1hdHQiLCJpYXQiOjE2NzM4MTY2Nzd9.lgkFqUj0VCgHCSUW1wc8LZql9VHIhzyx7L5qhng6euo')
{ useername: 'matt', password: 'also matt', iat: 1673816677 }
> 
