import HomeScreen from '../screens/Home/HomeScreen';
import FormTypeA from '../screens/Form/FormTypeA';
import FormTypeB from '../screens/Form/FormTypeB';
import LoginScreen from '../screens/Login/LoginScreen';
import JourneyScreen from '../screens/Journey/JourneyScreen';
import OnboardingConsentScreen from '../screens/Login/OnboardingConsentScreen';
import TermAndConditionScreen from '../screens/Login/TermAndConditionScreen';
import AadharVerifyScreen from '../screens/Login/AadharVerifyScreen';

export const screens = {
  Login: LoginScreen,
  OnboardingConsent: OnboardingConsentScreen,
  TermAndCondition:TermAndConditionScreen,
  AadharVerify:AadharVerifyScreen,
  Home: HomeScreen,
  Journey: JourneyScreen,
  FormA: FormTypeA,
  FormB: FormTypeB,
};
