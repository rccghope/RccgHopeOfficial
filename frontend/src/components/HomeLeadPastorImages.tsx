import img34 from '../assets/img34.png'
const HomeLeadPastorImages = () => {
  return (
    <div>
      <img
        src={img34}
        alt="Outlined"
        style={{
          border: '2px dashed black',
          padding: '5px', // Optional, for spacing between image and border
          display: 'block', // Ensures no inline spacing issues
          maxWidth: '100%', // Optional: makes it responsive
          borderRadius: '4px', // Optional: remove if you want sharp corners
        }}
      />
    </div>
  );
};

export default HomeLeadPastorImages;
