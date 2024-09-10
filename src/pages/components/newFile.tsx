export default function () {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">أهم الميزات</h2>
        <div className="flex justify-around">
          <div className="w-1/3 p-4">
            <img
              src="/images/feature1.png"
              alt="تعلم أحدث التقنيات"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">تعلم أحدث التقنيات</h3>
            <p>نقدم محتوى متجدد وفقًا لأحدث التقنيات المطلوبة في سوق العمل.</p>
          </div>
          <div className="w-1/3 p-4">
            <img
              src="/images/feature2.png"
              alt="محتوى تعليمي متنوع"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">محتوى تعليمي متنوع</h3>
            <p>نقدم محتوى متنوع يتضمن مشاريع، دروس، واختبارات.</p>
          </div>
          <div className="w-1/3 p-4">
            <img
              src="/images/feature3.png"
              alt="تعلم سهل وممتع"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">تعلم سهل وممتع</h3>
            <p>نقدم محتوى تعليمي بأسلوب بسيط وممتع وبجودة عالية.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
