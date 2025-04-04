const CopyRightText = ({ fixed = false, extraCls = false }) => {
  return (

    <div
      className={`iknow_tm_copyright ${
        extraCls ? extraCls : fixed ? "fixed" : "hidden"
      }`}
    >
      
      <div className="container">
        <div className="inner">
          <div className="left">
            <p>
            Copyright © Phochennai. All Rights Reserved.
            </p>
          </div>
          <div className="right">
          <div className="social">
      <ul>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/youtube.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CopyRightText;
