export default function GoogleTitle() {
  return (
    <div className="bg-white p-[24px] border-b-[rgb(229,229,221)] border-b border-solid flex justify-center">
      <div className="w-screen md:w-[510px]">
        <div className="items-center flex">
          <span className="block h-[42px] w-[57px] mr-[8px]">
            <picture className=" items-center flex h-[42px] justify-center w-[57px]">
              <img
                src="https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-1x.jpg"
                alt=""
                className="max-h-full max-w-full"
              />
            </picture>
          </span>
          <span>
            <h1 className="text-[rgb(28,28,28)] text-[16px] font-bold">
              Google
            </h1>
            <p className="text-[rgb(105,106,106)] text-[16px]">
              www.google.com
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
