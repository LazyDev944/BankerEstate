import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import JourneyScreen from '../screens/Journey/JourneyScreen';
import OnboardingConsentScreen from '../screens/Login/OnboardingConsentScreen';
import TermAndConditionScreen from '../screens/Login/TermAndConditionScreen';
import AadharVerifyScreen from '../screens/Login/AadharVerifyScreen';
import OnBoardPanCard from '../screens/Onboard/OnBoardPanCard';
import OnBoardCinCard from '../screens/Onboard/OnBoardCinCard';
import UdyamFetchedDetailCard from '../screens/Onboard/UdyamFetchedDetailCard';

export const screens = {
  Login: LoginScreen,
  OnboardingConsent: OnboardingConsentScreen,
  TermAndCondition:TermAndConditionScreen,
  AadharVerify:AadharVerifyScreen,
  Home: HomeScreen,
  OnboardPAN:OnBoardPanCard,
  OnboardCIN:OnBoardCinCard,
  UdyamDetails:UdyamFetchedDetailCard,
  Journey: JourneyScreen,
};
