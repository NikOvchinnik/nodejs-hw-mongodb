import { ContactsCollection } from "../db/models/contact.js";
import mongoose from 'mongoose';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  const contact = await ContactsCollection.findById(id);
  return contact;
};
