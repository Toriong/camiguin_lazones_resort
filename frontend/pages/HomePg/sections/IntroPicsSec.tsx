import { randomUUID } from "crypto";
import { introPic } from "interfaces/interfaces";
import { useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function IntroPicsSec() {
  const picsTxtsPic1 = ["WHY", "CHOOSE", "US?"];
  const picsTxtsPic2 = ["OUR", "MISSION"];
  const picsTxtsPic3 = ["OUR", "VALUES"];
  const picTxtsPic4 = ["STAY", "WITH", "US!"];
  const [pics, setPics] = useState<introPic[]>([
    { isOnUI: true, path: "introPic", picTxts: picsTxtsPic1 },
    { isOnUI: false, path: "interiorLivingRoom", picTxts: picsTxtsPic2 },
    { isOnUI: false, path: "interiorStairs", picTxts: picsTxtsPic3 },
    { isOnUI: false, path: "interiorDinningRoom", picTxts: picTxtsPic4 },
  ]);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const picId = uuidv4();
  const introPicTxtId = uuidv4();

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

  //   GOAL: present the different text based on the index of the pics array

  // BRAIN DUMP:
  // have the text display on the ui based on the index of the pic
  // insert the text into the pics array
  // have a section in the jsx hold the text for the intro pic

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
        <section className="w-50 h-75 introPicTxt">
          {/* create an overlay don't will disappear within 2 seconds. Have its width decrease by 50% with each 2 seconds */}
          <section className="position-relative w-100 introPicTxtInnerSec">
            <div
              style={{ zIndex: 100 }}
              className="h-100 w-75 position-absolute end-0 overlayForTxt"
            />
            <h1
              key={introPicTxtId}
              className="text-white introPicHeading text-nowrap d-flex"
            >
              {pics[currentPicIndex].picTxts.map((txt) => {
                const key = uuidv4();
                return (
                    <span key={key} className="slideRight ms-2 w-fitContent">
                      {txt}
                    </span>
                );
              })}
            </h1>
          </section>
        </section>
        <div className="position-absolute bottom-0 d-flex justify-content-center align-items-center w-100 mb-5">
          <div>
            {pics.map(({ isOnUI, path }, index) =>
              isOnUI ? (
                <FaCircle
                  key={path as string}
                  className="me-1 border-dark"
                  onClick={() => {
                    handleBtnClick(index);
                  }}
                />
              ) : (
                <FaRegCircle
                  key={path as string}
                  className="me-1 border-dark bg-secondary rounded-circle"
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
