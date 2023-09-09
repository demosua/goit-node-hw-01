// contacts.js
const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  }
  
  async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id === contactId);
    return result || null;
  }
  
  async function removeContact(contactId) {
    const allContacts = await listContacts();
    const index = allContacts.findIndex(el => el.id === contactId);
    if(index === -1){
      return null;
    }
    const [result] = allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return result;
  }
  
  async function addContact(name, email, phone) {
    const allContacts = await listContacts();
    const newContact = {
      id: nanoid(),
      email,
      phone,
    }
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  };