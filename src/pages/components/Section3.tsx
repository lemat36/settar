import Image from "next/image";

export default function () {
  return (
    <div className="bg-white py-36 px-6">
      <div className="border border-teal-600 grid grid-cols-2 p-20 rounded-3xl ">
        <div>
          <Image
            src="/images/deliver-fast-data-entry-services-for-your-business.jpg"
            alt="h"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col space-y-8  ">
          <h1 className=" text-3xl text-write">
            يمكنك البدء بتصفح كامل المحتوى التعليمي
          </h1>
          <button className="bg-teal-600 text-white px-4 py-2 ">
            {" "}
            الانتقال للمحتوى التعليمي{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
