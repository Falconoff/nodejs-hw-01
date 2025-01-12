import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const generatedContactList = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactsList, ...generatedContactList];
  await writeContacts(newList);
};

generateContacts(3);
