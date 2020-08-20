const db = require('../db/connection')
const Volunteer = require('../models/volunteer')
const volunteer = require('../models/volunteer')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const volunteers = [
    {
      firstName: 'Bruce',
      lastName: 'Lee',
      email: 'bruce@lee.com',
      phone: '420-555-5555',
      address: '123 Heaven Drive',
      secondAddress: 'Suite 786',
      city: 'Sin City',
      state: 'Wisconsin',
      zip: '66666',
    },
    {
      firstName: 'Micky',
      lastName: 'Mouse',
      email: 'realMickyMouse@disney.com',
      phone: '123-456-0789',
      address: '99 Hell Road',
      secondAddress: '',
      city: 'Orlando',
      state: 'Florida',
      zip: '99999',
    },
  ]

  await Volunteer.insertMany(volunteers)
  console.log('Seeded volunteers!')
}
const run = async () => {
  await main()
  db.close()
}

run()
