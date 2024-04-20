import React from "react";
import { useRouter } from "next/router";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const PopularClass = () => {
  const router = useRouter();

  const handleClassClick = (id) => {
    router.push(`/course/${id}`);
  };

  const service = [
    {
      id: 1,
      image: "/assets/Basic.jpg",
      title: "Basic",
      sub: "Lessons on design that cover the most recent developments.",
      view:"5634",
      enrolled:"200",
      price:"₹6,000",
      rating: "4.5",
    },
    {
      id: 2,
      image: "/assets/Placement.jpg",
      title: "Placement Program",
      sub: "Lessons on design that cover the most recent developments.",
      view:"896",
      enrolled:"341",
      price:"₹30,000",
      rating: "4.5",
    },
    {
      id: 3,
      image: "/assets/webdevelopment.jpg",
      title: "Web  Development",
      sub: "Lessons on design that cover then most recent developments.",
      view:"1254",
      enrolled:"712",
      price:"₹15,000",
      rating: "5",
    },
  ];

  return (
    <div className="container mx-auto md:h-screen py-10">
      <p className="text-lg text-purple-500 font-medium">Explore Programs</p>
      <p className="text-3xl font-semibold py-3">Our Most Popular Class</p>
      <p className="text-gray-500 text-base py-3">
        Lets join our famous class, the knowledge provided will definitely be
        useful for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
        {service.map((ser) => (
          <div
            className="px-6 py-4 rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group cursor-pointer"
            key={ser.id}
            onClick={() => handleClassClick(ser.id)}
          >
            <image className="w-full" src={ser.image} alt="services" />
            <div className="flex justify-between items-center">
              <p className="text-2xl group-hover:text-white font-semibold line-clamp-1">
                {ser.title}
              </p>
              <HiOutlineArrowUpRight className="group-hover:text-white text-lg font-semibold" />
            </div>

            <p className="text-base group-hover:text-white pr-6 py-2">
              {ser.sub}
            </p>
            <div className="flex items-center gap-2 group-hover:text-white">
              <p>{ser.rating}</p>
              <image src="/assets/star.svg" alt="star" />
              <p>{ser.view}</p>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 group-hover:text-white">
                    Enrolled-{ser.enrolled}
                  </p>
                </div>
              </div>
              <p className="text-xl text-purple-600 group-hover:text-white font-semibold">
                {ser.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
