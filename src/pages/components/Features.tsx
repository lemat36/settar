import Image from "next/image";

export default function () {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center ">
        <h2 className="text-2xl text-teal-600 font-bold mb-16">أهم الميزات</h2>
        <div className="flex justify-around px-10 space-x-6  grid-cols-3 gap-10">
          <div className="px-10 py-6 border border-teal-600 rounded-3xl">
            <Image
              src="/images/feature-tech.svg"
              alt="تعلم أحدث التقنيات"
              className="mx-auto mb-4"
              width={100}
              height={50}
            />
            <h3 className="text-xl font-bold mb-2">تعلم أحدث التقنيات</h3>
            <p>نقدم محتوى متجدد وفقًا لأحدث التقنيات المطلوبة في سوق العمل.</p>
          </div>
          <div className="px-10 py-6 border border-teal-600 rounded-3xl">
            <img
              src="/images/feature-content.svg"
              alt="محتوى تعليمي متنوع"
              className="mx-auto mb-4"
              width={80}
              height={50}
            />
            <h3 className="text-xl font-bold mb-2">محتوى تعليمي متنوع</h3>
            <p>نقدم محتوى متنوع يتضمن مشاريع، دروس، واختبارات.</p>
          </div>
          <div className="px-10 py-6 border border-teal-600 rounded-3xl">
            <img
              src="/images/feature-easy.svg"
              alt="تعلم سهل وممتع"
              className="mx-auto mb-4"
              width={80}
              height={50}
            />
            <h3 className="text-xl font-bold mb-2">تعلم سهل وممتع</h3>
            <p>نقدم محتوى تعليمي بأسلوب بسيط وممتع وبجودة عالية.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
