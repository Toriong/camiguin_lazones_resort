import { randomUUID } from "crypto";
import { introPic } from "interfaces/interfaces";
import { useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function IntroPicsSec() {
    const dummyInfoTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis tempora deleniti dolorem, quia recusandae magnam facilis unde, porro a, nostrum quisquam quidem atque autem odit accusantium tenetur dolorum exercitationem officiis quam voluptatibus similique aperiam! Expedita sed harum facilis dolorem unde dolores non eius odit, neque laborum, fugiat, omnis iste repudiandae."
  const picsTxtsPic1 = ["WHY", "CHOOSE", "US?"];
  const picsTxtsPic2 = ["OUR", "MISSION"];
  const picsTxtsPic3 = ["OUR", "VALUES"];
  const picTxtsPic4 = ["STAY", "WITH", "US!"];
  const [pics, setPics] = useState<introPic[]>([
    { isOnUI: true, path: "introPic", picTxts: picsTxtsPic1, infoTxt: dummyInfoTxt },
    { isOnUI: false, path: "interiorLivingRoom", picTxts: picsTxtsPic2, infoTxt: dummyInfoTxt },
    { isOnUI: false, path: "interiorStairs", picTxts: picsTxtsPic3, infoTxt: dummyInfoTxt },
    { isOnUI: false, path: "interiorDinningRoom", picTxts: picTxtsPic4, infoTxt: dummyInfoTxt },
  ]);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const picId = uuidv4();
  const introPicTxtId = uuidv4();
  const infoTxtId = uuidv4()

  function handleBtnClick(indexOfPicToDisplayOnUI: number) {
    const _pics = pics.map((pic, index) => {
      if (index === currentPicIndex) {
        return {
          ...pic,
          isOnUI: false,
        };
      }

      if (index === indexOfPicToDisplayOnUI) {
        return {
          ...pic,
          isOnUI: true,
        };
      }

      return pic;
    });

    setCurrentPicIndex(indexOfPicToDisplayOnUI);
    setPics(_pics);
  }


  return (
    <section className="row noMargin noPadding introPicsSec flex-nowrap">
      <section className="border-bottom col-12 border noPadding noMargin introPicsSubSec position-relative d-flex justify-content-center align-items-center">
        <img
          key={picId}
          src={`/imgs/${pics[currentPicIndex].path}.jpeg`}
          alt="camiguin_lazones_resort_introPic"
          className="w-100 h-100 position-absolute flicker"
        />

        <div className="overlay position-absolute w-100 h-100 flicker" />
        <section className="w-50 h-75 introPicTxt d-flex flex-column pt-4">
          {/* create an overlay don't will disappear within 2 seconds. Have its width decrease by 50% with each 2 seconds */}
          <section className="position-relative w-100 introPicTxtInnerSec mt-5 pt-3">
            <div
              style={{ zIndex: 100 }}
              className="h-100 w-75 position-absolute end-0 overlayForTxt"
            />
            <h1
              key={introPicTxtId}
              className="text-white introPicHeading text-nowrap d-flex"
            >
              {pics[currentPicIndex].picTxts.map((text, index) => {
                const key = uuidv4();
                
                return (
                    <p key={key} className={`slideRight w-fitContent ${index !== 0 ? 'ms-4' : ''}`}>
                      {text}
                    </p>
                );
              })}
            </h1>
          </section>
          <section className="position-relative w-100 mt-3">
            <span className="text-white infoTxtP slideUp position-absolute" key={infoTxtId}>{pics[currentPicIndex].infoTxt}</span>
          </section>
          {/* only show this section below if the user is on either the first pic or on the last pic */}
          {/* if the user is on the first pic, then show make a reservation button */}
          <section className="position-relative w-100 d-flex justify-content-center align-items-center">
              
          </section>
        </section>
        <div className="position-absolute bottom-0 d-flex justify-content-center align-items-center w-100 mb-5">
          <div>
            {pics.map(({ isOnUI, path }, index) =>
              isOnUI ? (
                <FaCircle
                  key={path as string}
                  className="me-1 border-dark circleBtn pointer"
                  onClick={() => {
                    handleBtnClick(index);
                  }}
                />
              ) : (
                <FaRegCircle
                  key={path as string}
                  className="me-1 border-dark bg-secondary rounded-circle circleBtn pointer"
                  onClick={() => {
                    handleBtnClick(index);
                  }}
                />
              )
            )}
          </div>
        </div>
      </section>
    </section>
  );
}

export default IntroPicsSec;
