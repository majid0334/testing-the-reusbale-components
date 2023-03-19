import React, { useState } from "react";
function Main({
  headerImage,
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fiveImage,
}) {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  //för lightbox
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <div>
      {openModal && (
        <div onClick={handleCloseModal}>
          <div>
            <h2>
              <img src={firstImage} />
            </h2>
            <ul>
              <li>
                <p>
                  <img src={secondImage} />
                </p>
              </li>
              <li>
                <p>
                  <img src={thirdImage} />
                </p>
              </li>
              <li>
                <p>
                  <img src={fourthImage} />
                </p>
              </li>
              <li>
                <p>
                  <img src={firstImage} />
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div onClick={handleOpenModal}>
        <h2>
          <img src={headerImage} />
        </h2>
        <ul>
          <li>
            <p>
              <img src={secondImage} />
            </p>
          </li>
          <li>
            <p>
              <img src={thirdImage} />
            </p>
          </li>
          <li>
            <p>
              <img src={fourthImage} />
            </p>
          </li>
          <li>
            <p>
              <img src={fiveImage} />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
