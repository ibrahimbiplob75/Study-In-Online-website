import {
  
  FaHeadphonesAlt,
  FaMoneyCheckAlt,
  FaRocket,
  FaThumbtack,
} from "react-icons/fa";

const Features = () => {
  return (
    <div>
      {/* Shiping */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-20 mb-10  w-3/4 mx-auto shadow-2xl">
        <div className="flex justify-center items-center p-6">
          <FaThumbtack className="text-xl w-32 h-12 text-red-600"></FaThumbtack>
          <div>
            <h1 className="text-2xl font-semibold">Free Platform</h1>
            <p>No Registration fee is require for to join us!</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-6">
          <FaHeadphonesAlt className="text-xl w-32 h-12 text-red-600"></FaHeadphonesAlt>
          <div>
            <h1 className="text-2xl font-semibold">Support 24/ 7</h1>
            <p>we are online in 24/7</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-6">
          <FaRocket className="text-xl w-32 h-12 text-red-600"></FaRocket>
          <div>
            <h1 className="text-2xl font-semibold">All time support</h1>
            <p>If goods have problems we all are here to support each other</p>
          </div>
        </div>

        <div className="flex justify-center items-center p-6">
          <FaMoneyCheckAlt className="text-xl w-32 h-12 text-red-600"></FaMoneyCheckAlt>
          <div>
            <h1 className="text-2xl font-semibold">Utalized your time</h1>
            <p>You are commitment that here everyone will be benifited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
