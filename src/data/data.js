import image1 from '../data/img/Frame1.png';
import image2 from '../data/img/Frame2.png';
import image3 from '../data/img/Frame3.png';
import image4 from '../data/img/Frame4.png';
import image5 from '../data/img/Frame5.png';
import logout from '../data/img/logout.png';
import payment from '../data/img/payment.png';

import ProfilePic from '../data/img/me.jpeg';

export const datas = [
        {
          name: 'General',
          icon: image1,
        },
        {
          name: 'Password',
          icon: image2,
        },
        {
          name: 'Invitations',
          icon: image3,
        },
        {
          name: 'Billing',
          icon: image4,
        },
        {
          name: 'Apps',
          icon: image5,
        },
  ];

export const profilePicture = ProfilePic;

export const logoutBtn = logout;
  
export const paymentData = [
  {
    paymentId: 1,
    paymentDate: 'Oct. 21, 2021',
    type: 'Sponsored Post',
  },
  {
    paymentId: 2,
    paymentDate: 'Aug. 21, 2021',
    type: 'Sponsored Post',
  },
  {
    paymentId: 3,
    paymentDate: 'July. 21, 2021',
    type: 'Pro Portfolio',
  },
  {
    paymentId: 4,
    paymentDate: 'Jun. 21, 2021',
    type: 'Pro Annual',
  },
];

export const paymentVisa = payment;