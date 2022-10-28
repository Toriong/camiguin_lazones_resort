import { randomUUID } from "crypto";
import { introPic } from "interfaces/interfaces";
import { useState } from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

function IntroPicsSec() {
  const [pics, setPics] = useState<introPic[]>([
    { isOnUI: true, path: "introPic" },
    { isOnUI: false, path: "interiorLivingRoom" },
    { isOnUI: false, path: "interiorStairs" },
    { isOnUI: false, path: "interiorDinningRoom" },
  ]);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  let picId = uuidv4();

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

  //   GOAL: make the pics and overlay flicker when the user clicks on the button to navigate to different sections of the intro pics

  return (
    <section className="row noMargin noPadding introPicsSec flex-nowrap">
      <section className="border-bottom col-12 border noPadding noMargin introPicsSubSec position-relative">
        {/* {pics.map(({ isOnUI }) => isOnUI ? <IntroPic path={`/imgs/${pics[currentPicIndex].path}.jpeg`} /> : null)} */}

        {/* MAKE THE IMAGE AND THE PIC FLICKER WHEN THE USER CLICKS ON THE BUTTON  */}
        {/* GOAL: make the following three elements below to re-render seperate from the home page component */}
        <img
          key={picId}
          src={`/imgs/${pics[currentPicIndex].path}.jpeg`}
          alt="camiguin_lazones_resort_introPic"
          className="w-100 h-100 position-absolute flicker"
        />
        <div className="overlay position-absolute w-100 h-100 flicker" />
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
