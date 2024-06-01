'use client'; // todo: do not use client

export default function GoogleTitle() {
  return (
    <div className="font-normal tracking-[0.5px] box-border bg-white p-[24px] border-b-[rgb(229,229,221)] border-b border-solid">
      <div className="font-normal tracking-[0.5px] box-border items-center flex justify-start w-[510px] mx-[673.5px] my-0">
        <span className="font-normal tracking-[0.5px] box-border block h-[42px] w-[57px] ml-0 mr-[8px] my-0">
          <picture className="font-normal tracking-[0.5px] box-border items-center flex h-[42px] justify-center w-[57px]">
            <source
              srcSet="
      https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-1x.avif,
      https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-2x.avif 2x
    "
              type="image/avif"
              className="font-normal tracking-[0.5px] box-border"
            />
            <source
              srcSet="
      https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-1x.jpg,
      https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-2x.jpg 2x
    "
              type="image/jpeg"
              className="font-normal tracking-[0.5px] box-border"
            />
            <img
              src="https://consumersiteimages.trustpilot.net/business-units/46a7e93b000064000500918b-198x149-1x.jpg"
              alt=""
              className="font-normal tracking-[0.5px] box-border max-h-full max-w-full"
            />
          </picture>
        </span>
        <span className="font-normal tracking-[0.5px] box-border">
          <h1 className="text-[rgb(28,28,28)] text-[16px] font-bold tracking-[-0.176px] leading-[19.2px] box-border m-0">
            Google
          </h1>
          <p className="text-[rgb(105,106,106)] text-[16px] font-normal tracking-[0.176px] leading-[22.4px] box-border m-0">
            www.google.com
          </p>
        </span>
      </div>
    </div>
  );
}
