// Format using cleave.js

import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.au';

// validate phone
new Cleave('.input-phone', {
  phone: true,
  phoneRegionCode: 'AU'
});