import Login from "app/screens/accounts/Login";

import Registration from "app/screens/accounts/Registration";
import Verification from "app/screens/accounts/Verification";
import CompleteRegister from "app/screens/accounts/CompleteRegister";
import ForgotPassword from "app/screens/accounts/ForgotPassword";
import CompleteForgot from "app/screens/accounts/CompleteForgot";

import MainScreen from "app/screens/navigation/Index";
import NotFoundScreen from "app/screens/NotFoundScreen";
import SplashScreen from "app/screens/SplashScreen";

import Conversations from "app/screens/conversations/Index";
import ConversationDetails from "app/screens/conversations/ConversationDetails";
import Customers from "app/screens/customers/Index";
import Profile from "app/screens/profile/Index";
import EditProfile from "app/screens/profile/EditProfile";
import ChildProfile from "app/screens/profile/ChildProfile";
import Notification from "app/screens/notification/Index"
import Dashboard from "app/screens/dashboard/index";
import EditCustomer from "app/screens/customers/components/EditCustomer/Index"
import Page from "app/screens/pages/Index";
import ConnectPage from 'app/screens/accounts/ConnectPage';

import ListUser from './cmsuser/listuser/ListUser'
import AddUser from './cmsuser/listuser/AddUser'
import EditUser from './cmsuser/listuser/EditUser'
import DetailUser from './cmsuser/detailuser/DetailUser'
import Header from './cmsuser/listuser/Header'
import CmsList from "./cmslist/CmsList";
import LoginCMS from './login/Index'
export default {
  SplashScreen: {
    screen: SplashScreen
  },
  Login: {
    screen: Login
  },
  Registration: {
    screen: Registration
  },
  Verification: {
    screen: Verification
  },
  CompleteRegister: {
    screen: CompleteRegister
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  CompleteForgot: {
    screen: CompleteForgot
  },
  Main: {
    screen: MainScreen
  },
  NotFoundScreen: {
    screen: NotFoundScreen
  },
  Conversations: {
    screen: Conversations
  },
  ConversationDetails: {
    screen: ConversationDetails
  },
  Customers: {
    screen: Customers
  },
  EditCustomer: {
    screen: EditCustomer
  },
  Profile: {
    screen: Profile
  },
  ChildProfile: {
    screen: ChildProfile
  },
  EditProfile: {
    screen: EditProfile
  },
  Notification: {
    screen: Notification
  },
  Dashboard: {
    screen: Dashboard
  },
  Page: {
    screen: Page
  },
  ConnectPage: {
    screen: ConnectPage
  },
  ListUser:{
    screen:ListUser
  },
  DetailUser:{
    screen:DetailUser
  },
  AddUser:{
    screen:AddUser
  },
  EditUser:{
    screen:EditUser
  },
  CmsList:{
    screen: CmsList
  },
  Header:{
    screen: Header
  },
  LoginCMS:{
    screen: LoginCMS
  }

};
