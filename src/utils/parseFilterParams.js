const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';

  if (!isString) return;

  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (favourite) => {
  if (favourite === 'true' || favourite === 'false') {
    return favourite;
  }
  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
