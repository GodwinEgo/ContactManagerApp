//@desc GET ALL CONTACTS
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc CREATE NEW CONTACT
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  console.log("The request body is: ", req.body);
  res.status(200).json({ message: "Create Contact" });
};

//@desc GET  CONTACT
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc UPDATE CONTACT
//@route POST /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc DELETE CONTACT
//@route GET /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id} ` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
