import React from 'react';

class PlacementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placements: [
        { id: 1, logoUrl: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg" },
        { id: 2, logoUrl: "https://www.acko.com/wp-content/uploads/2019/03/acko-logo-knowledge-panel.png" },
        { id: 3, logoUrl: "https://www.svgrepo.com/show/353856/hashnode.svg" },
        { id: 4, logoUrl: "https://successinsightsindia.com/wp-content/uploads/2023/10/1661492943731-og_image.png" },
        { id: 5, logoUrl: "https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3JlbnRvbW9qby5qcGc.png" },
        { id: 6, logoUrl: "https://miro.medium.com/v2/resize:fit:1400/0*ok6yuDnTx4o2PSFx.png" },
        { id: 7, logoUrl: "https://mms.businesswire.com/media/20231114533627/en/1943742/22/airbase_logo.jpg" },
        { id: 8, logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxVJNqJ9fOL-jnVJbeRBSStvzyt0Tz_JtmhoTee9Liw&s" },
        { id: 9, logoUrl: "https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" },
        { id: 10, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gojek_logo_2022.svg/2560px-Gojek_logo_2022.svg.png" },
        { id: 11, logoUrl: "https://assets-global.website-files.com/5b928a5439bbd3a36c44e301/5bafe547c110e44f487f6a3a_image_preview.png" },
        { id: 12, logoUrl: "https://images.yourstory.com/cs/images/companies/c69bc5b91c9888b7bd09-1622548235763.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" },
        { id: 13, logoUrl: "https://www.eklavvya.com/blog/wp-content/uploads/2022/03/Zerodha-Logo.png" },
        { id: 14, logoUrl: "https://cdn.iconscout.com/icon/free/png-256/free-devfolio-1649779-1399882.png" },
        { id: 15, logoUrl: "https://media.licdn.com/dms/image/C560BAQHg_l1h_XiBZA/company-logo_200_200/0/1634569247323/sahajsoftware_logo?e=2147483647&v=beta&t=1Ii9jD_KiJtr47Xf0RHza5wG7oQWHptx9poThSYJgAM" },
        { id: 16, logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScz8GvbXFR548bsC47Mcx1CQB_Ii3kRCt5-Q_8_IaX8Q&s" },
        { id: 17, logoUrl: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg" },
        { id: 18, logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2560px-Infosys_logo.svg.png" }


        // Add more placements as needed
      ]
    };
  }

  render() {
    
    return (
      <div className="container mx-auto ">
        <br /> <br />
      <h1 className="text-3xl font-bold mb-4">Placement Opportunities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 md:grid-cols-9 ">
        {this.state.placements.map(placement => (
          <div key={placement.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <image src={placement.logoUrl} className="h-24 w-auto object-contain md:h-30 md:w-auto" />
           
          </div>
        ))}
      </div>
    </div>
    );
  }
}

export default PlacementPage;
