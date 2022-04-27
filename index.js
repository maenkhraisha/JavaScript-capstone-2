import './style.css';
import './jumpy.gif';
import displayPopup from './src/Module/display_popup.js';
import displayReservation from './src/Module/display_popup_reservation.js';
import display from './src/Module/display_home.js';
import { itemCounter } from './src/Module/counters.js';
/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */
display();
displayPopup();
displayReservation();
itemCounter();