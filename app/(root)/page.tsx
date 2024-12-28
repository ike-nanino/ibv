import HeaderVideo from '@/components/HeaderVideo';
import Experience from '@/components/Experience';
import Vault from '@/components/Vault';
import TailoredProtection from '@/components/TailoredProtection';
import Offerings from '@/components/Offerings';
import Contact from '@/components/Contact';
import Featured from '@/components/Featured';
import Countries from '@/components/Countries';

export default function Home() {
  return (
    <div>
    <HeaderVideo />

    <Experience />

    <Vault />

    <TailoredProtection />
    <Offerings />

    <Countries />

    <Featured />

    <Contact />
    </div>
  );
}
