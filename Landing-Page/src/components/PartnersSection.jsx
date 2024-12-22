import { motion } from 'framer-motion';

export default () => {
  const team = [
    {
      avatar: "https://i.pinimg.com/736x/20/3d/6a/203d6aedc13a691413bb753d80c8583b.jpg",
      name: "Hansraj Hathi",
      title: "Canteen Owner",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      avatar: "https://i.pinimg.com/736x/0d/65/9c/0d659c0196ada4d548dd141f3ce1e70b.jpg",
      name: "Krishnan Iyer",
      title: "South Indian Vendor",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      avatar: "https://i.pinimg.com/736x/21/08/04/21080497d3b8c514823b1909c4bed074.jpg",
      name: "Tarak Mehta",
      title: "Beverage Stall Owner",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      avatar: "https://i.pinimg.com/736x/27/21/47/27214762c359c67b09687875eadbbedb.jpg",
      name: "Gurucharan Singh",
      title: "Frankie Stall Owner",
      whatsapp: "https://wa.me/1234567890",
    }
  ];

  return (
    <section className="bg-gray-100 py-14" id="partners">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }} 
        >
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our Partners
          </h3>
          <p className="text-gray-600 mt-3">
            "Partnering with food stall owners to bring fresh, delicious flavors to your fingertips. Together, we aim to enhance your dining experience with convenience and quality!"
          </p>
        </motion.div>
        <div className="mt-12 px-2">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex gap-4 items-center opacity-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <div className="w-24 h-24">
                  <motion.img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt=""
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                  <p className="text-gray-500">{item.title}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        className="transition-all duration-300 hover:text-[#28D146] group-hover:scale-110 group-hover:rotate-12"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <path fill='#28D146'
                          d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"
                        />
                      </motion.svg>
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
