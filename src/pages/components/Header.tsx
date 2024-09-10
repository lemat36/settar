import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div>
      <header>
        <nav className="flex items-center justify-between py-4 px-9 bg-white shadow-2xl">
          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="px-4 py-2 text-teal-600 border border-teal-600 rounded hover:bg-teal-600 hover:text-white"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              إنشاء الحساب
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-black  rounded px-3 py-2 hover:bg-slate-100 "
            >
              Telegram
            </Link>
            <div className=" grid grid-cols-2">
              <div className="flex-col flex">
                <button className="bg-red-500 text-white rounded-full py-1 px-2 ">
                  جديد
                </button>{" "}
                <Link
                  href="#"
                  className="text-black  rounded px-3 py-2 hover:bg-slate-100"
                >
                  المساحات
                </Link>
              </div>
              <div className="flex-col flex">
                <button className="bg-orange-500 text-white rounded-full py-1 px-2 ">
                  قريبا
                </button>
                <Link
                  href="#"
                  className="text-black  rounded px-3 py-2 hover:bg-slate-100"
                >
                  المحتوى المقروء
                </Link>
              </div>
            </div>
            <Link
              href="#"
              className="text-black  rounded px-3 py-2 hover:bg-slate-100"
            >
              منصاتنا
            </Link>
            <Link
              href="#"
              className="text-black  rounded px-3 py-2 hover:bg-slate-100"
            >
              المحتوى التعليمي
            </Link>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/logo (1).svg"
              width={150}
              height={100}
              alt="img"
            />
          </div>
        </nav>
      </header>
      <div className=" relative z-10 bg-white py-12 grid grid-cols-2">
        <div>
          <Image
            src="/images/deliver-fast-data-entry-services-for-your-business.jpg"
            width={400}
            height={400}
            alt="img"
          />
        </div>

        <div className=" container mx-auto text-right pr-16 pt-10">
          <h1 className="text-4xl font-bold mb-4">تعلم البرمجة</h1>
          <p className="mb-8 text-3xl">وابدأ بصناعة حلول لمشاكل العالم</p>
          <p className="mb-8 text-xl leading-8">
            توفر لك منصة سطر التعليمية محتوى متنوع ومتكامل يساعدك في تعلم
            البرمجة بكل سهولة ومتعة
          </p>
          <button className="bg-teal-600 text-white px-4 py-2 rounded">
            سجل وابدأ التعلم
          </button>
        </div>
        <div className="mx-48">
          <div
            className="text-center bg-white border py-16 mb-2
           border-teal-600 rounded-3xl absolute -z-10 left-0 right-0 mx-48"
          >
            <div className="flex justify-around">
              <div>
                <h3 className="text-xl font-bold">318</h3>
                <p>مقال</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">373</h3>
                <p>سؤال شائع</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">63</h3>
                <p>مشروع تطبيقي</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">2493</h3>
                <p>مقطع فيديو</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
