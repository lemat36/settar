import Image from "next/image";

const ContentTypes = () => {
  return (
    <section className="py-40 bg-gray-200 h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-20 text-teal-600">
          أنواع المحتوى التعليمي
        </h2>
        <div className="flex justify-around space-x-7 px-12">
          <div className="relative w-1/3 p-4 bg-white border border-teal-500 rounded-lg shadow-md">
            <div className="absolute -top-4 left-80 w-10 h-10  rounded-full flex items-center justify-center">
              <Image
                src="/images/howto.svg"
                alt="دورات"
                className="w-14 h-14"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">مشاريع تطبيقية</h3>
            <p>دروس متقدمة ومتنوعة تساعدك في إكمال مشاريع برمجية جديدة.</p>
          </div>
          <div className="relative w-1/3 p-4 bg-white border border-teal-500 rounded-lg shadow-md">
            <div className="absolute -top-4 left-80 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <Image
                src="/images/courses.svg"
                alt="دورات"
                className="w-14 h-14"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">دورات</h3>
            <p>
              مجموعة من الدروس التعليمية والمشاريع التطبيقية بهدف إتقان المهارات
              والتقنيات الحديثة.
            </p>
          </div>
          <div className="relative w-1/3 p-4 bg-white border border-teal-500 rounded-lg shadow-md">
            <div className="absolute -top-4 left-80 w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                src="/images/path.svg"
                alt="مسارات"
                className="w-14 h-14"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">مسارات</h3>
            <p>
              مسارات تعليمية متكاملة تغطي العديد من الموضوعات البرمجية الأساسية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTypes;
