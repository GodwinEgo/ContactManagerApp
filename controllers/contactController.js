//@desc GET ALL CONTACTS
//@route GET /api/contacts
//@access public

const getContacts = async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc CREATE NEW CONTACT
//@route POST /api/contacts
//@access public

const createContact = async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(200).json({ message: "Create Contact" });
};

//@desc GET  CONTACT
//@route GET /api/contacts/:id
//@access public

const getContact = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc UPDATE CONTACT
//@route POST /api/contacts/:id
//@access public

const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc DELETE CONTACT
//@route GET /api/contacts/:id
//@access public

const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id} ` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
