/* eslint-disable react/prop-types */
import BenefitBox from "./BenefitBox";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const PlantInfoSection = (props) => {
  const { selectedPlant ,plantImage } = props;
 
 
  return (
    <div className="flex flex-col md:flex-row-reverse ">
      {/* Right Section (Plant Details) - This will be shown on top on mobile */}
      <div className="flex flex-col flex-1 md:px-8  w-full">
        <div className="flex justify-between items-center  mt-4 md:mt-0">
          <div className="text-4xl md:text-5xl font-fair">{selectedPlant?.name}</div>
          <div className="text-2xl md:text-3xl">${selectedPlant?.price}</div>
        </div>

        {/* Botanical Name */}
        <div className="hidden md:block pl-1 my-2 text-lg italic">
          {selectedPlant?.botanical_name}
        </div>

        {/* Plant Description */}
        <p className=" leading-relaxed mt-4">{selectedPlant?.description}</p>
        

        
      </div>

      {/* Left Section (Image and Benefit Boxes) - This will be shown at the bottom on mobile */}
      <div className="flex flex-col md:flex-col flex-1 w-full ">
        <div>
          {/* Plant Image */}

          <Zoom>

          <img
            className="rounded-lg w-full object-cover md:max-w-xs mx-auto"
            src={selectedPlant?.images[plantImage].src}
            alt={selectedPlant?.name}
          />
          </Zoom>


        </div>

        {/* Benefit Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-center p-4 ">
            <div className=" flex flex-col md:flex-row text-center">
            <BenefitBox
            
            icon="far fa-check-circle text-2xl  my-2"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <BenefitBox
          
            icon="fa-solid fa-truck-fast text-2xl  my-2"
            title="Free Shipping"
            description="Guaranteed to ship in 3 days or your money back"
          />

            </div>
          
        </div>
      </div>
    </div>
  );
};

export default PlantInfoSection;
