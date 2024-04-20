import React from "react";

const Placed = () => {
  const service = [
    {
      image: "/assets/Rewati Raman.jpg",
      title: "Rewati Raman",
      logoUrl: "https://www.svgrepo.com/show/353856/hashnode.svg",
    },
    {
      image: "/assets/Ayush.jpg",
      title: "Aayush Mall",
      logoUrl: "https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png",
    },
    {
      image: "/assets/Navneet.jpg",
      title: "Navneet Mall",
      logoUrl: "https://miro.medium.com/v2/resize:fit:1400/0*ok6yuDnTx4o2PSFx.png"
    },
    {
      image: "/assets/Akash.jpg",
      title: "Akash Singh",
      logoUrl: "https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3JlbnRvbW9qby5qcGc.png"
    },
    {
      image: "/assets/sahil.jpg",
      title: "Sahil Aggarwal",
      logoUrl: "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png"
    },
    {
      image: "/assets/sahib.jpg",
      title: "Sahib Singh",
      logoUrl: "https://successinsightsindia.com/wp-content/uploads/2023/10/1661492943731-og_image.png"
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <p className="text-3xl font-semibold text-center py-3">Placed Students</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 py-10">
        {service.map((ser, i) => {
          return (
            <div
              className="px-6 py-4 flex flex-col items-center rounded-xl bg-gray-50 shadow-lg border border-gray-200 group"
              key={i}
            >
              <image className="w-40 h-40 md:w-52 md:h-52 rounded-full mb-4" src={ser.image} alt="student" />
              <p className="text-xl font-semibold text-center line-clamp-1 mb-2">
                {ser.title}
              </p>
              <image src={ser.logoUrl} className="h-12 w-auto object-contain" alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Placed;
