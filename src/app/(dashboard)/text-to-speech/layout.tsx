import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <TextToSpeechLayout>{children}</TextToSpeechLayout>;
};

export default Layout;
