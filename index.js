// npm install --save pageclip
const Pageclip = require('pageclip')
require('dotenv').config();

// Reemplaza esto con tu API key real de Pageclip
const pageclipAPIKey = process.env.PAGECLIP_API_KEY
const pageclip = new Pageclip(pageclipAPIKey)

// Para enviar datos a un formulario específico
pageclip.send(process.env.NAME_FORM, { name: 'FerchoXD' , email:'ferchoXD@gmail.com'}).then((response) => {
  console.log(response.status, response.data) // => 200, [Item, Item]
}).catch((error) => {
  console.error('Error sending data:', error)
})

// Para recuperar datos de un formulario específico
pageclip.fetch('test').then((response) => {
  console.log(response.status, response.data) // => 200, [Item, Item]
}).catch((error) => {
  console.error('Error fetching data:', error)
})
