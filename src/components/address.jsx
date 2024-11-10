const Address = () => {
  return (
    <div className="max-w-[1500px] mx-auto my-16">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <br />
      <div className="flex gap-24 justify-center my-8">
        <div className="border w-72 text-center">
          <h2 className="text-xl font-semibold">Address</h2>
          <p>
            1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
          </p>
        </div>
        <div className="border w-72 text-center">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            313-332-8662
            <br />
            info@email.com
          </p>
        </div>
      </div>
      <div className="w-[750px] bg-gray-200 mx-auto">
        <h1 className="font-semibold ml-[67px] my-5 pt-5">Leave a message</h1>
        <div className="gap-8 flex justify-center ">
          <input placeholder="Your name" className="border w-72" type="text" />
          <input
            placeholder="Your e-mail"
            className="border w-72"
            type="text"
          />
        </div>
        <input
          placeholder="Subject"
          className="border mt-6 w-[610px] ml-[67px]      "
          type="text"
        />
        <br />
        <input
          placeholder="Write a message"
          className=" border my-6 w-[610px] h-[150px] ml-[67px]"
          type="text"
        />
        <button className="bg-blue-500 rounded text-white h-12 w-36 ml-[67px] mb-5  ">
          Send a message
        </button>
      </div>
    </div>
  );
};
export default Address;
