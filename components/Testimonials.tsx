import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialsData = [
  {
    id: 1,
    name: "John Smith",
    avatar: "/assets/avatar1.jpg",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Earnest Achiever",
    avatar: "/assets/avatar2.jpg",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate impedit esse ut iure nesciunt officia iusto nostrum harum porro.",
  },
  {
    id: 3,
    name: "Mario Paul",
    avatar: "/assets/avatar3.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit distinctio porro quia voluptas ea!",
  },
  {
    id: 4,
    name: "Adam Haul",
    avatar: "/assets/avatar4.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis quae, facilis mollitia totam sequi excepturi molestiae, optio quod error nostrum fuga iste aut et fugiat, veniam voluptas perspiciatis iure quam? Explicabo dolores adipisci corporis voluptatibus eius, animi architecto quaerat.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container mx-auto w-[40%] pb-16"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ id, name, avatar, review }) => (
          <SwiperSlide
            key={id}
            className="bg-bgVariant text-center p-8 rounded-2 select-none"
          >
            <div className="w-16 aspect-square overflow-hidden rounded-full mx-auto mt-0 mb-4 border-[0.2rem] border-solid border-primaryVariant">
              <img src={avatar} alt={`avatar-${id}`} />
            </div>
            <h5>{name}</h5>
            <small className="text-light block font-light w-[80%] mx-auto mt-[0.8rem] mb-0">
              {review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
