import { randomUUID } from "crypto";
import MakeReservation from "globalBtns/MakeReservation";
import { introPic } from "globalInterfaces/interfaces";
import { useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import HiAnimations from "../animations/HiAnimations";

function IntroPicsSec() {
  const dummyInfoTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis tempora deleniti dolorem, quia recusandae magnam facilis unde, porro a, nostrum quisquam quidem atque autem odit accusantium tenetur dolorum exercitationem officiis quam voluptatibus similique aperiam! Expedita sed harum facilis dolorem unde dolores non eius odit, neque laborum, fugiat, omnis iste repudiandae."
  // const picsTxtsPic1 = ["WHY", "CHOOSE", "US?"];
  const picsTxtsPic1 = ["WELCOME!"]
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
      <section className="border-bottom col-12 border noPadding noMargin introPicsSubSec position-relative d-flex flex-column justify-content-start justify-content-md-center align-items-center">
        {pics.map(pic => {
          const { path, isOnUI } = pic
          const _className = isOnUI ? "w-100 h-100 position-absolute flicker" : "w-100 h-100 position-absolute flicker d-none"
          return (
            <img
              key={picId}
              src={`/imgs/${path}.jpeg`}
              alt="camiguin_lazones_resort_introPic"
              className={_className}
            />
          )
        })}
        <div className="overlay position-absolute w-100 h-100 flicker" />
        <section className="w-50 mt-md-0 mt-5 pt-3 pt-md-0 introPicTxt d-flex flex-column justify-content-md-start justify-content-center align-items-md-stretch align-items-center pt-0 pt-lg-4 position-relative">
          <section className="position-relative">
            <HiAnimations />
          </section>
          <section className="position-relative w-100 introPicTxtInnerSec mt-5 pt-sm-3">
            <h1
              key={introPicTxtId}
              className="text-white introPicHeading text-nowrap text-md-start d-flex justify-content-center align-items-center justify-content-md-start align-center-md-stretch"
            >
              <span className="w-100 h-100 d-none d-md-flex">
                {pics[currentPicIndex].picTxts.map((text, index) => {
                  const key = uuidv4();

                  return (
                    <p key={key} className={`slideRight w-fitContent text-start headerTxtIntroPics ${index !== 0 ? 'ms-md-4' : ''}`}>
                      {text}
                    </p>
                  );
                })}
              </span>
              {
                <span className="w-100 h-100 d-flex justify-content-center align-items-center d-md-none slideRight text-center">
                  {(pics[currentPicIndex].picTxts.length === 1) && pics[currentPicIndex].picTxts[0]}
                  {(pics[currentPicIndex].picTxts.length === 2) && `${pics[currentPicIndex].picTxts[0]} ${pics[currentPicIndex].picTxts[1]}`}
                  {(pics[currentPicIndex].picTxts.length === 3) && `${pics[currentPicIndex].picTxts[0]} ${pics[currentPicIndex].picTxts[1]} ${pics[currentPicIndex].picTxts[2]}`}
                </span>
              }
            </h1>
          </section>
          <section className="position-relative w-100 mt-sm-3 introPicTxtSec">
            <span className="text-white infoTxtP text-center text-md-start slideUp position-absolute" key={infoTxtId}>{pics[currentPicIndex].infoTxt}</span>
          </section>
          <section className="position-relative w-100 d-flex justify-content-center align-items-center btnContainerIntroPics">
            <MakeReservation buttonKeyForRerender={uuidv4()} />
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
