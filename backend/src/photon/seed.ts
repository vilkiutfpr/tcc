import { Photon, UserCreateInput } from '@generated/photon';

const photon = new Photon();

async function main() {
  const fireStation = await photon.fireStations.create({
    data: {
      name: 'Dionísio Cerqueira',
    },
  });

  // const user = await photon.users.create<{ data: UserCreateInput }>({
  //   data: {
  //     name: 'admin',
  //     email: 'admin@admin.com',
  //     role: 'ADM',
  //     password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // "secret42",
  //     fireStation: {
  //       connect: {
  //         id: 'ck1fmtmfe00005v1ofbsht46v',
  //       },
  //     },
  //   },
  // });

  console.log(fireStation);
  // console.log(user);
}

main();
