/* eslint-disable no-unused-vars */
import { generateUUID } from '@libs/common';

enum ROLE {
  ADMIN = 0,
  STAFF = 1,
  BASIC = 2,
}

export const Users = [
  {
    id: generateUUID(),
    name: 'John Doe',
    email: 'john.doe@example.com',
    emailVerified: true,
    role: ROLE.ADMIN,
    image: '',
    hashedPassword: 'fdsafsdgewratasdgwertewafgsdfgdsafs=',
  },
  {
    id: generateUUID(),
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    emailVerified: true,
    role: ROLE.STAFF,
    image: '',
    hashedPassword: 'fdsafdsgfhgdfshdfsgdsafgass=',
  },
];
