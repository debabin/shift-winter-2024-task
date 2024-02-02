import instance from './instance'

export const buyTicket = async () => {
  const res = await instance.post('cinema/payment', {
    filmId: '1',
    person: {
      firstname: 'firstname',
      lastname: 'lastname',
      middlename: 'middlename',
      phone: '89990009999',
    },
    debitCard: {
      pan: '1111 1111',
      expireDate: '11/11',
      cvv: '111',
    },
    seance: {
      date: '01.02.24',
      time: '11:50',
    },
    tickets: [
      {
        row: 1,
        column: 3,
      },
    ],
  })
  return res.data
}
