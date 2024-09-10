import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-20">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-3 justify-around px-10 mb-10">
          <div>
            <Image
              src="/images/safcsp-logo-white.svg"
              alt="j"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image src="/images/stc.svg" alt="j" width={200} height={200} />
          </div>
          <div>
            <Image
              src="/images/logo-white.svg"
              alt="j"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            سياسة الخصوصية
          </a>
          <a href="/terms" className="hover:underline">
            الشروط والأحكام
          </a>
          <a href="/faq" className="hover:underline">
            الأسئلة الشائعة
          </a>
          <a href="/contact" className="hover:underline">
            تواصل معنا
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
