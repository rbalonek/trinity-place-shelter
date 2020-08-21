const db = require('../db/connection')
const Volunteer = require('../models/volunteer')

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
      message: 'To hell with circumstances; I create opportunities.',
    },
    {
      firstName: 'Micky',
      lastName: 'Mouse',
      email: 'realMickyMouse@disney.com',
      phone: '123-456-0789',
      address: '99 Hell Road',
      secondAddress: '',
      secondAddress: '',
      city: 'Orlando',
      state: 'Florida',
      zip: '99999',
      message:
        'All our dreams can come true, if we have the courage to pursue them.',
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
