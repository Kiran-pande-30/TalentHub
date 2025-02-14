import mongoose from 'mongoose'
import { faker } from '@faker-js/faker'
import User from '../models/user.model.js'
import Work from '../models/work.model.js'
import bcrypt from 'bcrypt'

// MongoDB connection
const DATABASE_URL = ''
mongoose
  .connect(DATABASE_URL)
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error:', err))

// Sample data arrays
const skillsList = [
  'JavaScript',
  'Python',
  'React',
  'Node.js',
  'UI/UX Design',
  'SEO',
]
const languagesList = ['Marathi', 'Hindi', 'English', 'Kannada', 'Telugu']
const certificatesList = [
  'AWS Certified Solutions Architect',
  'Google Ads Certification',
  'TOEFL',
  'Adobe Certified Professional',
]

const jobTitles = [
  'JavaScript Developer',
  'Node.js Developer',
  'React Developer',
  'Python Developer',
  'UI Designer',
  'UX Designer',
  'SEO Specialist',
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Web Developer',
  'SEO Expert',
  'React Expert',
  'UI Developer',
  'Python Engineer',
]

const generateDummyUsers = async () => {
  const users = []
  for (let i = 0; i < 20; i++) {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const userName = faker.internet.username(firstName, lastName).toLowerCase()
    const email = faker.internet.email(firstName, lastName)
    const password = await bcrypt.hash('Password123', 10) // Default password
    const role = faker.helpers.arrayElement(['freelancer', 'client'])
    const skills =
      role === 'freelancer' ? faker.helpers.arrayElements(skillsList, 3) : []
    const languages =
      role === 'freelancer' ? faker.helpers.arrayElements(languagesList, 2) : []
    const certificates =
      role === 'freelancer'
        ? faker.helpers.arrayElements(certificatesList, 2)
        : []
    const balance = faker.number.int({ min: 100, max: 1000 })

    users.push({
      firstName,
      lastName,
      userName,
      email,
      password,
      passwordConfirm: password,
      role,
      skills,
      languages,
      certificates,
      balance,
    })
  }

  await User.insertMany(users)
  console.log('Dummy users added.')
}

const generateDummyWorks = async () => {
  const clients = await User.find({ role: 'client' })
  const freelancers = await User.find({ role: 'freelancer' })
  const works = []

  for (let i = 0; i < 20; i++) {
    const client = faker.helpers.arrayElement(clients)
    const freelancer = faker.helpers.arrayElement(freelancers)
    const title = faker.helpers.arrayElement(jobTitles)
    const description = faker.lorem.paragraph()
    const pay = faker.number.int({ min: 100, max: 1000 })
    const jobLevel = faker.helpers.arrayElement(['Easy', 'Medium', 'Hard'])
    const skillsRequired = faker.helpers.arrayElements(skillsList, 3)

    works.push({
      title,
      description,
      pay,
      joblevel: jobLevel,
      skills_Required: skillsRequired,
      client_id: client._id,
      freelancer_id: freelancer._id,
      applied_status: [], // Empty initially
    })
  }

  await Work.insertMany(works)
  console.log('Dummy works added.')
  return works // Return works to be used for applying
}

// Function to make each freelancer apply to 10 works
const assignFreelancersToWorks = async (works) => {
  const freelancers = await User.find({ role: 'freelancer' })
  for (const freelancer of freelancers) {
    const appliedWorks = faker.helpers.arrayElements(works, 10) // Get 10 random works

    for (const work of appliedWorks) {
      // Check if the freelancer has already applied to this work
      if (!work.applied_status.includes(freelancer._id)) {
        // Add freelancer ID to the applied_status array
        work.applied_status.push(freelancer._id)

        // Use `updateOne()` to update the applied_status array in the database
        await Work.updateOne(
          { _id: work._id }, // Filter by work ID
          { $push: { applied_status: freelancer._id } }, // Push the freelancer's ID into applied_status
        )
      }
    }
  }
  console.log('Freelancers have applied to 10 works each.')
}

// Admin user creation function
const createAdminUser = async () => {
  try {
    const admin = await User.create({
      firstName: 'Admin',
      lastName: 'User',
      userName: 'admin',
      email: 'admin@talenhub.com',
      password: 'Password123',
      passwordConfirm: 'Password123',
      role: 'admin',
      active: true,
      balance: 0,
    })

    console.log('Admin user created:', admin)
  } catch (err) {
    console.error('Error creating admin user:', err)
  }
}

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({})
    await Work.deleteMany({})

    // Generate new data
    await generateDummyUsers()
    const works = await generateDummyWorks() // Get generated works
    await assignFreelancersToWorks(works) // Assign freelancers to 10 works
    await createAdminUser()

    console.log('Database seeded successfully.')
    mongoose.connection.close()
  } catch (error) {
    console.error('Error seeding database:', error)
    mongoose.connection.close()
  }
}

seedDatabase()
