import { FaSearch, FaMicrophone, FaCamera } from 'react-icons/fa';
import { FaHeart, FaUser, FaShoppingCart, FaStore } from 'react-icons/fa';

function Head() {
  const handleWishlistClick = () => {
    console.log('Wishlist clicked');
  };

  const handleAccountClick = () => {
    console.log('Account clicked');
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
  };

  const handleMicClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('Microphone access granted', stream);
    } catch (error) {
      console.error('Error accessing microphone', error);
      alert('Unable to access the microphone. Please check your permissions.');
    }
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera access granted', stream);
    } catch (error) {
      console.error('Error accessing camera', error);
      alert('Unable to access the camera. Please check your permissions.');
    }
  };

  return (
    <header className="flex bg-slate-100">
      <div className="m-5 w-56">HARMAIG</div>
      <div className="bg-slate-100 p-2 rounded-lg flex items-center w-full max-w-3xl relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder-gray-500 shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2 pr-16"
        />
        {/* Icons inside the search bar */}
        <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-4">
          <button type="button" onClick={handleMicClick}>
            <FaMicrophone className="text-slate-400" />
          </button>
          <button type="button" onClick={handleCameraClick}>
            <FaCamera className="text-slate-400" />
          </button>
          <button type="submit">
            <FaSearch className="text-slate-400" />
          </button>
        </div>
      </div>

      <div className="w-10 align-middle mr-0">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 space-x-20 ml-20" aria-label="Global">
          <button onClick={handleWishlistClick} title="wishlist" aria-label="Wishlist">
            <FaHeart className="text-red-400" size={24} />
          </button>

          <button onClick={handleAccountClick} title="Account" aria-label="Account">
            <FaUser className="text-slate-600" size={24} />
          </button>

          <button onClick={handleCartClick} title="Cart" aria-label="Cart">
            <FaShoppingCart className="text-orange-400" size={24} />
          </button>

          <button onClick={handleCartClick} title="Store" aria-label="Store">
            <FaStore className="text-orange-400" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Head;
