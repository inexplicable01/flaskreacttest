import {combineReducers} from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import offerReducer from './offerReducer';
import Layout from "../store/layouts/reducer";
// // Authentication
import Login from "../store/auth/login/reducer";
import Account from "../store/auth/register/reducer";
import ForgetPassword from "../store/auth/forgetpwd/reducer";
import Profile from "../store/auth/profile/reducer";

//Calendar
import Calendar from "../store/calendar/reducer";
//Chat
import chat from "../store/chat/reducer";
//Ecommerce
import Ecommerce from "../store/ecommerce/reducer";

//Project
import Projects from "../store/projects/reducer";

// Tasks
import Tasks from "../store/tasks/reducer";
//Form advanced
import changeNumber from "../store/formAdvanced/reducer";

//Crypto
import Crypto from "../store/crypto/reducer";

//TicketsList
import Tickets from "../store/tickets/reducer";
//Crm
import Crm from "../store/crm/reducer";

//Invoice
import Invoice from "../store/invoice/reducer";

//Mailbox
import Mailbox from "../store/mailbox/reducer";

// Dashboard Analytics
import DashboardAnalytics from "../store/dashboardAnalytics/reducer";

// Dashboard CRM
import DashboardCRM from "../store/dashboardCRM/reducer";

// Dashboard Ecommerce
import DashboardEcommerce from "../store/dashboardEcommerce/reducer";

// Dashboard Cryto
import DashboardCrypto from "../store/dashboardCrypto/reducer";

// Dashboard Cryto
import DashboardProject from "../store/dashboardProject/reducer";

// Dashboard NFT
import DashboardNFT from "../store/dashboardNFT/reducer";

// Pages > Team
import Team from "../store/team/reducer";

// File Manager
import FileManager from "../store/fileManager/reducer";

// To do
import Todos from "../store/todos/reducer";
//Jobs
import Jobs from "../store/job/reducer";
//API Key
import APIKey from "../store/apikey/reducer";

const rootReducer = combineReducers({
    authReducer,
    propertyReducer,
    offerReducer,
    Layout: Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
    Calendar,
    chat,
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Crypto,
    Tickets,
    Crm,
    Invoice,
    Mailbox,
    DashboardAnalytics,
    DashboardCRM,
    DashboardEcommerce,
    DashboardCrypto,
    DashboardProject,
    DashboardNFT,
    Team,
    FileManager,
    Todos,
    Jobs,
    APIKey,
});

export default rootReducer;
