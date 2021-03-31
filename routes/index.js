const express = require('express');
const router = express.Router();
const { StaffDb } = require('../models/staffSchema');

router.use(express.json());

async function newStaff(genId, Address, Name, DateOfJoining) {
  const staff = new StaffDb({
    GenId: genId,
    Address: Address,
    Name: Name,
    DateOfJoining: DateOfJoining
  })
  await staff.save();

  return staff;
}

router.get('/', (req, res) => {
  res.send('Welcome to Staff Api');
});

router.get('/staffs', async (req, res) => {
  const staffData = await StaffDb.find();
  res.send(staffData);
});

router.post('/staffs/add/', async (req, res) => {
  // work will be done
});


module.exports = router;
