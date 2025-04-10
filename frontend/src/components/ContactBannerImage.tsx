import img6 from '../assets/img6.jpg';

interface ContactBox {
  id: number;
  image: string;
  title: string;
  description: string;
}

const contactBoxes: ContactBox[] = [
  {
    id: 1,
    image: img6,
    title: 'Worship with us',
    description:
      'Join our vibrant community every Sunday for a spirit-filled worship experience that connects hearts and minds.',
  },
  {
    id: 2,
    image: img6,
    title: 'Join a Group',
    description:
      'Be part of a small group that encourages growth, friendship, and accountability through weekly fellowship.',
  },
  {
    id: 3,
    image: img6,
    title: 'Volunteer Today',
    description:
      'Use your gifts and time to serve others and make an impact in our community through various ministries.',
  },
  {
    id: 4,
    image: img6,
    title: 'Contact Us',
    description:
      'We’re here to help! Reach out for prayers, inquiries, or just to say hello — we’d love to hear from you.',
  },
];

const ContactBannerImage = () => {
  return (
    <div className="grid md:grid-cols-2   lg:grid-cols-4 gap-4">
      {contactBoxes.map((box) => (
        <div
          key={box.id}
          className="  rounded-lg shadow-lg px-2 py-2 flex flex-col items-center text-center"
        >
          <img
            src={box.image}
            alt={box.title}
            className="w-full  lg:h-72 object-cover rounded-md mb-4"
          />
          <h2 className="font-bold text-xl mb-2">{box.title}</h2>
          <p className="lg:text-sm md:text-[10px]">{box.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactBannerImage;
