const express = require('express');
const router = express.Router();
const cors = require('cors');
const { StaffDb } = require('../models/staffSchema');

router.use(express.json());
router.use(cors());

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
  try {
    if (req.body.uname == "zaid" && req.body.pass == 123) {
      const staff = await newStaff(
        Date.now(),
        req.body.address, 
        req.body.name, 
        Date.now().toLocaleString()
      );
      res.send(staff);
    }
    else {
      res.send('invallid uname or pass');
    }
  }
  catch (err) {
    console.log(err);
  }
});

router.delete('/staff/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const toDelete = await StaffDb.findOneAndDelete({ GenId: id });
    res.send(toDelete);
  }
  catch (err) {
    res.send('invallid ID');
  }
});

module.exports = router;
