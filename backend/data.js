import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'CASIO LTP-VT01L-1BUDF',
      slug: 'casio-ltp-vt01l-1budf',
      category: 'Watches',
      image: '/images/p1.png',
      price: 120,
      countInStock: 0,
      brand: 'CASIO',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'POLICE THE BATMAN Vengeance Edition',
      slug: 'police-the-batman-vergeance-edition',
      category: 'Watches',
      image: '/images/p2.png',
      price: 250,
      countInStock: 20,
      brand: 'POLICE',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'GARMIN VENU 2 SILVER BLUE GRANITE',
      slug: 'garmin-nenu-2-silver-blue-granite',
      category: 'Watches',
      image: '/images/p3.png',
      price: 25,
      countInStock: 15,
      brand: 'GARMIN',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'G-SHOCK GA-2100-1ADR',
      slug: 'g-shock-ga-2100-1-adr',
      category: 'Watches',
      image: '/images/p4.png',
      price: 65,
      countInStock: 5,
      brand: 'G-SHOCK',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;